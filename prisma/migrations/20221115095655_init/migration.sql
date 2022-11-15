-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "levels" TEXT[],
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "description" TEXT NOT NULL,
    "repo" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
