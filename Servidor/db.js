import pg from 'pg'
import 'dotenv/config'

const pool = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    max: process.env.MAX
})

export default pool
