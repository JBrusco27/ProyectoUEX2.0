-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-12-2023 a las 21:26:53
-- Versión del servidor: 10.5.20-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id21435959_uruguayexpress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asiento`
--

CREATE TABLE `asiento` (
  `Num_Asiento` int(11) NOT NULL,
  `Matricula_Unidad` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asiento`
--

INSERT INTO `asiento` (`Num_Asiento`, `Matricula_Unidad`) VALUES
(1, 'ATC 1001'),
(2, 'ATC 1001'),
(3, 'ATC 1001'),
(4, 'ATC 1001'),
(5, 'ATC 1001'),
(6, 'ATC 1001'),
(7, 'ATC 1001'),
(8, 'ATC 1001'),
(9, 'ATC 1001'),
(10, 'ATC 1001'),
(11, 'ATC 1001'),
(12, 'ATC 1001'),
(13, 'ATC 1001'),
(14, 'ATC 1001'),
(15, 'ATC 1001'),
(16, 'ATC 1001'),
(17, 'ATC 1001'),
(18, 'ATC 1001'),
(19, 'ATC 1001'),
(20, 'ATC 1001'),
(21, 'ATC 1001'),
(22, 'ATC 1001'),
(23, 'ATC 1001'),
(24, 'ATC 1001'),
(25, 'ATC 1001'),
(26, 'ATC 1001'),
(27, 'ATC 1001'),
(28, 'ATC 1001'),
(29, 'ATC 1001'),
(30, 'ATC 1001'),
(31, 'ATC 1001'),
(32, 'ATC 1001'),
(33, 'ATC 1001'),
(34, 'ATC 1001'),
(35, 'ATC 1001'),
(36, 'ATC 1001'),
(37, 'ATC 1001'),
(38, 'ATC 1001'),
(39, 'ATC 1001'),
(40, 'ATC 1001'),
(41, 'ATC 1001'),
(42, 'ATC 1001'),
(43, 'ATC 1001'),
(44, 'ATC 1001'),
(45, 'ATC 1001'),
(46, 'ATC 1001'),
(47, 'ATC 1001'),
(48, 'ATC 1001'),
(1, 'ATC 1002'),
(2, 'ATC 1002'),
(3, 'ATC 1002'),
(4, 'ATC 1002'),
(5, 'ATC 1002'),
(6, 'ATC 1002'),
(7, 'ATC 1002'),
(8, 'ATC 1002'),
(9, 'ATC 1002'),
(10, 'ATC 1002'),
(11, 'ATC 1002'),
(12, 'ATC 1002'),
(13, 'ATC 1002'),
(14, 'ATC 1002'),
(15, 'ATC 1002'),
(16, 'ATC 1002'),
(17, 'ATC 1002'),
(18, 'ATC 1002'),
(19, 'ATC 1002'),
(20, 'ATC 1002'),
(21, 'ATC 1002'),
(22, 'ATC 1002'),
(23, 'ATC 1002'),
(24, 'ATC 1002'),
(25, 'ATC 1002'),
(26, 'ATC 1002'),
(27, 'ATC 1002'),
(28, 'ATC 1002'),
(29, 'ATC 1002'),
(30, 'ATC 1002'),
(31, 'ATC 1002'),
(32, 'ATC 1002'),
(33, 'ATC 1002'),
(34, 'ATC 1002'),
(35, 'ATC 1002'),
(36, 'ATC 1002'),
(37, 'ATC 1002'),
(38, 'ATC 1002'),
(39, 'ATC 1002'),
(40, 'ATC 1002'),
(41, 'ATC 1002'),
(42, 'ATC 1002'),
(43, 'ATC 1002'),
(44, 'ATC 1002'),
(45, 'ATC 1002'),
(46, 'ATC 1002'),
(47, 'ATC 1002'),
(48, 'ATC 1002'),
(1, 'ATC 1003'),
(2, 'ATC 1003'),
(3, 'ATC 1003'),
(4, 'ATC 1003'),
(5, 'ATC 1003'),
(6, 'ATC 1003'),
(7, 'ATC 1003'),
(8, 'ATC 1003'),
(9, 'ATC 1003'),
(10, 'ATC 1003'),
(11, 'ATC 1003'),
(12, 'ATC 1003'),
(13, 'ATC 1003'),
(14, 'ATC 1003'),
(15, 'ATC 1003'),
(16, 'ATC 1003'),
(17, 'ATC 1003'),
(18, 'ATC 1003'),
(19, 'ATC 1003'),
(20, 'ATC 1003'),
(21, 'ATC 1003'),
(22, 'ATC 1003'),
(23, 'ATC 1003'),
(24, 'ATC 1003'),
(25, 'ATC 1003'),
(26, 'ATC 1003'),
(27, 'ATC 1003'),
(28, 'ATC 1003'),
(29, 'ATC 1003'),
(30, 'ATC 1003'),
(31, 'ATC 1003'),
(32, 'ATC 1003'),
(33, 'ATC 1003'),
(34, 'ATC 1003'),
(35, 'ATC 1003'),
(36, 'ATC 1003'),
(37, 'ATC 1003'),
(38, 'ATC 1003'),
(39, 'ATC 1003'),
(40, 'ATC 1003'),
(41, 'ATC 1003'),
(42, 'ATC 1003'),
(43, 'ATC 1003'),
(44, 'ATC 1003'),
(45, 'ATC 1003'),
(46, 'ATC 1003'),
(47, 'ATC 1003'),
(48, 'ATC 1003'),
(1, 'ATC 1004'),
(2, 'ATC 1004'),
(3, 'ATC 1004'),
(4, 'ATC 1004'),
(5, 'ATC 1004'),
(6, 'ATC 1004'),
(7, 'ATC 1004'),
(8, 'ATC 1004'),
(9, 'ATC 1004'),
(10, 'ATC 1004'),
(11, 'ATC 1004'),
(12, 'ATC 1004'),
(13, 'ATC 1004'),
(14, 'ATC 1004'),
(15, 'ATC 1004'),
(16, 'ATC 1004'),
(17, 'ATC 1004'),
(18, 'ATC 1004'),
(19, 'ATC 1004'),
(20, 'ATC 1004'),
(21, 'ATC 1004'),
(22, 'ATC 1004'),
(23, 'ATC 1004'),
(24, 'ATC 1004'),
(25, 'ATC 1004'),
(26, 'ATC 1004'),
(27, 'ATC 1004'),
(28, 'ATC 1004'),
(29, 'ATC 1004'),
(30, 'ATC 1004'),
(31, 'ATC 1004'),
(32, 'ATC 1004'),
(33, 'ATC 1004'),
(34, 'ATC 1004'),
(35, 'ATC 1004'),
(36, 'ATC 1004'),
(37, 'ATC 1004'),
(38, 'ATC 1004'),
(39, 'ATC 1004'),
(40, 'ATC 1004'),
(41, 'ATC 1004'),
(42, 'ATC 1004'),
(43, 'ATC 1004'),
(44, 'ATC 1004'),
(45, 'ATC 1004'),
(46, 'ATC 1004'),
(47, 'ATC 1004'),
(48, 'ATC 1004'),
(1, 'ATC 1005'),
(2, 'ATC 1005'),
(3, 'ATC 1005'),
(4, 'ATC 1005'),
(5, 'ATC 1005'),
(6, 'ATC 1005'),
(7, 'ATC 1005'),
(8, 'ATC 1005'),
(9, 'ATC 1005'),
(10, 'ATC 1005'),
(11, 'ATC 1005'),
(12, 'ATC 1005'),
(13, 'ATC 1005'),
(14, 'ATC 1005'),
(15, 'ATC 1005'),
(16, 'ATC 1005'),
(17, 'ATC 1005'),
(18, 'ATC 1005'),
(19, 'ATC 1005'),
(20, 'ATC 1005'),
(21, 'ATC 1005'),
(22, 'ATC 1005'),
(23, 'ATC 1005'),
(24, 'ATC 1005'),
(25, 'ATC 1005'),
(26, 'ATC 1005'),
(27, 'ATC 1005'),
(28, 'ATC 1005'),
(29, 'ATC 1005'),
(30, 'ATC 1005'),
(31, 'ATC 1005'),
(32, 'ATC 1005'),
(33, 'ATC 1005'),
(34, 'ATC 1005'),
(35, 'ATC 1005'),
(36, 'ATC 1005'),
(37, 'ATC 1005'),
(38, 'ATC 1005'),
(39, 'ATC 1005'),
(40, 'ATC 1005'),
(41, 'ATC 1005'),
(42, 'ATC 1005'),
(43, 'ATC 1005'),
(44, 'ATC 1005'),
(45, 'ATC 1005'),
(46, 'ATC 1005'),
(47, 'ATC 1005'),
(48, 'ATC 1005'),
(1, 'ATC 1006'),
(2, 'ATC 1006'),
(3, 'ATC 1006'),
(4, 'ATC 1006'),
(5, 'ATC 1006'),
(6, 'ATC 1006'),
(7, 'ATC 1006'),
(8, 'ATC 1006'),
(9, 'ATC 1006'),
(10, 'ATC 1006'),
(11, 'ATC 1006'),
(12, 'ATC 1006'),
(13, 'ATC 1006'),
(14, 'ATC 1006'),
(15, 'ATC 1006'),
(16, 'ATC 1006'),
(17, 'ATC 1006'),
(18, 'ATC 1006'),
(19, 'ATC 1006'),
(20, 'ATC 1006'),
(21, 'ATC 1006'),
(22, 'ATC 1006'),
(23, 'ATC 1006'),
(24, 'ATC 1006'),
(25, 'ATC 1006'),
(26, 'ATC 1006'),
(27, 'ATC 1006'),
(28, 'ATC 1006'),
(29, 'ATC 1006'),
(30, 'ATC 1006'),
(31, 'ATC 1006'),
(32, 'ATC 1006'),
(33, 'ATC 1006'),
(34, 'ATC 1006'),
(35, 'ATC 1006'),
(36, 'ATC 1006'),
(37, 'ATC 1006'),
(38, 'ATC 1006'),
(39, 'ATC 1006'),
(40, 'ATC 1006'),
(41, 'ATC 1006'),
(42, 'ATC 1006'),
(43, 'ATC 1006'),
(44, 'ATC 1006'),
(45, 'ATC 1006'),
(46, 'ATC 1006'),
(47, 'ATC 1006'),
(48, 'ATC 1006'),
(1, 'ATC 1007'),
(2, 'ATC 1007'),
(3, 'ATC 1007'),
(4, 'ATC 1007'),
(5, 'ATC 1007'),
(6, 'ATC 1007'),
(7, 'ATC 1007'),
(8, 'ATC 1007'),
(9, 'ATC 1007'),
(10, 'ATC 1007'),
(11, 'ATC 1007'),
(12, 'ATC 1007'),
(13, 'ATC 1007'),
(14, 'ATC 1007'),
(15, 'ATC 1007'),
(16, 'ATC 1007'),
(17, 'ATC 1007'),
(18, 'ATC 1007'),
(19, 'ATC 1007'),
(20, 'ATC 1007'),
(21, 'ATC 1007'),
(22, 'ATC 1007'),
(23, 'ATC 1007'),
(24, 'ATC 1007'),
(25, 'ATC 1007'),
(26, 'ATC 1007'),
(27, 'ATC 1007'),
(28, 'ATC 1007'),
(29, 'ATC 1007'),
(30, 'ATC 1007'),
(31, 'ATC 1007'),
(32, 'ATC 1007'),
(33, 'ATC 1007'),
(34, 'ATC 1007'),
(35, 'ATC 1007'),
(36, 'ATC 1007'),
(37, 'ATC 1007'),
(38, 'ATC 1007'),
(39, 'ATC 1007'),
(40, 'ATC 1007'),
(41, 'ATC 1007'),
(42, 'ATC 1007'),
(43, 'ATC 1007'),
(44, 'ATC 1007'),
(45, 'ATC 1007'),
(46, 'ATC 1007'),
(47, 'ATC 1007'),
(48, 'ATC 1007'),
(1, 'ATC 1008'),
(2, 'ATC 1008'),
(3, 'ATC 1008'),
(4, 'ATC 1008'),
(5, 'ATC 1008'),
(6, 'ATC 1008'),
(7, 'ATC 1008'),
(8, 'ATC 1008'),
(9, 'ATC 1008'),
(10, 'ATC 1008'),
(11, 'ATC 1008'),
(12, 'ATC 1008'),
(13, 'ATC 1008'),
(14, 'ATC 1008'),
(15, 'ATC 1008'),
(16, 'ATC 1008'),
(17, 'ATC 1008'),
(18, 'ATC 1008'),
(19, 'ATC 1008'),
(20, 'ATC 1008'),
(21, 'ATC 1008'),
(22, 'ATC 1008'),
(23, 'ATC 1008'),
(24, 'ATC 1008'),
(25, 'ATC 1008'),
(26, 'ATC 1008'),
(27, 'ATC 1008'),
(28, 'ATC 1008'),
(29, 'ATC 1008'),
(30, 'ATC 1008'),
(31, 'ATC 1008'),
(32, 'ATC 1008'),
(33, 'ATC 1008'),
(34, 'ATC 1008'),
(35, 'ATC 1008'),
(36, 'ATC 1008'),
(37, 'ATC 1008'),
(38, 'ATC 1008'),
(39, 'ATC 1008'),
(40, 'ATC 1008'),
(41, 'ATC 1008'),
(42, 'ATC 1008'),
(43, 'ATC 1008'),
(44, 'ATC 1008'),
(45, 'ATC 1008'),
(46, 'ATC 1008'),
(47, 'ATC 1008'),
(48, 'ATC 1008'),
(1, 'ATC 1009'),
(2, 'ATC 1009'),
(3, 'ATC 1009'),
(4, 'ATC 1009'),
(5, 'ATC 1009'),
(6, 'ATC 1009'),
(7, 'ATC 1009'),
(8, 'ATC 1009'),
(9, 'ATC 1009'),
(10, 'ATC 1009'),
(11, 'ATC 1009'),
(12, 'ATC 1009'),
(13, 'ATC 1009'),
(14, 'ATC 1009'),
(15, 'ATC 1009'),
(16, 'ATC 1009'),
(17, 'ATC 1009'),
(18, 'ATC 1009'),
(19, 'ATC 1009'),
(20, 'ATC 1009'),
(21, 'ATC 1009'),
(22, 'ATC 1009'),
(23, 'ATC 1009'),
(24, 'ATC 1009'),
(25, 'ATC 1009'),
(26, 'ATC 1009'),
(27, 'ATC 1009'),
(28, 'ATC 1009'),
(29, 'ATC 1009'),
(30, 'ATC 1009'),
(31, 'ATC 1009'),
(32, 'ATC 1009'),
(33, 'ATC 1009'),
(34, 'ATC 1009'),
(35, 'ATC 1009'),
(36, 'ATC 1009'),
(37, 'ATC 1009'),
(38, 'ATC 1009'),
(39, 'ATC 1009'),
(40, 'ATC 1009'),
(41, 'ATC 1009'),
(42, 'ATC 1009'),
(43, 'ATC 1009'),
(44, 'ATC 1009'),
(45, 'ATC 1009'),
(46, 'ATC 1009'),
(47, 'ATC 1009'),
(48, 'ATC 1009'),
(1, 'ATC 1010'),
(2, 'ATC 1010'),
(3, 'ATC 1010'),
(4, 'ATC 1010'),
(5, 'ATC 1010'),
(6, 'ATC 1010'),
(7, 'ATC 1010'),
(8, 'ATC 1010'),
(9, 'ATC 1010'),
(10, 'ATC 1010'),
(11, 'ATC 1010'),
(12, 'ATC 1010'),
(13, 'ATC 1010'),
(14, 'ATC 1010'),
(15, 'ATC 1010'),
(16, 'ATC 1010'),
(17, 'ATC 1010'),
(18, 'ATC 1010'),
(19, 'ATC 1010'),
(20, 'ATC 1010'),
(21, 'ATC 1010'),
(22, 'ATC 1010'),
(23, 'ATC 1010'),
(24, 'ATC 1010'),
(25, 'ATC 1010'),
(26, 'ATC 1010'),
(27, 'ATC 1010'),
(28, 'ATC 1010'),
(29, 'ATC 1010'),
(30, 'ATC 1010'),
(31, 'ATC 1010'),
(32, 'ATC 1010'),
(33, 'ATC 1010'),
(34, 'ATC 1010'),
(35, 'ATC 1010'),
(36, 'ATC 1010'),
(37, 'ATC 1010'),
(38, 'ATC 1010'),
(39, 'ATC 1010'),
(40, 'ATC 1010'),
(41, 'ATC 1010'),
(42, 'ATC 1010'),
(43, 'ATC 1010'),
(44, 'ATC 1010'),
(45, 'ATC 1010'),
(46, 'ATC 1010'),
(47, 'ATC 1010'),
(48, 'ATC 1010'),
(1, 'STC 2332'),
(2, 'STC 2332'),
(3, 'STC 2332'),
(4, 'STC 2332'),
(5, 'STC 2332'),
(6, 'STC 2332'),
(7, 'STC 2332'),
(8, 'STC 2332'),
(9, 'STC 2332'),
(10, 'STC 2332'),
(11, 'STC 2332'),
(12, 'STC 2332'),
(13, 'STC 2332'),
(14, 'STC 2332'),
(15, 'STC 2332'),
(16, 'STC 2332'),
(17, 'STC 2332'),
(18, 'STC 2332'),
(19, 'STC 2332'),
(20, 'STC 2332'),
(21, 'STC 2332'),
(22, 'STC 2332'),
(23, 'STC 2332'),
(24, 'STC 2332'),
(25, 'STC 2332'),
(26, 'STC 2332'),
(27, 'STC 2332'),
(28, 'STC 2332'),
(29, 'STC 2332'),
(30, 'STC 2332'),
(31, 'STC 2332'),
(32, 'STC 2332'),
(33, 'STC 2332'),
(34, 'STC 2332'),
(35, 'STC 2332'),
(36, 'STC 2332'),
(37, 'STC 2332'),
(38, 'STC 2332'),
(39, 'STC 2332'),
(40, 'STC 2332'),
(41, 'STC 2332'),
(42, 'STC 2332'),
(43, 'STC 2332'),
(44, 'STC 2332'),
(45, 'STC 2332'),
(46, 'STC 2332'),
(47, 'STC 2332'),
(48, 'STC 2332');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caracteristica`
--

CREATE TABLE `caracteristica` (
  `ID_Carac` int(11) NOT NULL,
  `Matricula_Unidad` varchar(8) DEFAULT NULL,
  `Valor_Carac` tinyint(1) DEFAULT NULL,
  `Nombre_Carac` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `caracteristica`
--

INSERT INTO `caracteristica` (`ID_Carac`, `Matricula_Unidad`, `Valor_Carac`, `Nombre_Carac`) VALUES
(8, 'ATC 1001', 1, 'Aire acondicionado'),
(9, 'ATC 1001', 1, 'Wifi'),
(10, 'ATC 1002', 1, 'Aire acondicionado'),
(11, 'ATC 1002', 1, 'Wifi'),
(12, 'ATC 1003', 1, 'Aire acondicionado'),
(13, 'ATC 1003', 1, 'Wifi'),
(14, 'ATC 1004', 1, 'Aire acondicionado'),
(15, 'ATC 1004', 1, 'Wifi'),
(16, 'ATC 1005', 1, 'Aire acondicionado'),
(17, 'ATC 1005', 1, 'Wifi'),
(18, 'ATC 1006', 1, 'Aire acondicionado'),
(19, 'ATC 1006', 1, 'Wifi'),
(20, 'ATC 1007', 1, 'Aire acondicionado'),
(21, 'ATC 1007', 1, 'Wifi'),
(22, 'ATC 1008', 1, 'Aire acondicionado'),
(23, 'ATC 1008', 1, 'Wifi'),
(24, 'ATC 1009', 1, 'Aire acondicionado'),
(25, 'ATC 1009', 1, 'Wifi'),
(26, 'ATC 1010', 1, 'Aire acondicionado'),
(27, 'ATC 1010', 1, 'Wifi'),
(28, 'ATC 1001', 1, 'Baño'),
(29, 'ATC 1002', 1, 'Baño'),
(30, 'ATC 1003', 1, 'Baño'),
(31, 'ATC 1004', 1, 'Baño'),
(32, 'ATC 1005', 1, 'Baño'),
(33, 'ATC 1006', 1, 'Baño'),
(34, 'ATC 1007', 1, 'Baño'),
(35, 'ATC 1008', 1, 'Baño'),
(36, 'ATC 1009', 1, 'Baño'),
(37, 'ATC 1010', 1, 'Baño');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `RUT` varchar(9) NOT NULL,
  `Nombre_Empresa` varchar(30) DEFAULT NULL,
  `info_Empresa` varchar(100) DEFAULT NULL,
  `Telefono_Empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`RUT`, `Nombre_Empresa`, `info_Empresa`, `Telefono_Empresa`) VALUES
