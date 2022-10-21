import {Activo} from './activo.class';

export class ActivoBuilder{
    activo: Activo;

    constructor( codigo: string,nombre: string,precio: string) {
        this.activo = new Activo();
        this.activo.codigo = codigo;
        this.activo.nombre = nombre;
        this.activo.precio = precio;
    }

    conCategoria( categoria: string){
        this.activo.categoria = categoria;
    }
    conSubCategoria( subcategoria: string){
        this.activo.subcategoria = subcategoria;
    }
    conColor( color: string){
        this.activo.categoria = color;
    }
    conPeso( peso: string){
        this.activo.categoria = peso;
    }
    conLongitud( longitud: string){
        this.activo.longitud = longitud;
    }

    construir(){
        return this.activo;
    }
}