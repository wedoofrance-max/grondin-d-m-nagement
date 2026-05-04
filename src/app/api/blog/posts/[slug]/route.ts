import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { prisma } = await import('@/lib/db')
    const post = await prisma.blogPost.findUnique({
      where: { slug: params.slug, published: true },
    })

    if (!post) {
      return NextResponse.json({ error: 'Article introuvable' }, { status: 404 })
    }

    // Increment view count without awaiting
    prisma.blogPost.update({
      where: { id: post.id },
      data: { viewCount: { increment: 1 } },
    }).catch(() => {})

    return NextResponse.json(post)
  } catch (err) {
    console.error('[BLOG POST]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
