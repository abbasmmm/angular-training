/* eslint-disable prettier/prettier */
import { Body, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Customer } from './customer';
import { CustomersService } from './customer.service';

@Controller('customers-secure')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
@ApiTags('Secure APIs')
export class CustomersSecureController {

    /**
     *
     */
    constructor(private customerService: CustomersService) {

    }

    @Get()
    findAll() {
        return this.customerService.getAll();
    }

    @Post()
    create(@Body() customer: Customer): Customer {
        return this.customerService.create(customer);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() customer: Customer)
    {
        return this.customerService.update(id, customer);        
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.sleep(2000, () => this.customerService.delete(id))
    }

    @Post('reset')
    reset() {
        return this.customerService.reset();
    }

    sleep(time, callback) {
        const stop = new Date().getTime();
        while (new Date().getTime() < stop + time) {
            ;
        }

        return callback();
    }
}
