import {IsNotEmpty, IsNumber, IsNumberString, Matches, min, MinLength} from "class-validator";

export class StudentDTO{
    @IsNotEmpty({message: "Id can't be empty"})
    @IsNumber({}, {message: "Id should be a number"})
    id!: number;
    @IsNotEmpty({message: "Name can't be empty"})
    @MinLength(3, {message: "Name should be at lest 3 characters long"})
    @Matches( /^[A-Za-z ]+$/, {message: "Invalid name"})
    name!: string;
    @IsNotEmpty({message: "Contact can't be empty"})
    @Matches(/^\d{3}-\d{7}$/, {message: "Invalid contact"})
    contact!: string;
}