import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
 type: 'postgres',
 url: 'postgres://bon:1234567890@localhost/journal',
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
