import { Module } from '@nestjs/common';
import { OtsController } from './ots.controller';
import { OtsService } from './ots.service';

@Module({
  controllers: [OtsController],
  providers: [OtsService]
})
export class OtsModule {}
