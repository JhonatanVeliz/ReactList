import { format } from 'date-fns/esm';
import { es } from 'date-fns/esm/locale';

function dateNow() {
  const fecha = new Date();

  // Formatear la fecha en español
  const fechaFormateada = format(fecha, 'dd/MM/yyyy', { locale: es });
  return fechaFormateada
}

function dateFormat( date ) {
  const fecha = new Date(date);

  console.log(fechaCorregida);

  const fechaFormateada = format(fecha, 'dd/MM/yyyy', { locale: es });
  return fechaFormateada 
}

export {
  dateNow,
  dateFormat
} 