import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type ActivoDocument = Activo & Document; 

@Schema() 
export class Activo {

  @Prop() 
  codigo: string;

  @Prop()
  nombre: string;

  @Prop()
  precio: string;

  @Prop()
  categoria: string;

  @Prop()
  subcategoria: string;

  @Prop()
  color: string;

  @Prop()
  peso: string;

  @Prop()
  longitud: string;

}

export const ActivoSchema = SchemaFactory.createForClass(Activo); 