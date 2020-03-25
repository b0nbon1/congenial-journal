import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
 type: 'postgres',
 url: url,
 entities: ['dist/**/*.entity{.ts,.js}'],
 synchronize: false,
 migrationsRun: false,
 logging: true,
 logger: 'file',
 migrations: ['dist/database/migrations/**/*{.ts,.js}'],
 cli: {
  migrationsDir: 'src/database/migrations'
 }
};

export = config;
