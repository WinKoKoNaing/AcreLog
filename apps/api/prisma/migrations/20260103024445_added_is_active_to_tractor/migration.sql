-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tractor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tractor" ("createdAt", "id", "name", "status", "updatedAt") SELECT "createdAt", "id", "name", "status", "updatedAt" FROM "Tractor";
DROP TABLE "Tractor";
ALTER TABLE "new_Tractor" RENAME TO "Tractor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
