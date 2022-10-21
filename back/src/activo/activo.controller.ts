import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { Activo } from './activo.class';

@Controller('activo')
export class ActivoController {
  constructor(private readonly activoService: ActivoService) {}

  @Post('computador')
  createCopu(@Body() activo: Activo) {
    return this.activoService.createCompu(activo);
  }

  @Post('celular')
  createCelular(@Body() activo: Activo) {
    return this.activoService.createCelular(activo);
  }
}
