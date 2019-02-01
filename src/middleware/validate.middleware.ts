import { ObjectSchema } from 'yup'
import { Context } from 'koa'

export function validate(schema: ObjectSchema<any>): (ctx: Context, next: () => Promise<void>) => Promise<void> {
  return async (ctx, next) => {
    try {
      ctx.request.body = await schema.validate(ctx.request.body)
    } catch (e) {
      ctx.throw(422, e)
    }
    return next()
  }
}
