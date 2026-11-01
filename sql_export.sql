--
-- PostgreSQL database dump
--

\restrict QJMBb2deuDB1gwBE1gyQ9Slk0bhvW66Zc7w1PM2bq6awmYkYV5tAzE0usZodPr2

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-11-01 23:37:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 24763)
-- Name: course_students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_students (
    course_id integer NOT NULL,
    student_id integer NOT NULL
);


ALTER TABLE public.course_students OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 24750)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    teacher_id integer NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 24749)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 24708)
-- Name: houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    colors character varying(100) NOT NULL,
    founder character varying(100) NOT NULL
);


ALTER TABLE public.houses OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24707)
-- Name: houses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.houses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.houses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 24734)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    semester integer NOT NULL,
    house_id integer NOT NULL,
    CONSTRAINT chk_student_semester CHECK ((semester >= 1))
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24733)
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 24720)
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    house_id integer NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24719)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 5048 (class 0 OID 24763)
-- Dependencies: 227
-- Data for Name: course_students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.course_students VALUES (2, 1);
INSERT INTO public.course_students VALUES (1, 1);
INSERT INTO public.course_students VALUES (3, 2);
INSERT INTO public.course_students VALUES (1, 2);
INSERT INTO public.course_students VALUES (2, 3);
INSERT INTO public.course_students VALUES (3, 5);


--
-- TOC entry 5047 (class 0 OID 24750)
-- Dependencies: 226
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Potions', 1);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Transfiguration', 2);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Charms', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (5, 'Defense Against the Dark Arts', 1);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (6, 'Defense Against the Dark Arts', 1);


--
-- TOC entry 5041 (class 0 OID 24708)
-- Dependencies: 220
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (1, 'Gryffindor', 'Scarlet and gold', 'Godric Gryffindor');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (2, 'Slytherin', 'Green and silver', 'Salazar Slytherin');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (3, 'Ravenclaw', 'Blue and bronze', 'Rowena Ravenclaw');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (4, 'Hufflepuff', 'Yellow and black', 'Helga Hufflepuff');


--
-- TOC entry 5045 (class 0 OID 24734)
-- Dependencies: 224
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (1, 'Harry Potter', 3, 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (2, 'Hermione Granger', 3, 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'Ron Weasley', 3, 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (6, 'Cedric Diggory', 5, 4);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (7, 'Harry potter', 1, 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (5, 'harry potter', 1, 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (8, 'Harry potter', 1, 2);


--
-- TOC entry 5043 (class 0 OID 24720)
-- Dependencies: 222
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (2, 'Minerva McGonagall', 1);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (3, 'Filius Flitwick', 3);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (5, 'Minerva McGonagall', 2);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (6, 'Minerva McGonagall', 2);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (1, 'Minerva McGonagall', 2);


--
-- TOC entry 5054 (class 0 OID 0)
-- Dependencies: 225
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 6, true);


--
-- TOC entry 5055 (class 0 OID 0)
-- Dependencies: 219
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.houses_id_seq', 4, true);


--
-- TOC entry 5056 (class 0 OID 0)
-- Dependencies: 223
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 8, true);


--
-- TOC entry 5057 (class 0 OID 0)
-- Dependencies: 221
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 6, true);


--
-- TOC entry 4885 (class 2606 OID 24757)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 4877 (class 2606 OID 24718)
-- Name: houses houses_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_name_key UNIQUE (name);


--
-- TOC entry 4879 (class 2606 OID 24716)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 4887 (class 2606 OID 24769)
-- Name: course_students pk_course_students; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT pk_course_students PRIMARY KEY (course_id, student_id);


--
-- TOC entry 4883 (class 2606 OID 24743)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 4881 (class 2606 OID 24727)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- TOC entry 4891 (class 2606 OID 24770)
-- Name: course_students fk_course_students_course; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT fk_course_students_course FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 4892 (class 2606 OID 24775)
-- Name: course_students fk_course_students_student; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT fk_course_students_student FOREIGN KEY (student_id) REFERENCES public.students(id) ON DELETE CASCADE;


--
-- TOC entry 4890 (class 2606 OID 24758)
-- Name: courses fk_course_teacher; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT fk_course_teacher FOREIGN KEY (teacher_id) REFERENCES public.teachers(id) ON DELETE RESTRICT;


--
-- TOC entry 4889 (class 2606 OID 24744)
-- Name: students fk_student_house; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT fk_student_house FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- TOC entry 4888 (class 2606 OID 24728)
-- Name: teachers fk_teacher_house; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT fk_teacher_house FOREIGN KEY (house_id) REFERENCES public.houses(id);


-- Completed on 2026-11-01 23:37:50

--
-- PostgreSQL database dump complete
--

\unrestrict QJMBb2deuDB1gwBE1gyQ9Slk0bhvW66Zc7w1PM2bq6awmYkYV5tAzE0usZodPr2

