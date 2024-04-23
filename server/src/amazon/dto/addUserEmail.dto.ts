import { IsEmail, IsUUID } from "class-validator";

export class AddUserEmailDto {
    @IsEmail()
    email: string;

    @IsUUID()
    productId: string;
}