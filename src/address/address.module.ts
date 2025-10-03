import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from './schema/address.schema';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  providers: [AddressService, AddressResolver],
  exports: [AddressService],
})
export class AddressModule {}
