import { Injectable } from '@nestjs/common';
import { CreateOtsDto } from './dto/create-user.dto';
import { UpdateOtsDto } from './dto/update-user.dto';

@Injectable()
export class OtsService {
    private ots = [
        {
            id:0,
            name:"jack",
            age:12
        },
        {
            id:1,
            name:"luis",
            age:45
        }
    ]

    getOts(age?:number){
        if(age){
            return this.ots.filter((o)=>o.age===age);
        }
        return this.ots;
    }

    getOt(id:number){
        const ot = this.ots.find((o)=>o.id===id);
        if(!ot) throw new Error('user not found');

        return ot;
    }

    createOt(createOtsDto:CreateOtsDto){
        const newOt = {
            ...createOtsDto,
            id:Date.now(),

        }
        this.ots.push(newOt);
        return newOt;
    }

    updateOt(id:number,updateOtsDto:UpdateOtsDto){
        this.ots = this.ots.map((o)=>{
            if(o.id === id){
                return {...o,...updateOtsDto};
            }
            return o;
        })

        return this.getOt(id);
    }

    removeOt(id:number){
        const toBeRemoved = this.getOt(id);

        this.ots = this.ots.filter((o)=>o.id!==id);

        return toBeRemoved;
    }
}
