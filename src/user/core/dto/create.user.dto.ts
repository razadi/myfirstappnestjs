import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  pass: string;

  @IsEmail()
  @IsNotEmpty()
  mail: string;
}
