import { Controller,Post ,Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dtos/employee.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}


    @Post('/signup')
    createEmployee(
        @Body() body:SignupDto
    ){
        return this.authService.signup(body)
    }

    @Post('/signin')
    signin(@Body() body: SigninDto){
        return this.authService.signin(body)
    }
}
