export const server = {
  port: +(process.env.PORT || 3000),
  host: process.env.host || 'localhost',
}

export const db = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || '',
  },
}

export const cors = {
  origin: '*',
  exposeHeaders: ['Authorization'],
  credentials: true,
  allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowHeaders: ['Authorization', 'Content-Type'],
  keepHeadersOnError: true,
}

export const bodyParser = {
  enableTypes: ['json'],
}

export const secret = process.env.SECRET || 'secret'
