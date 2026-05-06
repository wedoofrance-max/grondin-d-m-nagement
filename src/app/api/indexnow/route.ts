import { NextResponse } from 'next/server'

const INDEXNOW_KEY = 'a7f3d2b8e4c1a9f6d8b2c3e5f1a4d7e9'
const HOST = 'grondin-demenagement.fr'
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`

export async function POST(req: Request) {
  const authHeader = req.headers.get('authorization')
  const secret = process.env.INDEXNOW_SECRET
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let urls: string[]
  try {
    const body = await req.json()
    urls = Array.isArray(body.urls) ? body.urls : [body.url]
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const validUrls = urls.filter(
    (u): u is string => typeof u === 'string' && u.startsWith(`https://${HOST}`)
  )
  if (validUrls.length === 0) {
    return NextResponse.json({ error: 'No valid URLs provided' }, { status: 400 })
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: validUrls,
  }

  const [bingRes, indexnowRes] = await Promise.allSettled([
    fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    }),
    fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    }),
  ])

  return NextResponse.json({
    submitted: validUrls.length,
    bing: bingRes.status === 'fulfilled' ? bingRes.value.status : 'error',
    indexnow: indexnowRes.status === 'fulfilled' ? indexnowRes.value.status : 'error',
  })
}
