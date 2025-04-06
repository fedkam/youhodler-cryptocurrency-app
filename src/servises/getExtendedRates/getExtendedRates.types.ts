import { z } from 'zod';

export const RateSchema = z.object({
  rate: z.number(),
  ask: z.number(),
  bid: z.number(),
  diff24h: z.number(),
});

export const CurrencySchema = z.record(z.string(), RateSchema);

export const RatesSchema = z.record(z.string(), CurrencySchema);