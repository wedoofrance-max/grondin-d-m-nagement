import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const page     = parseInt(searchParams.get('page') ?? '1', 10)
  const limit    = parseInt(searchParams.get('limit') ?? '9', 10)
  const skip     = (page - 1) * limit

  try {
    const { prisma } = await import('@/lib/db')
    const where = {
      published: true,
      ...(category ? { category } : {}),
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit,
        select: {
          id:             true,
          slug:           true,
          title:          true,
          excerpt:        true,
          featuredImage:  true,
          category:       true,
          publishedAt:    true,
          authorName:     true,
          viewCount:      true,
        },
      }),
      prisma.blogPost.count({ where }),
    ])

    return NextResponse.json({
      posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (err) {
    console.error('[BLOG LIST]', err)
    return NextResponse.json({ posts: [], pagination: { total: 0, page: 1, limit, totalPages: 0 } })
  }
}
