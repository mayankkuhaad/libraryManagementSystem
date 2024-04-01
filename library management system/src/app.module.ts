import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryModule } from './library/library.module';
import { LibraryBooks } from './library/library.entity';
// import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port:3306,
      username: 'root',
      password: 'Airbus@380',
      database: 'library',
      entities:[LibraryBooks],
      synchronize: true
    }),
    LibraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
