CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "cpf" text,
  "address" text,
  "email" text,
  "phone" text,
  "order_id" int
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "cnpj" text,
  "email" text,
  "phone" text,
  "manager_id" int UNIQUE,
  "address_id" int UNIQUE,
  "order_id" int
);

CREATE TABLE "managers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "cpf" text,
  "age" int
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text,
  "district" text,
  "number" int,
  "city" text,
  "state" text,
  "country" text
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "license_plate" text,
  "color" text,
  "chassi" text,
  "model_id" int
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text,
  "model" text,
  "manufacture_year" int
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "created_at" timestamp DEFAULT (now()),
  "customer_id" int,
  "car_id" int,
  "agency_id" int
);

CREATE TABLE "car_order" (
  "id" SERIAL PRIMARY KEY,
  "car_id" int,
  "order_id" int
);

ALTER TABLE "agencies" ADD FOREIGN KEY ("manager_id") REFERENCES "managers" ("id");

ALTER TABLE "agencies" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "customers" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "agencies" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");
