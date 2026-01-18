'use server';

import { z } from 'zod';

export const acreRecordSchema = z.object({
  date: z.string().min(1),
  farmerId: z.uuid(),
  tractorId: z.uuid(),
  workTypeId: z.uuid(),
  acres: z.coerce.number().positive(),
  ratePerAcre: z.coerce.number().positive().optional(),
});

export type AcreRecordFormState = {
  errors?: Record<string, string[]>;
  message?: string;
};

export async function createAcreRecord(
  prevState: AcreRecordFormState,
  formData: FormData,
): Promise<AcreRecordFormState> {
  const data = Object.fromEntries(formData);

  const parsed = acreRecordSchema.safeParse(data);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { date, farmerId, tractorId, workTypeId, acres, ratePerAcre } =
    parsed.data;

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/acre-records`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date,
      farmerId,
      tractorId,
      workTypeId,
      acres,
      ratePerAcre,
    }),
  });

  return { message: 'Acre record created successfully' };
}
