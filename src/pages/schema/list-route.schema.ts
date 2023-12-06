import { z } from 'zod';

export const listRouteSchema = z.object({
  vehicle: z
    .string({ required_error: 'Campo obrigatório!' })
    .min(1, 'Campo obrigatório!'),
  startPoint: z
    .string({ required_error: 'Campo obrigatório!' })
    .min(1, 'Campo obrigatório!'),
  destiny: z
    .string({ required_error: 'Campo obrigatório!' })
    .min(1, 'Campo obrigatório!'),
});
