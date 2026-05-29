-- ============================================================
-- Migration 007: Storage Policies for allura-media bucket
-- Project: Allura Healthcare
-- Fixed SITE_ID: '00000000-0000-0000-0000-000000000001'
-- ============================================================

-- NOTE: The `allura-media` storage bucket must already exist.
-- Create it manually via the Supabase Dashboard (Storage > New bucket)
-- or via the Supabase CLI before applying these policies.
-- Bucket settings: public = true (to allow unauthenticated reads).

-- ============================================================
-- PUBLIC READ — Anyone can read objects from allura-media
-- ============================================================

CREATE POLICY "allura_media_select_public"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'allura-media');

-- ============================================================
-- INSERT — Only authenticated owner/admin/editor can upload
-- ============================================================

CREATE POLICY "allura_media_insert_editor"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'allura-media'
    AND EXISTS (
      SELECT 1 FROM public.site_users
      WHERE user_id = auth.uid()
        AND site_id = '00000000-0000-0000-0000-000000000001'::uuid
        AND role IN ('owner', 'admin', 'editor')
    )
  );

-- ============================================================
-- UPDATE — Only authenticated owner/admin/editor can update objects
-- ============================================================

CREATE POLICY "allura_media_update_editor"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'allura-media'
    AND EXISTS (
      SELECT 1 FROM public.site_users
      WHERE user_id = auth.uid()
        AND site_id = '00000000-0000-0000-0000-000000000001'::uuid
        AND role IN ('owner', 'admin', 'editor')
    )
  )
  WITH CHECK (
    bucket_id = 'allura-media'
    AND EXISTS (
      SELECT 1 FROM public.site_users
      WHERE user_id = auth.uid()
        AND site_id = '00000000-0000-0000-0000-000000000001'::uuid
        AND role IN ('owner', 'admin', 'editor')
    )
  );

-- ============================================================
-- DELETE — Only authenticated owner/admin/editor can delete objects
-- ============================================================

CREATE POLICY "allura_media_delete_editor"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'allura-media'
    AND EXISTS (
      SELECT 1 FROM public.site_users
      WHERE user_id = auth.uid()
        AND site_id = '00000000-0000-0000-0000-000000000001'::uuid
        AND role IN ('owner', 'admin', 'editor')
    )
  );
