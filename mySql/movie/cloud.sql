-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 23, 2020 at 01:00 PM
-- Server version: 8.0.15
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloud`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country`) VALUES
('5f415c1l94c98', 'დიდი ბრიტანეთი'),
('5f415c1o24c98', 'აშშ'),
('5f427c1l44c13', 'საფრანგეთი');

-- --------------------------------------------------------

--
-- Table structure for table `directors`
--

CREATE TABLE `directors` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `directors`
--

INSERT INTO `directors` (`id`, `name`, `last_name`) VALUES
('1f485c1l44q64', 'მორტენ', 'ტილდუმი'),
('5f259c1l44c13', 'ლავლინ', 'ტანდანი'),
('5f355c1l47q64', 'ნადინ', 'ლაბაკი'),
('5f375c1l44c13', 'ფარჰად', 'საფინიაა'),
('5f415c1o24c24', 'ჯეიმს', ' ქემერონი'),
('5f453c1l44c13', 'გერი', 'როსი'),
('5f485c1l44c19', 'რაიან', 'კუგლერი'),
('5f485c3p044c13', 'ჯეისონ', 'ზადა'),
('5f491c1o24c98', 'გას ', 'ვან სენტი'),
('5f926c1l44c13', 'დენი', 'ბოილი'),
('5f965c1l44c13', 'მილკო', 'ლაზაროვ'),
('6p485c1l44c13', 'ლუი', 'ლეტერიე'),
('7f485c1r44q64', 'ჯეიმს', 'მარში');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `genre` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `genre`) VALUES
('5f485c6344q64', 'დრამა'),
('5f485c6344s64', 'საომარი'),
('5f485c6347q64', 'ბიოგრაფიული'),
('5f588c6344q64', 'მელოდრამა'),
('5p485c6344q64', 'თრილერი'),
('7f425c1r44q64', 'მძაფრ-სიუჟეტიანი'),
('7o685c1r44q64', 'სათავგადასავლო');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `language` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `language`) VALUES
('5f435c1l92c09', 'რუსული'),
('5f495c1l92c09', 'ქართული'),
('9k495c1l92c04', 'ინგლისური');

-- --------------------------------------------------------

--
-- Table structure for table `move_in_country`
--

CREATE TABLE `move_in_country` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `country_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `movie_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `director_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `director_id`) VALUES
('5f273c1l44q64', 'ჭკვიანი უილ ჰანტინგი', '5f491c1o24c98'),
('5f415c1o21c98', 'კაპერნაუმი', '5f355c1l47q64'),
('5f485c1l37c13', 'ავატარი', '5f415c1o24c24'),
('5f485c1l44c13', 'იმიტაციის თამაში', '1f485c1l44q64'),
('5f485c6t34c13', 'ტყე', '5f485c3p044c13'),
('5f735c1l44q64', 'პროფესორი და შეშლილი', '5f375c1l44c13'),
('5k4525c1l44c13', 'ფილიალი', '5f965c1l44c13'),
('6f485c1l44c13', 'ქრიდი: როკის მემკვიდრეობა', '5f485c1l44c19'),
('6p3125c1l44c13', 'ახლა მხედავ', '6p485c1l44c13'),
('7f431c1r44q64', 'შიმშილის თამაშები', '5f453c1l44c13');

-- --------------------------------------------------------

--
-- Table structure for table `movie_in_genre`
--

CREATE TABLE `movie_in_genre` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `movie_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `genre_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movie_in_genre`
--

INSERT INTO `movie_in_genre` (`id`, `movie_id`, `genre_id`) VALUES
('123', '5f485c1l44c13', '5f485c6344q64'),
('124', '5f485c1l44c13', '5f485c6344s64');

-- --------------------------------------------------------

--
-- Table structure for table `movie_in_language`
--

CREATE TABLE `movie_in_language` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `movie_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `language_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `move_in_country`
--
ALTER TABLE `move_in_country`
  ADD PRIMARY KEY (`id`),
  ADD KEY `move_in_countries_country_id_countries` (`country_id`),
  ADD KEY `movie_in_countries_movie_id_movies` (`movie_id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movies_director_id_directors_id` (`director_id`),
  ADD KEY `title` (`title`);

--
-- Indexes for table `movie_in_genre`
--
ALTER TABLE `movie_in_genre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `move_in_genre_movie_id_movies` (`movie_id`),
  ADD KEY `move_in_genre_genre_id_genres` (`genre_id`);

--
-- Indexes for table `movie_in_language`
--
ALTER TABLE `movie_in_language`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_in_language_language_id_languages` (`language_id`),
  ADD KEY `movie_in_language_movie_id_movies` (`movie_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `move_in_country`
--
ALTER TABLE `move_in_country`
  ADD CONSTRAINT `move_in_countries_country_id_countries` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `movie_in_countries_movie_id_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_director_id_directors_id` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `movie_in_genre`
--
ALTER TABLE `movie_in_genre`
  ADD CONSTRAINT `move_in_genre_genre_id_genres` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `move_in_genre_movie_id_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `movie_in_language`
--
ALTER TABLE `movie_in_language`
  ADD CONSTRAINT `movie_in_language_language_id_languages` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `movie_in_language_movie_id_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
