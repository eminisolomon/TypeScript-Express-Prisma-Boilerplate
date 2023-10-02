import { APP_URL } from '@/config/config'
import { dirname, join } from 'path'

export const joinRelativeToMainPath = (path = '') => {
  const { filename } = require.main || {}

  if (!filename) return path

  return join(dirname(filename), path)
}

export const appUrl = (path = '') => `${APP_URL}/${path}`
