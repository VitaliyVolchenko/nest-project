import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(cat: Cat): Promise<Cat> {
    const newCat = new this.catModel(cat);
    return await newCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return await this.catModel.findOne({ _id: id })
  }

  async delete(id: string): Promise<Cat> {
    return await this.catModel.findByIdAndRemove(id);
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(id, cat, {new :true});
  }

}
