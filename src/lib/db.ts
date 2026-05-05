import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null }

function createPrismaClient(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null
  try {
    return new PrismaClient({ log: ['error'] })
  } catch {
    return null
  }
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma !== undefined
    ? globalForPrisma.prisma
    : createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
