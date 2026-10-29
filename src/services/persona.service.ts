import { Persona } from '../models/persona.model.js';

const personas: Persona[] = [
  {
    id: 1,
    nombre: "Angel",
    apellido: "Pincay",
    edad: 36
  }
];

export async function obtenerTodos(): Promise<Persona[]> {
  return personas;
}

export async function obtenerPorId(id: number): Promise<Persona | undefined> {
  return personas.find(p => p.id === id);
}

export async function CrearPersona(persona: Persona): Promise<Persona> {
  personas.push(persona);
  return persona;
}

export async function actualizar(id: number, persona: Partial<Persona>): Promise<Persona | null> {
  const personaExistente = await obtenerPorId(id);
  if (!personaExistente) return null;

  const personaActualizada: Persona = { ...personaExistente, ...persona };
  const index = personas.indexOf(personaExistente);
  personas[index] = personaActualizada;

  return personaActualizada;
}

export async function eliminar(id: number): Promise<boolean> {
  const personaExistente = await obtenerPorId(id);
  if (!personaExistente) return false;

  const index = personas.indexOf(personaExistente);
  personas.splice(index, 1);
  return true;
}