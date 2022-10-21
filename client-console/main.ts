import axios from 'axios';
const send = {
    codigo: '12345',
    nombre: 'prueba2',
    precio: 123.23,
    categoria: 'office7',
    subcategoria: 'home',
    color: 'negro',
    peso: '7200gr',
    longitud: '100cm'
};
async function main() {
    try {
        const { data, status } = await axios.post<any>(
            // 'http://localhost:3000/activo/computador', send
            'http://localhost:3000/activo/celular', send
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