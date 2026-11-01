# Hogwarts Course Management System – del II

## Om projektet

Dette er min backend til et Hogwarts Course Management System. Projektet holder styr på Hogwarts' houses, teachers, students og courses.

Backend'en er lavet som et REST API med Node.js, Express og PostgreSQL. Der er ikke lavet en frontend.

Databasen består af:

- **houses** – Hogwarts' fire huse
- **teachers** – lærere, som hører til et house
- **students** – elever, som hører til et house
- **courses** – fag, som har en teacher
- **course_students** – kobling mellem courses og students

Et course kan have mange students, og en student kan gå på mange courses. Derfor bruger jeg tabellen `course_students` til relationen. Databasen bruger primary keys og foreign keys, så relationerne bliver holdt korrekte.

## Teknologier

- JavaScript modules
- Node.js
- Express
- PostgreSQL
- Bruno til endpoint-tests

## Installation

1. Hent eller clone projektet fra GitHub.
2. Installer pakkerne:

   ```bash
   npm install
   ```

3. Kopier `.env.example` til en ny fil, der hedder `.env`.
4. Udfyld databaseoplysningerne i `.env`.
5. Opret en tom PostgreSQL-database.
6. Åbn `sql_export.sql` i pgAdmin eller DataGrip, og kør filen. Den opretter tabellerne og indsætter eksempeldata.
7. Start backend'en:

   ```bash
   npm start
   ```

API'et kører som standard på:

```text
http://localhost:3000
```

## Endpoints

### Houses

| Method | Route         | Beskrivelse        |
| ------ | ------------- | ------------------ |
| GET    | `/houses`     | Henter alle houses |
| GET    | `/houses/:id` | Henter ét house    |

### Teachers

| Method | Route           | Beskrivelse            |
| ------ | --------------- | ---------------------- |
| GET    | `/teachers`     | Henter alle teachers   |
| GET    | `/teachers/:id` | Henter én teacher      |
| POST   | `/teachers`     | Opretter en ny teacher |
| PUT    | `/teachers/:id` | Opdaterer en teacher   |
| DELETE | `/teachers/:id` | Sletter en teacher     |

### Students

| Method | Route           | Beskrivelse            |
| ------ | --------------- | ---------------------- |
| GET    | `/students`     | Henter alle students   |
| GET    | `/students/:id` | Henter én student      |
| POST   | `/students`     | Opretter en ny student |
| PUT    | `/students/:id` | Opdaterer en student   |
| DELETE | `/students/:id` | Sletter en student     |

### Courses

| Method | Route                              | Beskrivelse                       |
| ------ | ---------------------------------- | --------------------------------- |
| GET    | `/courses`                         | Henter alle courses               |
| GET    | `/courses/:id`                     | Henter ét course                  |
| POST   | `/courses`                         | Opretter et nyt course            |
| PUT    | `/courses/:id`                     | Opdaterer et course               |
| PUT    | `/courses/:id/teacher`             | Skifter teacher på et course      |
| GET    | `/courses/:id/students`            | Henter students på et course      |
| POST   | `/courses/:id/students`            | Tilføjer en student til et course |
| DELETE | `/courses/:id/students/:studentId` | Fjerner en student fra et course  |
| DELETE | `/courses/:id`                     | Sletter et course                 |

## Eksempler på request body

### Opret eller opdater student

```json
{
  "name": "Harry Potter",
  "semester": 3,
  "house_id": 1
}
```

### Opret eller opdater teacher

```json
{
  "name": "Minerva McGonagall",
  "house_id": 1
}
```

### Opret eller opdater course

```json
{
  "name": "Potions",
  "teacher_id": 1
}
```

### Skift teacher på course

```json
{
  "teacher_id": 2
}
```

### Tilføj student til course

```json
{
  "student_id": 6
}
```

## Statuskoder

- `200` – requesten lykkedes, for eksempel ved GET eller PUT
- `201` – en ny ressource blev oprettet
- `204` – ressourcen blev slettet, og der kommer ikke noget svar tilbage
- `400` – ugyldige data, for eksempel et house_id der ikke findes
- `404` – den ønskede ressource findes ikke
- `409` – handlingen giver en konflikt, for eksempel hvis en teacher stadig bruges på et course
- `500` – en uforudset serverfejl

## Sådan testes API'et

Jeg har lavet en Bruno collection i mappen `hogwarts-api-test`. Der er tests til alle API'ets endpoints.

1. Start PostgreSQL.
2. Kør `sql_export.sql`, hvis databasen skal nulstilles med frisk eksempeldata.
3. Start backend'en med `npm start`.
4. Åbn Bruno.
5. Vælg **Open Collection** og åbn mappen `hogwarts-api-test`.
6. Vælg environment `localhost`.
7. Vælg en request og tryk **Send**.

Nogle tests sletter data. Hvis de skal køres igen fra starten, skal `sql_export.sql` køres igen først.

## Projektets struktur

- `routes/` indeholder API-routes
- `controllers/` modtager requests og sender responses
- `repositories/` indeholder SQL-forespørgslerne
- `hogwarts-api-test/` indeholder Bruno-tests
- `sql_export.sql` opretter databasen og eksempeldata
- `PSEUDOKODE.md` indeholder pseudokode for endpoints

Routes kender kun routes. Controllers håndterer request og response. Repositories er de eneste filer, der arbejder direkte med SQL. Alle filer bruger JavaScript modules med `import` og `export`.
