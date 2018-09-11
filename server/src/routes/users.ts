import { Context } from 'koa'
import * as Router from 'koa-router'
import { IUser, User } from '../Models/User'

const router = new Router({
  prefix: '/users'
})

router.post('/', async ctx => {
  const body = ctx.request.body
  const newUser = await new User(body).save()
  const { password, ...rest } = newUser.toObject()

  ctx.status = 201

  ctx.body = rest
})

export default router
