//Obtiene la fecha actual en formato numerico y que funciona con los inputs tipo date
export function obtenerFechaFormateada() {
    const fecha = new Date();
    let mes = (fecha.getMonth() + 1).toString();
    let dia = fecha.getDate().toString();
    const año = fecha.getFullYear();
    if (mes.length < 2) {mes = '0' + mes;}
    if (dia.length < 2) {dia = '0' + dia;}
    return `${año}-${mes}-${dia}`;
}