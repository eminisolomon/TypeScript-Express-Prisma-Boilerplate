import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
    APP_PORT,
    APP_URL,
    CLIENT_URL,
    MONGODB_URI = "",
    REDIS_URI = "",
    REDIS_TOKEN_EXPIRATION = "",
    JWT_SECRET = "",
    JWT_EXPIRATION,
    MAIL_HOST,
    MAIL_PORT,
    MAIL_USER,
    MAIL_PASSWORD,
    MAIL_TPL_PATH,
    STORAGE_PATH = "",
    API_LOG_FILENAME
} = process.env;

export const expirationTime = REDIS_TOKEN_EXPIRATION ? parseInt(REDIS_TOKEN_EXPIRATION) : undefined;
