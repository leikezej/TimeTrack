-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2022 at 07:57 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `time-tracker-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2022-04-20 16:10:18', '2022-04-20 16:10:18'),
(2, 'moderator', '2022-04-20 16:10:18', '2022-04-20 16:10:18'),
(3, 'admin', '2022-04-20 16:10:18', '2022-04-20 16:10:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(6) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `full_name` varchar(30) NOT NULL,
  `email_address` varchar(30) NOT NULL,
  `contact_number` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_password` varchar(100) NOT NULL,
  `login_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` varchar(254) DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `full_name`, `email_address`, `contact_number`, `password`, `confirm_password`, `login_date`, `create_datetime`, `created_at`, `updated_at`, `image`) VALUES
(17, NULL, 'Benard Litham', 'benard@gmail.com', '829299202', '80000', '80000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'male.jpg'),
(18, NULL, 'Anu Singh', 'bbsingh@gmail.com', '244244244', '50000', '50000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'female.png'),
(19, NULL, 'Anthony Dsza', 'dyysengg@gmail.com', '922828222', '59999', '59999', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'male.jpg'),
(20, NULL, 'Baljeet Singh', 'bls@yahoo.in', '948484444', '100000', '100000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'male.jpg'),
(21, NULL, 'Anush Sharma', 'ayush@gmail.com', '948485959', '100000', '100000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'male.jpg'),
(22, NULL, 'Diney Ahuja', 'diney@yahoo.in', '654484444', '50000', '50000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'male.jpg'),
(23, NULL, 'Lavi Singh', 'lavi@yahoo.in', '789393933', '60000', '60000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'female.png'),
(24, NULL, 'Anana Seth', 'anana@yahoo.in', '885757744', '100000', '100000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'female.png'),
(25, NULL, 'Anaksha Shah', 'anak@gmail.com', '893339393', '400000', '400000', '2022-03-29 20:21:32', '2022-03-30 04:21:32', '2022-03-30 04:21:32', NULL, 'female.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`username`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
