import Router from 'koa-router'
import * as DefaultController from '@/controllers/default.controller'
import { StorePayload } from '@/schemas'
import { validate } from '@/middleware/validate.middleware'
const router = new Router()

router.get('/', DefaultController.index)
router.post('/', validate(StorePayload), DefaultController.store)

export const routes = router.routes()
