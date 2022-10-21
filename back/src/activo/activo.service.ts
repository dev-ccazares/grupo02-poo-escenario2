import { Injectable } from '@nestjs/common';
import { Activo } from './activo.class';

import { Activo as activoSch, ActivoDocument } from './activo.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActivoBuilder } from './activoBuilder';

@Injectable()
export class ActivoService {
  constructor( 
    @InjectModel(activoSch.name) private readonly activoModel: Model<ActivoDocument>, 
  ) {}
  async createCompu(activo: Activo): Promise<Activo> {
    const activoBuilder = new ActivoBuilder(activo.codigo,activo.nombre,activo.precio);
    activoBuilder.conPeso(activo.peso);
    activoBuilder.conCategoria(activo.categoria);
    return await this.activoModel.create(activoBuilder.construir());
  }

  async createCelular(activo: Activo): Promise<Activo> {
    const activoBuilder = new ActivoBuilder(activo.codigo,activo.nombre,activo.precio);
    activoBuilder.conPeso(activo.color);
    return await this.activoModel.create(activoBuilder.construir());
  }

}
