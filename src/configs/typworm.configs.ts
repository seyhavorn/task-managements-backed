import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5436,
  username: 'postgres',
  password: '123456',
  database: 'taskDB',
  autoLoadEntities: true,
  synchronize: true,
};
