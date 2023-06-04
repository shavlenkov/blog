import { DataSource } from 'typeorm'
import * as path from "path";


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '3.89.131.207',
    port: 6033,
    username: 'root',
    password: 'my_secret_password',
    database:  'blog',
    logging: true,
    synchronize: false,
    migrationsRun: false,
    entities: [path.join(__dirname, 'src/**/*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, 'database/migrations/*{.ts,.js}')],
    migrationsTableName: 'history'
})