/*
  Warnings:

  - You are about to drop the column `accessToken` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `tokenType` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."accounts" DROP COLUMN "accessToken",
DROP COLUMN "expiresAt",
DROP COLUMN "refreshToken",
DROP COLUMN "tokenType",
ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "expires_at" INTEGER,
ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "token_type" TEXT;
