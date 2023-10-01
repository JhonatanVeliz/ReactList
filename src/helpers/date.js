import { format } from 'date-fns/esm';
import { es } from 'date-fns/esm/locale';

function dateNow( dateNow ) {
  const fecha = new Date(`${dateNow}`);

  // Formatear la fecha en español
  const fechaFormateada = format(fecha, 'dd/MM/yyyy', { locale: es });
  return fechaFormateada
}

export default dateNow