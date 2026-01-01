export class AcreRecord {
  id: string;
  date: Date;
  workType: WorkType;
  acres: number;
  ratePerAcre: number;
  totalAmount: number;
  farmerId: string;
  tractorId: string;
  createdAt: Date;
  updatedAt: Date;
}
export enum WorkType {
  PLOWING = 'PLOWING',
  HARROWING = 'HARROWING',
  SEEDING = 'SEEDING',
  FERTILIZING = 'FERTILIZING',
  HARVESTING = 'HARVESTING',
}
