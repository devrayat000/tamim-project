-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "levels" SET NOT NULL,
ALTER COLUMN "levels" SET DATA TYPE TEXT,
ALTER COLUMN "tags" SET NOT NULL,
ALTER COLUMN "tags" SET DATA TYPE TEXT;