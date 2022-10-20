import { Injectable } from '@nestjs/common';
import { Activo } from './activo.interface';
import { Activo as activoSch, ActivoDocument } from './activo.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ActivoService {
  constructor( 
    @InjectModel(activoSch.name) private readonly activoModel: Model<ActivoDocument>, 
  ) {}
  async create(activo: Activo): Promise<Activo> {
    return await this.activoModel.create(activo);
  }
}