('123456789', 'Viauy', 'Información Empresa', 12345678);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `existe`
--

CREATE TABLE `existe` (
  `ID_Horario` int(11) NOT NULL,
  `ID_Reserva` int(11) NOT NULL,
  `Num_Asiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `existe`
--

INSERT INTO `existe` (`ID_Horario`, `ID_Reserva`, `Num_Asiento`) VALUES
(17, 1, 1),
(17, 2, 9),
(17, 3, 45),
(17, 4, 30),
(18, 5, 7),
(18, 6, 8),
(18, 7, 13),
(18, 8, 14),
(18, 9, 15),
(18, 10, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea`
--

CREATE TABLE `linea` (
  `ID_Linea` int(1) NOT NULL,
  `Origen_Linea` varchar(50) DEFAULT NULL,
  `Destino_Linea` varchar(50) DEFAULT NULL,
  `Num_Linea` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `linea`
--

INSERT INTO `linea` (`ID_Linea`, `Origen_Linea`, `Destino_Linea`, `Num_Linea`) VALUES
(1, 'Montevideo', 'Punta del Este', 'V550'),
(2, 'Montevideo', 'Colonia del Sacramento', 'V220');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medio_pago`
--

CREATE TABLE `medio_pago` (
  `ID_Pago` int(11) NOT NULL,
  `ID_Reserva` int(11) DEFAULT NULL,
  `Nombre_Pago` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medio_pago`
--

INSERT INTO `medio_pago` (`ID_Pago`, `ID_Reserva`, `Nombre_Pago`) VALUES
(1, 1, 'Debito'),
(2, 2, 'Debito'),
(3, 3, 'Debito'),
(4, 4, 'Debito'),
(5, 5, 'Efectivo'),
(6, 6, 'Efectivo'),
(7, 7, 'Efectivo'),
(8, 8, 'Efectivo'),
(9, 9, 'Efectivo'),
(10, 10, 'Efectivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `ID_Modulo` int(11) NOT NULL,
  `ID_Rol` int(11) DEFAULT NULL,
  `Nombre_Modulo` varchar(20) DEFAULT NULL,
  `Descripcion_Modulo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parada`
--

CREATE TABLE `parada` (
  `ID_Parada` int(11) NOT NULL,
  `Nombre_Parada` varchar(65) DEFAULT NULL,
  `Comentario_Parada` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `parada`
--

INSERT INTO `parada` (`ID_Parada`, `Nombre_Parada`, `Comentario_Parada`) VALUES
(1, 'Terminal Tres Cruces', '11800 Montevideo, Departamento de Montevideo'),
(2, 'Ciudad de la Costa', 'Departamento de Canelones'),
(3, 'Salinas', '15100 Departamento de Canelones'),
(4, 'La Floresta', '15300 Departamento de Canelones'),
(5, 'Jaureguiberry', '15400 Departamento de Canelones'),
(6, 'Ruta 37 y 9', '20300 Departamento de Maldonado'),
(7, 'Punta Ballena', '20000 Departamento de Maldonado'),
(8, 'Terminal de Ómnibus Punta del Este', '20100 Punta del Este, Departamento de Maldonado'),
(9, 'Santiago Vázquez', 'Departamento de Montevideo'),
(10, 'Tropas Viejas', '80500 Ciudad del Plata, Departamento de San José'),
(11, 'Libertad', '80100 Departamento de San José'),
(12, 'Costas de Pereira', '80200 Departamento de San José'),
(13, 'Ecilda Paullier', '80300 Departamento de San José'),
(14, 'Colonia Valdense', '70400 Departamento de Colonia'),
(15, 'Minuano', '70500 Departamento de Colonia'),
(16, 'Juan Carlos Caseros', '70000 Departamento de Colonia'),
(17, 'Laguna de los Patos', '70000 Departamento de Colonia'),
(18, 'Terminal Colonia del Sacramento', '70000 Col. del Sacramento, Departamento de Colonia'),
(19, 'Defensa', 'Defensa del proyecto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parametro`
--

CREATE TABLE `parametro` (
  `ID_Parametro` int(11) NOT NULL,
  `Nombre_Parametro` varchar(25) DEFAULT NULL,
  `Int_Parametro` int(11) DEFAULT NULL,
  `Varchar_Parametro` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `parametro`
--

INSERT INTO `parametro` (`ID_Parametro`, `Nombre_Parametro`, `Int_Parametro`, `Varchar_Parametro`) VALUES
(1, 'Calle', 3, 'Valor1'),
(2, 'Ruta', 4, 'Valor2'),
(3, 'Ciudad', 6, 'Valor3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pertenece_a`
--

CREATE TABLE `pertenece_a` (
  `ID_Horario` int(11) NOT NULL,
  `ID_Linea` int(11) DEFAULT NULL,
  `Matricula_Unidad` varchar(8) DEFAULT NULL,
  `Hora_Salida` time DEFAULT NULL,
  `Sentido` varchar(10) DEFAULT NULL,
  `Dia_Salida` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pertenece_a`
--

INSERT INTO `pertenece_a` (`ID_Horario`, `ID_Linea`, `Matricula_Unidad`, `Hora_Salida`, `Sentido`, `Dia_Salida`) VALUES
(1, 1, 'ATC 1001', '12:00:00', 'Ida', '2023-11-27'),
(2, 1, 'ATC 1002', '14:00:00', 'Ida', '2023-11-27'),
(3, 2, 'ATC 1003', '12:00:00', 'Ida', '2023-11-27'),
(4, 2, 'ATC 1004', '14:00:00', 'Ida', '2023-11-27'),
(5, 1, 'ATC 1005', '12:00:00', 'Vuelta', '2023-11-27'),
(6, 1, 'ATC 1006', '14:00:00', 'Vuelta', '2023-11-27'),
(7, 2, 'ATC 1007', '12:00:00', 'Vuelta', '2023-11-27'),
(8, 2, 'ATC 1008', '14:00:00', 'Vuelta', '2023-11-27'),
(9, 1, 'ATC 1001', '12:00:00', 'Ida', '2023-11-28'),
(10, 1, 'ATC 1002', '14:00:00', 'Ida', '2023-11-28'),
(11, 2, 'ATC 1003', '12:00:00', 'Ida', '2023-11-28'),
(12, 2, 'ATC 1004', '14:00:00', 'Ida', '2023-11-28'),
(13, 1, 'ATC 1005', '12:00:00', 'Vuelta', '2023-11-28'),
(14, 1, 'ATC 1006', '14:00:00', 'Vuelta', '2023-11-28'),
(15, 2, 'ATC 1007', '12:00:00', 'Vuelta', '2023-11-28'),
(16, 2, 'ATC 1008', '14:00:00', 'Vuelta', '2023-11-28'),
(17, 1, 'ATC 1001', '12:00:00', 'Ida', '2023-11-29'),
(18, 1, 'ATC 1002', '14:00:00', 'Ida', '2023-11-29'),
(19, 2, 'ATC 1003', '12:00:00', 'Ida', '2023-11-29'),
(20, 2, 'ATC 1004', '14:00:00', 'Ida', '2023-11-29'),
(21, 1, 'ATC 1005', '12:00:00', 'Vuelta', '2023-11-29'),
(22, 1, 'ATC 1006', '14:00:00', 'Vuelta', '2023-11-29'),
(23, 2, 'ATC 1007', '12:00:00', 'Vuelta', '2023-11-29'),
(24, 2, 'ATC 1008', '14:00:00', 'Vuelta', '2023-11-29'),
(25, 1, 'ATC 1001', '12:00:00', 'Ida', '2023-11-30'),
(26, 1, 'ATC 1002', '14:00:00', 'Ida', '2023-11-30'),
(27, 2, 'ATC 1003', '12:00:00', 'Ida', '2023-11-30'),
(28, 2, 'ATC 1004', '14:00:00', 'Ida', '2023-11-30'),
(29, 1, 'ATC 1005', '12:00:00', 'Vuelta', '2023-11-30'),
(30, 1, 'ATC 1006', '14:00:00', 'Vuelta', '2023-11-30'),
(31, 2, 'ATC 1007', '12:00:00', 'Vuelta', '2023-11-30'),
(32, 2, 'ATC 1008', '14:00:00', 'Vuelta', '2023-11-30'),
(33, 1, 'ATC 1001', '12:00:00', 'Ida', '2023-12-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `ID_Reserva` int(11) NOT NULL,
  `Horario_Reserva` time DEFAULT NULL,
  `Fecha_Reserva` date DEFAULT NULL,
  `Estado_Reserva` varchar(10) DEFAULT NULL,
  `Correo_Usu` varchar(40) DEFAULT NULL,
  `Costo_Reserva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`ID_Reserva`, `Horario_Reserva`, `Fecha_Reserva`, `Estado_Reserva`, `Correo_Usu`, `Costo_Reserva`) VALUES
(1, '18:05:02', '2023-11-30', 'Cancelado', 'viauycontact@gmail.com', 512),
(2, '18:05:02', '2023-11-30', 'Cancelado', 'viauycontact@gmail.com', 512),
(3, '19:06:26', '2023-11-30', 'Cancelado', 'viauycontact@gmail.com', 512),
(4, '19:06:26', '2023-11-30', 'Confirmado', 'viauycontact@gmail.com', 512),
(5, '19:45:29', '2023-11-30', 'Pendiente', 'oscar.informatica.utu@gmail.com', 278),
(6, '19:45:29', '2023-11-30', 'Pendiente', 'oscar.informatica.utu@gmail.com', 278),
(7, '19:51:57', '2023-11-30', 'Pendiente', 'oscar.informatica.utu@gmail.com', 1996),
(8, '19:51:57', '2023-11-30', 'Pendiente', 'oscar.informatica.utu@gmail.com', 1996),
(9, '19:51:57', '2023-11-30', 'Pendiente', 'oscar.informatica.utu@gmail.com', 1996),
(10, '19:51:57', '2023-11-30', 'Pendiente', 'oscar.informatica.utu@gmail.com', 1996);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `ID_Rol` int(11) NOT NULL,
  `Usu_Rol` tinyint(1) DEFAULT NULL,
  `Admin_Rol` tinyint(1) DEFAULT NULL,
  `Super_Rol` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`ID_Rol`, `Usu_Rol`, `Admin_Rol`, `Super_Rol`) VALUES
(1, 1, 0, 0),
(2, 0, 1, 0),
(3, 0, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramo`
--

CREATE TABLE `tramo` (
  `ID_Tra` int(11) NOT NULL,
  `Tipo_Tra` int(11) DEFAULT NULL,
  `Tiempo_Tra` varchar(20) DEFAULT NULL,
  `Distancia_Tra` decimal(10,0) DEFAULT NULL,
  `Comentario_Tra` varchar(65) DEFAULT NULL,
  `ID_Parada_Origen` int(11) NOT NULL,
  `ID_Parada_Destino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tramo`
--

INSERT INTO `tramo` (`ID_Tra`, `Tipo_Tra`, `Tiempo_Tra`, `Distancia_Tra`, `Comentario_Tra`, `ID_Parada_Origen`, `ID_Parada_Destino`) VALUES
(1, 3, '44', 22, '', 1, 2),
(2, 2, '22', 14, '', 2, 3),
(3, 2, '33', 17, '', 3, 4),
(4, 2, '45', 26, '', 4, 5),
(5, 1, '25', 17, '', 5, 6),
(6, 2, '28', 22, '', 6, 7),
(7, 1, '26', 14, '', 7, 8),
(29, 3, '60', 25, '', 1, 9),
(30, 2, '23', 11, '', 9, 10),
(31, 2, '46', 21, '', 10, 11),
(32, 2, '50', 32, '', 11, 12),
(33, 2, '24', 18, '', 12, 13),
(34, 2, '27', 19, '', 13, 14),
(35, 2, '65', 28, '', 14, 15),
(36, 2, '62', 26, '', 15, 16),
(37, 2, '11', 6, '', 16, 17),
(38, 3, '16', 6, '', 17, 18),
(39, 3, '44', 22, '', 1, 2),
(40, 2, '22', 14, '', 2, 3),
(41, 2, '34', 17, '', 3, 4),
(42, 2, '45', 26, '', 4, 5),
(43, 1, '25', 17, '', 5, 6),
(44, 2, '28', 22, '', 6, 7),
(45, 1, '26', 14, '', 7, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayecto`
--

CREATE TABLE `trayecto` (
  `ID_Linea` int(11) NOT NULL,
  `ID_Tra` int(11) NOT NULL,
  `Orden_Tramo` int(11) NOT NULL,
  `ID_Trayecto` int(11) NOT NULL,
  `ID_Parada_Origen` int(11) NOT NULL,
  `ID_Parada_Destino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trayecto`
--

INSERT INTO `trayecto` (`ID_Linea`, `ID_Tra`, `Orden_Tramo`, `ID_Trayecto`, `ID_Parada_Origen`, `ID_Parada_Destino`) VALUES
(2, 29, 1, 8, 1, 9),
(2, 30, 2, 9, 9, 10),
(2, 31, 3, 10, 10, 11),
(2, 32, 4, 11, 11, 12),
(2, 33, 5, 12, 12, 13),
(2, 34, 6, 13, 13, 14),
(2, 35, 7, 14, 14, 15),
(2, 36, 8, 15, 15, 16),
(2, 37, 9, 16, 16, 17),
(2, 38, 10, 17, 17, 18),
(1, 39, 1, 18, 1, 2),
(1, 40, 2, 19, 2, 3),
(1, 41, 3, 20, 3, 4),
(1, 42, 4, 21, 4, 5),
(1, 43, 5, 22, 5, 6),
(1, 44, 6, 23, 6, 7),
(1, 45, 7, 24, 7, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `Matricula_Unidad` varchar(8) NOT NULL,
  `Num_Unidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `unidad`
--

INSERT INTO `unidad` (`Matricula_Unidad`, `Num_Unidad`) VALUES
('ATC 1001', 1),
('ATC 1002', 2),
('ATC 1003', 3),
('ATC 1004', 4),
('ATC 1005', 5),
('ATC 1006', 6),
('ATC 1007', 7),
('ATC 1008', 8),
('ATC 1009', 9),
('ATC 1010', 10),
('ATC 1011', 11),
('ATC 1012', 12),
('ATC 1013', 13),
('ATC 1014', 14),
('ATC 1015', 15),
('ATC 1016', 16),
('ATC 1017', 17),
('ATC 1018', 18),
('ATC 1019', 19),
('ATC 1020', 20),
('STC 2332', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_Usu` int(11) NOT NULL,
  `ID_Rol` int(11) DEFAULT NULL,
  `Nombre_Usu` varchar(40) DEFAULT NULL,
  `Contraseña_Usu` varchar(70) DEFAULT NULL,
  `Correo_Usu` varchar(40) DEFAULT NULL,
  `Telefono_Usu` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID_Usu`, `ID_Rol`, `Nombre_Usu`, `Contraseña_Usu`, `Correo_Usu`, `Telefono_Usu`) VALUES
(1, 3, 'Joaquin Brusco', '$2y$10$KYaqvdpNpnM07bdAV8qNA.jBF5v03jzBZmgFBNr4wzunblb1GXU4y', 'joaquinbrusco1@gmail.com', '092348384'),
(2, 1, 'Viauy Contactjkl', '$2y$10$Zn31vAV10o8YFV4e8bg.j.eZJPB9UO3azglBLmNoVMftiVuCBGdD6', 'viauycontact@gmail.com', '092348385'),
(4, 1, 'Pou Rtryrt', '$2y$10$a0y3J5aj8jYMB6VoeGmdfOzM8/X5NTXVvMEWco6tF8qqh3kKpZBfm', 'joaquinbrusco12@gmail.com', '567777777'),
(5, 3, 'Christian Luttringer', '$2y$10$KYaqvdpNpnM07bdAV8qNA.jBF5v03jzBZmgFBNr4wzunblb1GXU4y', 'christianviauy@gmail.com', '099999999'),
(6, 2, 'Carina Sindoni', '$2y$10$Q3gYKeBJSquVIxDMaC/vae/CrJEabuVKiYRj5A9WD/hdHH7MYjeni', 'carinaviauy@gmail.com', '099999999'),
(7, 2, 'Oscar Papini', '$2y$10$gdOxuqGJHSIkKSUjtceYIuEg7vxrCj5lsvHP6tL7BjEeznWarJbe.', 'oscarviauy@gmail.com', '099999999'),
(8, 2, 'María Borrazás', '$2y$10$yM7O1akllfd3ilchb3zgDOY/LYxQm945BFhzJyZZevZB2IHQz66KS', 'mariaviauy@gmail.com', '099999999'),
(11, 1, 'Damián Esmoris', '$2y$10$K7cvAWJ7fzKz6HBwdmIXW.TTKor93Pr2klIWRkFiyevbYDA3dYXOu', 'damianesmoris@gmail.com', '095042099'),
(12, 1, 'Joaquin Brusco', '$2y$10$AoWoNIHXhdCciynOFUcyY.itZMQCn7v8KGjrwzJhrZ9iZPodBKjFy', 'joaquinbrusco123@gmail.com', '094166276'),
(17, 1, 'Pablo Aguirre', '$2y$10$9AT2PhXCzc4tPpl1P0tW5.u9Uarh.R6ohHxaQrHvxl10Z8XCakilG', 'pabloalej121@gmail.com', '999999999'),
(18, 1, 'Oscar Papini', '$2y$10$5hrYeS4IS3hl9EyvZ.bE7eqKNECDKH9LPXMMN/NdAAHTkQ2lU6vei', 'oscar.informatica.utu@gmail.com', '099999999');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD UNIQUE KEY `Matricula_NumAsiento` (`Matricula_Unidad`,`Num_Asiento`),
  ADD KEY `Matricula_Unidad` (`Matricula_Unidad`);

--
-- Indices de la tabla `caracteristica`
--
ALTER TABLE `caracteristica`
  ADD PRIMARY KEY (`ID_Carac`),
  ADD KEY `Matricula_Unidad` (`Matricula_Unidad`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`RUT`);

--
-- Indices de la tabla `existe`
--
ALTER TABLE `existe`
  ADD PRIMARY KEY (`ID_Reserva`) USING BTREE,
  ADD KEY `Num_Asiento` (`Num_Asiento`),
  ADD KEY `ID_Horario` (`ID_Horario`) USING BTREE;

--
-- Indices de la tabla `linea`
--
ALTER TABLE `linea`
  ADD PRIMARY KEY (`ID_Linea`);

--
-- Indices de la tabla `medio_pago`
--
ALTER TABLE `medio_pago`
  ADD PRIMARY KEY (`ID_Pago`),
  ADD KEY `ID_Reserva` (`ID_Reserva`);

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`ID_Modulo`),
  ADD KEY `ID_Rol` (`ID_Rol`);

--
-- Indices de la tabla `parada`
--
ALTER TABLE `parada`
  ADD PRIMARY KEY (`ID_Parada`);

--
-- Indices de la tabla `parametro`
--
ALTER TABLE `parametro`
  ADD PRIMARY KEY (`ID_Parametro`);

--
-- Indices de la tabla `pertenece_a`
--
ALTER TABLE `pertenece_a`
  ADD PRIMARY KEY (`ID_Horario`),
  ADD KEY `ID_Linea` (`ID_Linea`),
  ADD KEY `Matricula_Unidad` (`Matricula_Unidad`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`ID_Reserva`),
  ADD KEY `FK_correo_reserva` (`Correo_Usu`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ID_Rol`);

--
-- Indices de la tabla `tramo`
--
ALTER TABLE `tramo`
  ADD PRIMARY KEY (`ID_Tra`),
  ADD KEY `fk_parametro` (`Tipo_Tra`),
  ADD KEY `ID_Parada_Origen` (`ID_Parada_Origen`),
  ADD KEY `ID_Parada_Destino` (`ID_Parada_Destino`);

--
-- Indices de la tabla `trayecto`
--
ALTER TABLE `trayecto`
  ADD PRIMARY KEY (`ID_Trayecto`),
  ADD KEY `ID_Linea` (`ID_Linea`),
  ADD KEY `ID_Tra` (`ID_Tra`) USING BTREE,
  ADD KEY `fk_parada_origen_trayecto` (`ID_Parada_Origen`),
  ADD KEY `fk_parada_destino_trayecto` (`ID_Parada_Destino`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`Matricula_Unidad`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_Usu`),
  ADD KEY `ID_Rol` (`ID_Rol`),
  ADD KEY `idx_Correo_Usu` (`Correo_Usu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caracteristica`
--
ALTER TABLE `caracteristica`
  MODIFY `ID_Carac` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `modulo`
--
ALTER TABLE `modulo`
  MODIFY `ID_Modulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `parametro`
--
ALTER TABLE `parametro`
  MODIFY `ID_Parametro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `ID_Rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_Usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD CONSTRAINT `asiento_ibfk_1` FOREIGN KEY (`Matricula_Unidad`) REFERENCES `unidad` (`Matricula_Unidad`);

--
-- Filtros para la tabla `caracteristica`
--
ALTER TABLE `caracteristica`
  ADD CONSTRAINT `caracteristica_ibfk_1` FOREIGN KEY (`Matricula_Unidad`) REFERENCES `unidad` (`Matricula_Unidad`);

--
-- Filtros para la tabla `existe`
--
ALTER TABLE `existe`
  ADD CONSTRAINT `existe_ibfk_1` FOREIGN KEY (`ID_Horario`) REFERENCES `pertenece_a` (`ID_Horario`),
  ADD CONSTRAINT `existe_ibfk_5` FOREIGN KEY (`ID_Reserva`) REFERENCES `reserva` (`ID_Reserva`);

--
-- Filtros para la tabla `medio_pago`
--
ALTER TABLE `medio_pago`
  ADD CONSTRAINT `medio_pago_ibfk_1` FOREIGN KEY (`ID_Reserva`) REFERENCES `reserva` (`ID_Reserva`);

--
-- Filtros para la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD CONSTRAINT `modulo_ibfk_1` FOREIGN KEY (`ID_Rol`) REFERENCES `rol` (`ID_Rol`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `FK_correo_reserva` FOREIGN KEY (`Correo_Usu`) REFERENCES `usuario` (`Correo_Usu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
