import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'images', 'imagenes_web')
    const files = fs.readdirSync(dir)
    const images = files
      .filter(f => ALLOWED_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .map(f => ({
        name: f,
        url: `/images/imagenes_web/${encodeURIComponent(f)}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
    return NextResponse.json(images)
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
