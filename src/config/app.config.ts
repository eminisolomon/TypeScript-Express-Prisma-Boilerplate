import { DEFAULT_PORT } from '@/utils/constants';

interface AppConfig {
  api: {
    basePath: string;
    version: string;
  };
  docs: {
    swaggerUIPath: string;
    apiDocsPath: string;
  };
  logs: {
    dir: string;
    logFile: string;
    errorLogFile: string;
  };
  defaultPort: number;
}

const appConfig: AppConfig = {
  api: {
    basePath: 'api',
    version: 'v1',
  },
  docs: {
    swaggerUIPath: '/v1/swagger',
    apiDocsPath: '/v1/api-docs',
  },
  logs: {
    dir: './logs',
    logFile: 'app.log',
    errorLogFile: 'error.log',
  },
  defaultPort: DEFAULT_PORT,
};

export default appConfig;
