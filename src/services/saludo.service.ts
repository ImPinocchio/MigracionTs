export interface SaludoRespuesta {
  nombreRecibido: string;
  mensaje: string;
}

export async function crearSaludo(nombre: string): Promise<SaludoRespuesta> {
  const saludo: SaludoRespuesta = {
    nombreRecibido: nombre,
    mensaje: `Hola ${nombre}`
  };
  return saludo;
}
