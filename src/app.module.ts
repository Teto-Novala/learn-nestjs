import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtsModule } from './ots/ots.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OtsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
