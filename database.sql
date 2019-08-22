CREATE TABLE "artists" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(60) NOT NULL,
"birthyear" INT,
"deathyear" VARCHAR(7));

INSERT INTO "artists" ("name", "birthyear", "deathyear") Values ('Picaso', 1881, 1973),('Van Gogh', 1853, 1890),('Frida Kahlo', 1907, 1954);