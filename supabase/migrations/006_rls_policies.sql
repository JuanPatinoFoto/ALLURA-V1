-- ============================================================
-- Migration 006: Row Level Security Policies
-- Project: Allura Healthcare
-- ============================================================

-- ============================================================
-- HELPER FUNCTION: get_user_role
-- Returns the role of the calling user for a given site.
-- Returns NULL if the user has no membership in that site.
-- ============================================================

CREATE OR REPLACE FUNCTION public.get_user_role(p_site_id uuid)
RETURNS TEXT
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role
  FROM public.site_users
  WHERE user_id = auth.uid()
    AND site_id = p_site_id
  LIMIT 1;
$$;

-- ============================================================
-- ENABLE RLS ON ALL TABLES
-- ============================================================

ALTER TABLE public.sites                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_users           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocks               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_categories   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.popups               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promotions           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation_menus     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation_items     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redirects            ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- SITES
-- Authenticated users who are members of that site can SELECT.
-- ============================================================

CREATE POLICY "sites_select_members"
  ON public.sites
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.site_users su
      WHERE su.site_id = sites.id
        AND su.user_id = auth.uid()
    )
  );

-- ============================================================
-- PROFILES
-- Users can only read and update their own profile.
-- ============================================================

CREATE POLICY "profiles_select_own"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "profiles_update_own"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- ============================================================
-- SITE_USERS
-- Any member of the site can SELECT.
-- Only owner/admin can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "site_users_select_members"
  ON public.site_users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.site_users su
      WHERE su.site_id = site_users.site_id
        AND su.user_id = auth.uid()
    )
  );

CREATE POLICY "site_users_insert_owner_admin"
  ON public.site_users
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

CREATE POLICY "site_users_update_owner_admin"
  ON public.site_users
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

CREATE POLICY "site_users_delete_owner_admin"
  ON public.site_users
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

-- ============================================================
-- SITE_SETTINGS
-- Any site member can SELECT.
-- Only owner/admin can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "site_settings_select_members"
  ON public.site_settings
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.site_users su
      WHERE su.site_id = site_settings.site_id
        AND su.user_id = auth.uid()
    )
  );

CREATE POLICY "site_settings_insert_owner_admin"
  ON public.site_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

CREATE POLICY "site_settings_update_owner_admin"
  ON public.site_settings
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

CREATE POLICY "site_settings_delete_owner_admin"
  ON public.site_settings
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

-- ============================================================
-- PAGES (has status column: draft/published/archived)
-- Public can SELECT published pages.
-- Authenticated members can SELECT all (for admin panel preview).
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "pages_select_published"
  ON public.pages
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "pages_select_members"
  ON public.pages
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "pages_insert_editor"
  ON public.pages
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "pages_update_editor"
  ON public.pages
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "pages_delete_editor"
  ON public.pages
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- SECTIONS (no status — uses is_visible boolean)
-- Public can SELECT all (visibility filtered in app layer).
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- site_id resolved via parent pages join.
-- ============================================================

CREATE POLICY "sections_select_public"
  ON public.sections
  FOR SELECT
  USING (true);

CREATE POLICY "sections_insert_editor"
  ON public.sections
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.pages p
      WHERE p.id = sections.page_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  );

CREATE POLICY "sections_update_editor"
  ON public.sections
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.pages p
      WHERE p.id = sections.page_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.pages p
      WHERE p.id = sections.page_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  );

CREATE POLICY "sections_delete_editor"
  ON public.sections
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.pages p
      WHERE p.id = sections.page_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  );

-- ============================================================
-- BLOCKS (no status — uses is_visible boolean)
-- Public can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- site_id resolved via sections → pages join.
-- ============================================================

CREATE POLICY "blocks_select_public"
  ON public.blocks
  FOR SELECT
  USING (true);

CREATE POLICY "blocks_insert_editor"
  ON public.blocks
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.sections s
      JOIN public.pages p ON p.id = s.page_id
      WHERE s.id = blocks.section_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  );

