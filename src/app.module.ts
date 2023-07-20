import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserInterceptor } from './employee/interceptors/user.interceptor';

@Module({
  imports: [PrismaModule, UserModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide:APP_INTERCEPTOR,
      useClass:UserInterceptor
    }
  ],
})
export class AppModule {}
