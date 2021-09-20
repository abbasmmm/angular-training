/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class Customer {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    first?: string;

    @ApiProperty()
    last?: string;

    @ApiProperty()
    company?: string;

    @ApiProperty()
    created_at?: string;

    @ApiProperty()
    country?: string
}