CREATE POLICY "blocks_update_editor"
  ON public.blocks
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.sections s
      JOIN public.pages p ON p.id = s.page_id
      WHERE s.id = blocks.section_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.sections s
      JOIN public.pages p ON p.id = s.page_id
      WHERE s.id = blocks.section_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  );

CREATE POLICY "blocks_delete_editor"
  ON public.blocks
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.sections s
      JOIN public.pages p ON p.id = s.page_id
      WHERE s.id = blocks.section_id
        AND public.get_user_role(p.site_id) IN ('owner', 'admin', 'editor')
    )
  );

-- ============================================================
-- SERVICE_CATEGORIES (no status column)
-- Public can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "service_categories_select_public"
  ON public.service_categories
  FOR SELECT
  USING (true);

CREATE POLICY "service_categories_insert_editor"
  ON public.service_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "service_categories_update_editor"
  ON public.service_categories
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "service_categories_delete_editor"
  ON public.service_categories
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- SERVICES (has status column: draft/published/archived)
-- Public can SELECT published services.
-- Authenticated members can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "services_select_published"
  ON public.services
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "services_select_members"
  ON public.services
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "services_insert_editor"
  ON public.services
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "services_update_editor"
  ON public.services
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "services_delete_editor"
  ON public.services
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- BLOG_POSTS (has status column: draft/published/archived)
-- Public can SELECT published posts.
-- Authenticated members can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "blog_posts_select_published"
  ON public.blog_posts
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "blog_posts_select_members"
  ON public.blog_posts
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "blog_posts_insert_editor"
  ON public.blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "blog_posts_update_editor"
  ON public.blog_posts
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "blog_posts_delete_editor"
  ON public.blog_posts
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- TEAM_MEMBERS (no status — uses is_visible boolean)
-- Public can SELECT visible members.
-- Authenticated members can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "team_members_select_visible"
  ON public.team_members
  FOR SELECT
  USING (is_visible = true);

CREATE POLICY "team_members_select_members"
  ON public.team_members
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "team_members_insert_editor"
  ON public.team_members
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "team_members_update_editor"
  ON public.team_members
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "team_members_delete_editor"
  ON public.team_members
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- TESTIMONIALS (no status — uses is_visible boolean)
-- Public can SELECT visible testimonials.
-- Authenticated members can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "testimonials_select_visible"
  ON public.testimonials
  FOR SELECT
  USING (is_visible = true);

CREATE POLICY "testimonials_select_members"
  ON public.testimonials
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "testimonials_insert_editor"
  ON public.testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "testimonials_update_editor"
  ON public.testimonials
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "testimonials_delete_editor"
  ON public.testimonials
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- FAQS (no status — uses is_visible boolean)
-- Public can SELECT visible FAQs.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "faqs_select_visible"
  ON public.faqs
  FOR SELECT
  USING (is_visible = true);

CREATE POLICY "faqs_select_members"
  ON public.faqs
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "faqs_insert_editor"
  ON public.faqs
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "faqs_update_editor"
  ON public.faqs
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "faqs_delete_editor"
  ON public.faqs
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- GALLERY_ITEMS (no status — uses is_visible boolean)
-- Public can SELECT visible items.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "gallery_items_select_visible"
  ON public.gallery_items
  FOR SELECT
  USING (is_visible = true);

CREATE POLICY "gallery_items_select_members"
  ON public.gallery_items
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "gallery_items_insert_editor"
  ON public.gallery_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "gallery_items_update_editor"
  ON public.gallery_items
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "gallery_items_delete_editor"
  ON public.gallery_items
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- VIDEOS (no status — uses is_visible boolean)
-- Public can SELECT visible videos.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "videos_select_visible"
  ON public.videos
  FOR SELECT
  USING (is_visible = true);

