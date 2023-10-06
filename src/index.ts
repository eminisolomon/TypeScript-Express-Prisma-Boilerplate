import express, { Express } from 'express'
import { join } from 'path'
import 'dotenv/config'

import '@/infrastructure/logger'
import { redis } from '@/database'
import {
  corsMiddleware,
  authMiddleware,
  notFoundMiddleware
} from '@/middlewares'
import { router } from '@/routes'
import { i18next, i18nextHttpMiddleware } from '@/i18n'
import { STORAGE_PATH, APP_PORT } from './config/config'

redis.run()

const app: Express = express()

app.use(
  join('/', STORAGE_PATH),
  express.static(join(__dirname, STORAGE_PATH))
)

app.use(
  express.json({ limit: '10mb' }),
  express.urlencoded({ limit: '10mb', extended: true }),
  corsMiddleware,
  i18nextHttpMiddleware.handle(i18next),
  authMiddleware,
  router,
  notFoundMiddleware
)

app.listen(APP_PORT)
