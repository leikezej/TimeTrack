-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2022 at 02:52 PM
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
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'jepsuser', 'userjeps21@gmail.com', '$2a$08$rMMnmTodQN9WBRy2/dRDuOxSQ7rx0oiTF6GX.adrpYHQYKE5HJu9.', '2022-04-20 17:59:50', '2022-04-20 17:59:50'),
(2, 'jb', 'adminjb21@gmail.com', '$2a$08$XHV/efrrc6x9vufrqhrzvu2NhynQAiifXAGEt57RRVhn3.RXXyrBm', '2022-04-20 18:03:53', '2022-04-20 18:03:53'),
(3, 'wesley', 'weisley230@gmail.com', '$2a$08$BPiwr7iZ/gQfnhoVDC2F.O90j0naVIz4VS4EmcDi.bOUcFOFMBeRC', '2022-04-20 18:10:01', '2022-04-20 18:10:01'),
(4, 'tupack', 'tupac6666@gmail.com', '$2a$08$fBfptW.YGqsrhOeRp/zUC.6WWNKZF2AQdljUF3qInMNA3jdeSwyLu', '2022-04-30 01:02:49', '2022-04-30 01:02:49');

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
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2022-04-20 17:59:51', '2022-04-20 17:59:51', 1, 1),
('2022-04-20 18:03:53', '2022-04-20 18:03:53', 1, 2),
('2022-04-20 18:10:01', '2022-04-20 18:10:01', 1, 3),
('2022-04-30 01:02:49', '2022-04-30 01:02:49', 1, 4),
('2022-04-20 18:03:53', '2022-04-20 18:03:53', 3, 2),
('2022-04-20 18:10:01', '2022-04-20 18:10:01', 3, 3),
('2022-04-30 01:02:49', '2022-04-30 01:02:49', 3, 4);

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