CREATE POLICY "videos_select_members"
  ON public.videos
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "videos_insert_editor"
  ON public.videos
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "videos_update_editor"
  ON public.videos
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "videos_delete_editor"
  ON public.videos
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- POPUPS (no status — uses is_active boolean)
-- Public can SELECT active popups.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "popups_select_active"
  ON public.popups
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "popups_select_members"
  ON public.popups
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "popups_insert_editor"
  ON public.popups
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "popups_update_editor"
  ON public.popups
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "popups_delete_editor"
  ON public.popups
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- PROMOTIONS (no status — uses is_active boolean)
-- Public can SELECT active promotions.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "promotions_select_active"
  ON public.promotions
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "promotions_select_members"
  ON public.promotions
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor', 'viewer')
  );

CREATE POLICY "promotions_insert_editor"
  ON public.promotions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "promotions_update_editor"
  ON public.promotions
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "promotions_delete_editor"
  ON public.promotions
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- NAVIGATION_MENUS (no status column)
-- Public can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "navigation_menus_select_public"
  ON public.navigation_menus
  FOR SELECT
  USING (true);

CREATE POLICY "navigation_menus_insert_editor"
  ON public.navigation_menus
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "navigation_menus_update_editor"
  ON public.navigation_menus
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "navigation_menus_delete_editor"
  ON public.navigation_menus
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- NAVIGATION_ITEMS (no status — uses is_visible boolean)
-- Public can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- site_id resolved via parent navigation_menus join.
-- ============================================================

CREATE POLICY "navigation_items_select_public"
  ON public.navigation_items
  FOR SELECT
  USING (true);

CREATE POLICY "navigation_items_insert_editor"
  ON public.navigation_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.navigation_menus nm
      WHERE nm.id = navigation_items.menu_id
        AND public.get_user_role(nm.site_id) IN ('owner', 'admin', 'editor')
    )
  );

CREATE POLICY "navigation_items_update_editor"
  ON public.navigation_items
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.navigation_menus nm
      WHERE nm.id = navigation_items.menu_id
        AND public.get_user_role(nm.site_id) IN ('owner', 'admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.navigation_menus nm
      WHERE nm.id = navigation_items.menu_id
        AND public.get_user_role(nm.site_id) IN ('owner', 'admin', 'editor')
    )
  );

CREATE POLICY "navigation_items_delete_editor"
  ON public.navigation_items
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.navigation_menus nm
      WHERE nm.id = navigation_items.menu_id
        AND public.get_user_role(nm.site_id) IN ('owner', 'admin', 'editor')
    )
  );

-- ============================================================
-- MEDIA_ASSETS (no status column)
-- Public can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "media_assets_select_public"
  ON public.media_assets
  FOR SELECT
  USING (true);

CREATE POLICY "media_assets_insert_editor"
  ON public.media_assets
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "media_assets_update_editor"
  ON public.media_assets
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "media_assets_delete_editor"
  ON public.media_assets
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

-- ============================================================
-- FORM_SUBMISSIONS
-- INSERT: anon visitors (public) can submit forms.
-- SELECT: only owner/admin/editor can read submissions.
-- UPDATE/DELETE: only owner/admin.
-- ============================================================

CREATE POLICY "form_submissions_insert_public"
  ON public.form_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "form_submissions_select_editor"
  ON public.form_submissions
  FOR SELECT
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "form_submissions_update_owner_admin"
  ON public.form_submissions
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

CREATE POLICY "form_submissions_delete_owner_admin"
  ON public.form_submissions
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin')
  );

-- ============================================================
-- REDIRECTS (no status column)
-- Public can SELECT all.
-- Only owner/admin/editor can INSERT/UPDATE/DELETE.
-- ============================================================

CREATE POLICY "redirects_select_public"
  ON public.redirects
  FOR SELECT
  USING (true);

CREATE POLICY "redirects_insert_editor"
  ON public.redirects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "redirects_update_editor"
  ON public.redirects
  FOR UPDATE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  )
  WITH CHECK (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );

CREATE POLICY "redirects_delete_editor"
  ON public.redirects
  FOR DELETE
  TO authenticated
  USING (
    public.get_user_role(site_id) IN ('owner', 'admin', 'editor')
  );
