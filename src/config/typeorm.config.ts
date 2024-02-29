import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Nikusya',
  password: 'zzxxccvv',
  database: 'unscramble',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
