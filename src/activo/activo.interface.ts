export interface IActivo {
  codigo: string;
  nombre: string;
  precio: string;
}

export interface Activo extends IActivo{
    categoria?: string;
    subcategoria?: string;
    color?: string;
    peso?: string;
    longitud?: string;
}
