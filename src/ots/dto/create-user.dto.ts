import { IsEnum, MinLength } from "class-validator"


export class CreateOtsDto {
    @MinLength(3)
    name:string

    age:number

    @IsEnum(['gun','sword'],{message:"choose gun or sword"})
    weapon:'gun'|'sword'
}
