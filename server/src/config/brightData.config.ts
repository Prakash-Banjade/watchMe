import * as dotenv from 'dotenv';
dotenv.config()

export const brightDataOptions = {
    username: process.env.BRIGHT_DATA_USERNAME,
    password: process.env.BRIGHT_DATA_PASSWORD,
    host: process.env.BRIGHT_DATA_HOST,
    port: process.env.BRIGHT_DATA_PORT,
    sessionId: (1000000 * Math.random()) | 0,
}

export const brightDataAxiosOptions = {
    auth: {
        username: `${brightDataOptions.username}-session-${brightDataOptions.sessionId}`,
        password: brightDataOptions.password
    },
    host: brightDataOptions.host,
    port: brightDataOptions.port,
    rejectUnauthorized: false
}