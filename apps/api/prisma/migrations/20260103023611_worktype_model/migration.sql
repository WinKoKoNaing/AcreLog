/*
  Warnings:

  - You are about to drop the column `workType` on the `AcreRecord` table. All the data in the column will be lost.
  - Added the required column `workTypeId` to the `AcreRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "WorkType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AcreRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "acres" REAL NOT NULL,
    "ratePerAcre" REAL,
    "totalAmount" REAL,
    "farmerId" TEXT NOT NULL,
    "tractorId" TEXT NOT NULL,
    "workTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AcreRecord_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AcreRecord_tractorId_fkey" FOREIGN KEY ("tractorId") REFERENCES "Tractor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AcreRecord_workTypeId_fkey" FOREIGN KEY ("workTypeId") REFERENCES "WorkType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AcreRecord" ("acres", "createdAt", "date", "farmerId", "id", "ratePerAcre", "totalAmount", "tractorId", "updatedAt") SELECT "acres", "createdAt", "date", "farmerId", "id", "ratePerAcre", "totalAmount", "tractorId", "updatedAt" FROM "AcreRecord";
DROP TABLE "AcreRecord";
ALTER TABLE "new_AcreRecord" RENAME TO "AcreRecord";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "WorkType_code_key" ON "WorkType"("code");
