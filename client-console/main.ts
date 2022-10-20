import axios from 'axios';
const send = {
    codigo: 'ABC',
    nombre: 'COMPU',
    precio: 123.23,
    categoria: 'office',
    subcategoria: 'home',
    color: 'negro',
    peso: '1200gr',
    longitud: '100cm'
};
async function main() {
    try {
        const { data, status } = await axios.post<any>(
            'http://localhost:3000/activo', send
        );
        console.log('response status is: ', status);
        console.log(data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            console.log(error.message);
        } else {
            console.log('unexpected error: ', error);
        }
    }
}
main();