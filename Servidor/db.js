import pg from 'pg'


const pool = new pg.Pool({
    user: 'aewmoyxm',
    password: 'FuiR_MsqIhRN3jSlGF6xS5nLjN6-dAhS',
    host: 'ziggy.db.elephantsql.com',
    port: 5432,
    database: 'aewmoyxm',
    max: 10
})

export default pool