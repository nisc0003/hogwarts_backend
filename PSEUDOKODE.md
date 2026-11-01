### GET /houses

1. Modtag requesten.
2. Bed houses repository om alle houses.
3. Returner listen med status `200`.
4. Returner `500`, hvis databasen fejler uventet.

### GET /houses/:id

1. Læs `id` fra URL'en.
2. Bed houses repository om et house med det ID.
3. Returner huset med status `200`.
4. Returner `404`, hvis huset ikke findes.

## Teachers

### GET /teachers

1. Modtag requesten.
2. Bed teachers repository om alle teachers.
3. Returner listen med status `200`.
4. Returner `500`, hvis databasen fejler uventet.

### GET /teachers/:id

1. Læs `id` fra URL'en.
2. Bed teachers repository om en teacher med det ID.
3. Returner læreren med status `200`.
4. Returner `404`, hvis læreren ikke findes.

### POST /teachers

1. Læs `name` og `house_id` fra request body.
2. Bed teachers repository om at oprette en teacher.
3. Returner den nye teacher med status `201`.
4. Returner `400`, hvis `house_id` ikke findes.

### PUT /teachers/:id

1. Læs `id` fra URL'en.
2. Læs `name` og `house_id` fra request body.
3. Bed teachers repository om at opdatere teacheren.
4. Returner den opdaterede teacher med status `200`.
5. Returner `404`, hvis teacheren ikke findes.
6. Returner `400`, hvis `house_id` ikke findes.

### DELETE /teachers/:id

1. Læs `id` fra URL'en.
2. Bed teachers repository om at slette teacheren.
3. Returner `204`, hvis teacheren blev slettet.
4. Returner `404`, hvis teacheren ikke findes.
5. Returner `409`, hvis teacheren stadig bruges af et course.

## Students

### GET /students

1. Modtag requesten.
2. Bed students repository om alle students.
3. Returner listen med status `200`.
4. Returner `500`, hvis databasen fejler uventet.

### GET /students/:id

1. Læs `id` fra URL'en.
2. Bed students repository om en student med det ID.
3. Returner eleven med status `200`.
4. Returner `404`, hvis eleven ikke findes.

### POST /students

1. Læs `name`, `semester` og `house_id` fra request body.
2. Bed students repository om at oprette en student.
3. Returner den nye student med status `201`.
4. Returner `400`, hvis `house_id` ikke findes eller semester er under 1.

### PUT /students/:id

1. Læs `id` fra URL'en.
2. Læs `name`, `semester` og `house_id` fra request body.
3. Bed students repository om at opdatere studenten.
4. Returner den opdaterede student med status `200`.
5. Returner `404`, hvis studenten ikke findes.
6. Returner `400`, hvis `house_id` ikke findes eller semester er under 1.

### DELETE /students/:id

1. Læs `id` fra URL'en.
2. Bed students repository om at slette studenten.
3. Returner `204`, hvis studenten blev slettet.
4. Returner `404`, hvis studenten ikke findes.
5. Database-relationerne til studenten slettes automatisk på grund af `ON DELETE CASCADE`.

## Courses

### GET /courses

1. Modtag requesten.
2. Bed courses repository om alle courses.
3. Returner listen med status `200`.
4. Returner `500`, hvis databasen fejler uventet.

### GET /courses/:id

1. Læs `id` fra URL'en.
2. Bed courses repository om et course med det ID.
3. Returner kurset med status `200`.
4. Returner `404`, hvis kurset ikke findes.

### POST /courses

1. Læs `name` og `teacher_id` fra request body.
2. Bed courses repository om at oprette et course.
3. Returner det nye course med status `201`.
4. Returner `400`, hvis `teacher_id` ikke findes.

### PUT /courses/:id

1. Læs `id` fra URL'en.
2. Læs `name` og `teacher_id` fra request body.
3. Bed courses repository om at opdatere kurset.
4. Returner det opdaterede course med status `200`.
5. Returner `404`, hvis kurset ikke findes.
6. Returner `400`, hvis `teacher_id` ikke findes.

### PUT /courses/:id/teacher

1. Læs course-ID'et fra URL'en.
2. Læs `teacher_id` fra request body.
3. Bed courses repository om at skifte teacheren.
4. Returner det opdaterede course med status `200`.
5. Returner `404`, hvis kurset ikke findes.
6. Returner `400`, hvis `teacher_id` ikke findes.

### GET /courses/:id/students

1. Læs course-ID'et fra URL'en.
2. Kontroller at kurset findes.
3. Bed courses repository om alle students i `course_students` for kurset.
4. Returner listen med status `200`.
5. Returner `404`, hvis kurset ikke findes.

### POST /courses/:id/students

1. Læs course-ID'et fra URL'en.
2. Læs `student_id` fra request body.
3. Bed courses repository om at oprette koblingen i `course_students`.
4. Returner koblingen med status `201`.
5. Returner `404`, hvis kurset eller studenten ikke findes.
6. Returner `409`, hvis studenten allerede er tilmeldt kurset.

### DELETE /courses/:id/students/:studentId

1. Læs course-ID og student-ID fra URL'en.
2. Bed courses repository om at slette koblingen i `course_students`.
3. Returner `204`, hvis koblingen blev slettet.
4. Returner `404`, hvis koblingen ikke findes.

### DELETE /courses/:id

1. Læs `id` fra URL'en.
2. Bed courses repository om at slette kurset.
3. Returner `204`, hvis kurset blev slettet.
4. Returner `404`, hvis kurset ikke findes.
5. Koblinger til kurset slettes automatisk på grund af `ON DELETE CASCADE`.
