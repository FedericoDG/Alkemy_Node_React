-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2021 at 05:06 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alkemy`
--

-- --------------------------------------------------------

--
-- Table structure for table `operations`
--

CREATE TABLE `operations` (
  `id_operation` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type` enum('INGRESO','EGRESO') NOT NULL,
  `category` enum('SUELDO','ALQUILER','COMIDA','MEDICAMENTOS','VESTIMENTA','OTROS') NOT NULL,
  `date` date NOT NULL,
  `description` varchar(50) NOT NULL,
  `amount` float(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operations`
--

INSERT INTO `operations` (`id_operation`, `id_user`, `type`, `category`, `date`, `description`, `amount`) VALUES
(1, 1, 'INGRESO', 'SUELDO', '2021-10-01', 'Sueldo de septiembre', 60000.00),
(2, 1, 'EGRESO', 'ALQUILER', '2021-10-02', 'Alquiler de septiembre', 25000.00),
(3, 1, 'EGRESO', 'COMIDA', '2021-10-05', 'Compra en el supermercado', 8500.00),
(4, 1, 'EGRESO', 'MEDICAMENTOS', '2021-10-11', 'Compra en la farmacia', 1250.40),
(5, 1, 'EGRESO', 'OTROS', '2021-10-21', 'Compra de repuestos', 5355.00),
(6, 1, 'EGRESO', 'COMIDA', '2021-10-21', 'Compra en el supermercado', 2230.00),
(7, 1, 'INGRESO', 'OTROS', '2021-10-01', 'Venta de servicios', 1555.00),
(8, 2, 'INGRESO', 'SUELDO', '2021-10-01', 'Sueldo de septiembre', 50000.00),
(9, 2, 'EGRESO', 'ALQUILER', '2021-10-02', 'Alquiler de septiembre', 22000.00),
(10, 2, 'EGRESO', 'COMIDA', '2021-10-05', 'Compra en el supermercado', 6500.00),
(11, 2, 'EGRESO', 'MEDICAMENTOS', '2021-10-11', 'Compra en la farmacia', 1755.00),
(12, 2, 'EGRESO', 'OTROS', '2021-10-21', 'Compra de repuestos', 3355.00),
(13, 2, 'EGRESO', 'COMIDA', '2021-10-21', 'Compra en el supermercado', 2030.00),
(14, 2, 'INGRESO', 'OTROS', '2021-10-01', 'Venta de servicios', 3550.00),
(15, 1, 'EGRESO', 'VESTIMENTA', '2021-10-21', 'Compra de Calzado', 8300.00),
(16, 1, 'INGRESO', 'OTROS', '2021-10-22', 'Venta de servicios', 2300.00),
(17, 1, 'EGRESO', 'COMIDA', '2021-10-22', 'Compra en el supermercado', 6660.00),
(18, 1, 'EGRESO', 'OTROS', '2021-10-23', 'Compra en ferretería', 550.00),
(19, 2, 'EGRESO', 'COMIDA', '2021-10-21', 'Compra de Calzado', 7900.00),
(20, 2, 'EGRESO', 'COMIDA', '2021-10-21', 'Compra en el supermercado', 6600.00),
(21, 2, 'EGRESO', 'OTROS', '2021-10-22', 'Compra en ferretería', 3222.00),
(22, 2, 'INGRESO', 'OTROS', '2021-10-22', 'Venta de servicios', 6560.00),
(23, 2, 'EGRESO', 'COMIDA', '2021-10-23', 'Compra en el supermercado', 3645.00),
(24, 2, 'EGRESO', 'MEDICAMENTOS', '2021-10-23', 'Compra en farmacia', 3320.00),
(25, 2, 'INGRESO', 'OTROS', '2021-10-23', 'Venta de servicios', 8965.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `email`, `password`) VALUES
(1, 'user1@mail.com', '$2b$10$WC/xQ9/Uv/PX86RQhR5N8.fDsidF2Y.16Um31.4syiA6rQJFS0RGe'),
(2, 'user2@mail.com', '$2b$10$WC/xQ9/Uv/PX86RQhR5N8.fDsidF2Y.16Um31.4syiA6rQJFS0RGe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id_operation`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `operations`
--
ALTER TABLE `operations`
  MODIFY `id_operation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `operations`
--
ALTER TABLE `operations`
  ADD CONSTRAINT `operations_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
