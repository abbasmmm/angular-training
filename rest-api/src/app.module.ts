import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customer.controller';
import { CustomersService } from './customers/customer.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomersSecureController } from './customers/customer-s.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, CustomersController, CustomersSecureController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
