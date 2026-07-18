/*
  Warnings:

  - You are about to drop the column `image` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Property" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[];
