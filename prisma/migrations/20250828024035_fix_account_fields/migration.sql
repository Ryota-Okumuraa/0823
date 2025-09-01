/*
  Warnings:

  - You are about to drop the column `access_Token` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_Token` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `tokeb_type` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."accounts" DROP COLUMN "access_Token",
DROP COLUMN "expires_at",
DROP COLUMN "refresh_Token",
DROP COLUMN "tokeb_type",
ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "expiresAt" INTEGER,
ADD COLUMN     "refreshToken" TEXT,
ADD COLUMN     "tokenType" TEXT;
