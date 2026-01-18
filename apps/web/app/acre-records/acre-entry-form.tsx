'use client';

import { useFormState } from 'react-dom';
import { createAcreRecord } from './actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';

const initialState = {};

export function AcreEntryForm({
  farmers,
  tractors,
  workTypes,
}: {
  farmers: { id: string; name: string }[];
  tractors: { id: string; name: string }[];
  workTypes: { id: string; name: string }[];
}) {
  const [state, formAction] = useActionState(createAcreRecord, initialState);

  return (
    <form action={formAction} className="space-y-6 max-w-xl">
      {/* Date */}
      <div>
        <Label>Date</Label>
        <Input type="date" name="date" />
        {state?.errors?.date && (
          <p className="text-red-500">{state.errors.date}</p>
        )}
      </div>

      {/* Farmer */}
      <div>
        <Label>Farmer</Label>
        <Select name="farmerId">
          <SelectTrigger>
            <SelectValue placeholder="Select farmer" />
          </SelectTrigger>
          <SelectContent>
            {farmers.map((f) => (
              <SelectItem key={f.id} value={f.id}>
                {f.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tractor */}
      <div>
        <Label>Tractor</Label>
        <Select name="tractorId">
          <SelectTrigger>
            <SelectValue placeholder="Select tractor" />
          </SelectTrigger>
          <SelectContent>
            {tractors.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Work Type */}
      <div>
        <Label>Work Type</Label>
        <Select name="workTypeId">
          <SelectTrigger>
            <SelectValue placeholder="Select work type" />
          </SelectTrigger>
          <SelectContent>
            {workTypes.map((w) => (
              <SelectItem key={w.id} value={w.id}>
                {w.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Acres */}
      <div>
        <Label>Acres</Label>
        <Input name="acres" type="number" step="0.01" />
      </div>

      {/* Rate */}
      <div>
        <Label>Rate per Acre</Label>
        <Input name="ratePerAcre" type="number" step="0.01" />
      </div>

      <Button type="submit">Save Acre Record</Button>

      {state?.message && (
        <p className="text-green-600 font-medium">{state.message}</p>
      )}
    </form>
  );
}
