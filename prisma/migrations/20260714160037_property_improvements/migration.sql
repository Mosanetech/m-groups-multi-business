/*
  Warnings:

  - Changed the type of `type` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."PropertyType" AS ENUM ('HOUSE', 'APARTMENT', 'VILLA', 'OFFICE', 'SHOP', 'LAND', 'WAREHOUSE');

-- AlterTable
ALTER TABLE "public"."Property" ADD COLUMN     "availableFrom" TIMESTAMP(3),
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "type",
ADD COLUMN     "type" "public"."PropertyType" NOT NULL;
