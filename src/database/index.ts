import {createConnection, Connection} from 'mysql2';

export function getDbConnection(): Connection {
    const connection = createConnection({
        host: 'localhost',
        port: 3306,
        user: 'test',
        password: 'test123',
        database: 'guided-flock'})

    return connection;
}
    
    