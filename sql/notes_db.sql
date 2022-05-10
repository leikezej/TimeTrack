-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2020 at 10:15 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `time-tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `note_categories`
--

CREATE TABLE `note_categories` (
  `id` int(15) NOT NULL,
  `category` varchar(100) NOT NULL,
  `color` varchar(10) NOT NULL DEFAULT '#ffffff',
  `icon` text,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note_categories`
--

INSERT INTO `note_categories` (`id`, `category`, `color`, `icon`, `createAt`, `updateAt`, `deleted`) VALUES
(1, 'Daily', '#ffffff', NULL, '2020-09-16 12:51:01', '2020-09-16 12:51:01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `note_items`
--

CREATE TABLE `note_items` (
  `id` int(15) NOT NULL,
  `title` varchar(100) NOT NULL,
  `note` text,
  `category_id` int(15) DEFAULT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note_items`
--

INSERT INTO `note_items` (`id`, `title`, `note`, `category_id`, `createAt`, `updateAt`, `deleted`) VALUES
(3, 'Report test', 'Found new issue : not responsive screen -> fixed', 1, '2020-09-16 14:14:35', '2020-09-16 14:43:54', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `note_categories`
--
ALTER TABLE `note_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `note_items`
--
ALTER TABLE `note_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `note_categories`
--
ALTER TABLE `note_categories`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `note_items`
--
ALTER TABLE `note_items`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `note_items`
--
ALTER TABLE `note_items`
  ADD CONSTRAINT `note_items_ibfk_5` FOREIGN KEY (`category_id`) REFERENCES `note_categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;