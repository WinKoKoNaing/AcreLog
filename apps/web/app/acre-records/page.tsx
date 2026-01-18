'use client';

import { useFarmers } from '@repo/query';
import { useTractors } from '@repo/query';
import { useWorkTypes } from '@repo/query';
import { AcreEntryForm } from './acre-entry-form';

export default function AcreRecordsPage() {
  const { data: farmers } = useFarmers();
  const { data: tractors } = useTractors();
  const { data: workTypes } = useWorkTypes();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Acre Entry</h1>
      <AcreEntryForm
        farmers={farmers || []}
        tractors={tractors || []}
        workTypes={workTypes || []}
      />
    </div>
  );
}
