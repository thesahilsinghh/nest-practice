import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { AddressService } from './address.service';
import {
  AddressType,
  CreateAddressInput,
  UpdateAddressInput,
} from './dto/address.dto';

@Resolver(() => AddressType)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Query(() => [AddressType], { name: 'addresses' })
  async getAllAddresses(): Promise<AddressType[]> {
    return this.addressService.getAllAddresses();
  }

  @Query(() => [AddressType], { name: 'addressesByStudent' })
  async getAddressesByStudentId(
    @Args('studentId', { type: () => ID }) studentId: string,
  ): Promise<AddressType[]> {
    return this.addressService.getAddressesByStudentId(studentId);
  }

  @Mutation(() => AddressType, { name: 'createAddress' })
  async createAddress(
    @Args('input') input: CreateAddressInput,
  ): Promise<AddressType> {
    return this.addressService.createAddress(input);
  }

  @Mutation(() => AddressType, { name: 'updateAddress', nullable: true })
  async updateAddress(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateAddressInput,
  ): Promise<AddressType | null> {
    return this.addressService.updateAddress(id, input);
  }

  @Mutation(() => AddressType, { name: 'deleteAddress', nullable: true })
  async deleteAddress(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<AddressType | null> {
    return this.addressService.deleteAddress(id);
  }
}
