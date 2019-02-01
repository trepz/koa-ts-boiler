import kjwt from 'koa-jwt'
import { secret } from '@/config'

/**
 * Extract the Json Web Token from the current request header.
 *
 * This middleware always yields next() by setting the passthrough
 * property to true. We then apply authentication at a route-level
 * later on.
 */
export const jwt = kjwt({ secret, passthrough: true, key: 'jwt' })
