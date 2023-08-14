-- CreateTable
CREATE TABLE "SingleDelegate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "prevExp" TEXT NOT NULL,
    "accommodation" TEXT NOT NULL,
    "accommodation_type" TEXT,
    "year" INTEGER NOT NULL,
    "awards" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "committees" JSONB NOT NULL,

    CONSTRAINT "SingleDelegate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoubleDelegate" (
    "id" SERIAL NOT NULL,
    "s_name" TEXT NOT NULL,
    "d_name" TEXT NOT NULL,
    "s_email" TEXT NOT NULL,
    "d_email" TEXT NOT NULL,
    "s_gender" TEXT NOT NULL,
    "d_gender" TEXT NOT NULL,
    "s_year" INTEGER NOT NULL,
    "d_year" INTEGER NOT NULL,
    "s_country" TEXT NOT NULL,
    "d_country" TEXT NOT NULL,
    "s_phone1" TEXT NOT NULL,
    "s_phone2" TEXT NOT NULL,
    "d_phone1" TEXT NOT NULL,
    "d_phone2" TEXT NOT NULL,
    "s_course" TEXT NOT NULL,
    "d_course" TEXT NOT NULL,
    "s_college" TEXT NOT NULL,
    "d_college" TEXT NOT NULL,
    "s_age" INTEGER NOT NULL,
    "d_age" INTEGER NOT NULL,
    "s_prevExp" TEXT NOT NULL,
    "d_prevExp" TEXT NOT NULL,
    "s_awards" TEXT NOT NULL,
    "d_awards" TEXT NOT NULL,
    "accommodation" TEXT NOT NULL,
    "accommodation_type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "committees" JSONB NOT NULL,

    CONSTRAINT "DoubleDelegate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SingleDelegate_email_key" ON "SingleDelegate"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DoubleDelegate_s_email_key" ON "DoubleDelegate"("s_email");

-- CreateIndex
CREATE UNIQUE INDEX "DoubleDelegate_d_email_key" ON "DoubleDelegate"("d_email");
