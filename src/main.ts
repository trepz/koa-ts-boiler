import 'module-alias/register'
import env from 'dotenv'
env.config()

import Koa from 'koa'
import responseTime from 'koa-response-time'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'
import * as config from '@/config'
import { routes } from '@/routes'
import { jwt } from '@/middleware/jwt.middleware'

const app = new Koa()

app.use(responseTime())
app.use(helmet())
app.use(logger())
app.use(cors(config.cors))
app.use(bodyParser(config.bodyParser))
app.use(jwt)
app.use(routes)

app.listen(config.server.port, () => console.log(`App listening on port: ${config.server.port}`))
