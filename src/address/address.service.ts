import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address, AddressDocument } from './schema/address.schema';
import {
  AddressType,
  CreateAddressInput,
  UpdateAddressInput,
} from './dto/address.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  async getAllAddresses(): Promise<AddressType[]> {
    const addresses = await this.addressModel.find().exec();
    return addresses.map((address) => this.transformToGraphQLType(address));
  }

  async getAddressesByStudentId(studentId: string): Promise<AddressType[]> {
    if (!Types.ObjectId.isValid(studentId)) {
      return [];
    }
    const addresses = await this.addressModel
      .find({ student_id: studentId })
      .exec();
    return addresses.map((address) => this.transformToGraphQLType(address));
  }

  async createAddress(data: CreateAddressInput): Promise<AddressType> {
    const address = new this.addressModel(data);
    const savedAddress = await address.save();
    return this.transformToGraphQLType(savedAddress);
  }

  async updateAddress(
    id: string,
    data: UpdateAddressInput,
  ): Promise<AddressType | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const address = await this.addressModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    return address ? this.transformToGraphQLType(address) : null;
  }

  async deleteAddress(id: string): Promise<AddressType | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const address = await this.addressModel.findByIdAndDelete(id).exec();
    return address ? this.transformToGraphQLType(address) : null;
  }

  private transformToGraphQLType(address: AddressDocument): AddressType {
    return {
      _id: (address._id as any).toString(),
      student_id: (address.student_id as any).toString(),
      city: address.city,
      pin_code: address.pin_code,
      createdAt: address.createdAt,
      updatedAt: address.updatedAt,
    };
  }
}
