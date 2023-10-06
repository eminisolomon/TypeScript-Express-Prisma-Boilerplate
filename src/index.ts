import { config as configDotenv } from 'dotenv';
import server from './server';
import appConfig from './config/app.config';
import prismaClient from '@/lib/prisma';
import environment from '@/lib/environment';
import logger from './lib/logger';

configDotenv();

server.listen(process.env.PORT, () => {
  const { port, env, appUrl: _appUrl } = environment;
  const {
    api: { basePath, version },
  } = appConfig;
  const appUrl = `${_appUrl}:${port}`;
  const apiUrl = `${appUrl}/${basePath}/${version}/${env}`;
  logger.info(`Server is running on port ${port} in ${env} mode.`);
  logger.info(`App URL: ${appUrl}`);
  logger.info(`API URL: ${apiUrl}`);
});

process.on('SIGINT', () => {
  prismaClient.$disconnect();
  logger.info('Prisma Disconnected.');
  process.exit(0);
});
