import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from 'koa-cors'
import * as Pug from 'koa-pug'
import * as Router from 'koa-router'
import * as serve from 'koa-static'
import passport from './passport/passport'
import server from './server'
import projectRoutes from './seeds/projects'

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(bodyParser())
app.use(passport.initialize())

const pug = new Pug({
  viewPath: `${__dirname}/services/invoice`,
})
pug.use(app)

app.use(serve(`${__dirname}/services/invoice`))

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    console.log(new Date())
    console.log(e.message)
    ctx.status = e.status || 500
    ctx.body = e.message
  }
})

router.get('/', async ctx => {
  ctx.body = 'Tax App'
})

app.use(router.routes())
app.use(projectRoutes.routes())

server.applyMiddleware({ app })

export default app
