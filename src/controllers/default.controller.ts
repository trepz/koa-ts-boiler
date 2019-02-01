import { Context } from 'koa'
import { db } from '@/db'

export async function index(ctx: Context) {
  ctx.body = { Hello: 'world' }
}

export async function store(ctx: Context) {
  const { name } = ctx.request.body

  const [val] = await db('default')
    .insert({ name })
    .catch(() => ctx.throw(500, 'heck', { expose: true }))

  ctx.status = 201
  ctx.body = { success: true, data: ctx.request.body, val }
}
