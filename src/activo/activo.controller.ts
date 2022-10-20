import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { Activo } from './activo.interface';

@Controller('activo')
export class ActivoController {
  constructor(private readonly activoService: ActivoService) {}

  @Post()
  create(@Body() activo: Activo) {
    return this.activoService.create(activo);
  }
}
