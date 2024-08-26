import { Body, Controller, Delete, Get, NotFoundException, Param,  ParseIntPipe,  Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateOtsDto } from './dto/create-user.dto';
import { UpdateOtsDto } from './dto/update-user.dto';
import { OtsService } from './ots.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ots')
export class OtsController {
    constructor(private readonly otsService:OtsService){}
    // get /ots --> []
    @Get()
    getOts(@Query('age') age:string){
        return this.otsService.getOts(+age);
    }

    // get /ots/:id --> { ... }
    @Get(':id')
    getOneOts(@Param('id',ParseIntPipe) id:number){
        try {
            
            return this.otsService.getOt(id);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    // post /ots
    @Post()
    @UseGuards(BeltGuard)
    createOts(@Body(new ValidationPipe()) createOtsDto:CreateOtsDto){
        return this.otsService.createOt(createOtsDto);
    }

    // put /ots/:id
    @Put(':id')
    updateOts(@Param('id') id:string,@Body() updateOtsDto:UpdateOtsDto){
        return this.otsService.updateOt(+id,updateOtsDto);
    }

    // delete /ots/:id
    @Delete(':id')
    removeOts(@Param('id') id:string){
        return this.otsService.removeOt(+id);
    }
}
