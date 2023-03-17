import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('POSTGRES_URI'),
        //url: configService.get('POSTGRES_URI'),
        /*        autoLoadEntities: true,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true, // shouldn't be used in production - may lose data*/
      }),

      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
