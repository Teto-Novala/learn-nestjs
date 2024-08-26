import { PartialType } from '@nestjs/mapped-types';
import { CreateOtsDto } from './create-user.dto';

export class UpdateOtsDto extends PartialType(CreateOtsDto) {}
