-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-11-2023 a las 01:31:29
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
(1, 'MWE 4453'),
(2, 'MWE 4453'),
(3, 'MWE 4453'),
(4, 'MWE 4453'),
(5, 'MWE 4453'),
(6, 'MWE 4453'),
(7, 'MWE 4453'),
(8, 'MWE 4453'),
(9, 'MWE 4453'),
(10, 'MWE 4453'),
(11, 'MWE 4453'),
(12, 'MWE 4453'),
(13, 'MWE 4453'),
(14, 'MWE 4453'),
(15, 'MWE 4453'),
(16, 'MWE 4453'),
(17, 'MWE 4453'),
(18, 'MWE 4453'),
(19, 'MWE 4453'),
(20, 'MWE 4453'),
(21, 'MWE 4453'),
(22, 'MWE 4453'),
(23, 'MWE 4453'),
(24, 'MWE 4453'),
(25, 'MWE 4453'),
(26, 'MWE 4453'),
(27, 'MWE 4453'),
(28, 'MWE 4453'),
(29, 'MWE 4453'),
(30, 'MWE 4453'),
(31, 'MWE 4453'),
(32, 'MWE 4453'),
(33, 'MWE 4453'),
(34, 'MWE 4453'),
(35, 'MWE 4453'),
(36, 'MWE 4453'),
(37, 'MWE 4453'),
(38, 'MWE 4453'),
(39, 'MWE 4453'),
(40, 'MWE 4453'),
(41, 'MWE 4453'),
(42, 'MWE 4453'),
(43, 'MWE 4453'),
(44, 'MWE 4453'),
(45, 'MWE 4453'),
(46, 'MWE 4453'),
(49, 'MWE 4453'),
(1, 'SAD 1490'),
(2, 'SAD 1490'),
(3, 'SAD 1490'),
(4, 'SAD 1490'),
(5, 'SAD 1490'),
(6, 'SAD 1490'),
(7, 'SAD 1490'),
(8, 'SAD 1490'),
(9, 'SAD 1490'),
(10, 'SAD 1490'),
(11, 'SAD 1490'),
(12, 'SAD 1490'),
(13, 'SAD 1490'),
(14, 'SAD 1490'),
(15, 'SAD 1490'),
(16, 'SAD 1490'),
(17, 'SAD 1490'),
(18, 'SAD 1490'),
(19, 'SAD 1490'),
(20, 'SAD 1490'),
(21, 'SAD 1490'),
(22, 'SAD 1490'),
(23, 'SAD 1490'),
(24, 'SAD 1490'),
(25, 'SAD 1490'),
(26, 'SAD 1490'),
(27, 'SAD 1490'),
(28, 'SAD 1490'),
(29, 'SAD 1490'),
(30, 'SAD 1490'),
(31, 'SAD 1490'),
(32, 'SAD 1490'),
(33, 'SAD 1490'),
(34, 'SAD 1490'),
(35, 'SAD 1490'),
(36, 'SAD 1490'),
(37, 'SAD 1490'),
(38, 'SAD 1490'),
(39, 'SAD 1490'),
(40, 'SAD 1490'),
(41, 'SAD 1490'),
(42, 'SAD 1490'),
(43, 'SAD 1490'),
(44, 'SAD 1490'),
(45, 'SAD 1490'),
(46, 'SAD 1490'),
(47, 'SAD 1490'),
(48, 'SAD 1490');

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
(4, 'MWE 4453', 1, 'Wifi'),
(6, 'SAD 1490', 1, 'Baño');

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
(4, 'Montevideo', 'Canelones', 'V904'),
(5, 'Montevideo', 'Jaureguiberry', 'v203');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medio_pago`
--

CREATE TABLE `medio_pago` (
  `ID_Pago` int(11) NOT NULL,
  `ID_Reserva` int(11) DEFAULT NULL,
  `Nombre_Pago` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(9, 'La Paloma', '12800 Montevideo, Departamento de Montevideo'),
(10, 'Lezica', '12500 Montevideo, Departamento de Montevideo'),
(11, 'Progreso', '15900 Departamento de Canelones'),
(12, 'Villa Instituto Adventista', '15900 Departamento de Canelones'),
(13, 'Canelones', 'Departamento de Canelones');

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
(4, 3, '25', 13, 'Terminal Tres Cruces - La Paloma', 1, 9),
(5, 3, '13', 10, 'La Paloma - Lezica', 9, 10),
(6, 2, '18', 20, 'Lezica - Progreso', 10, 11),
(7, 2, '10', 10, 'Progreso - Villa Instituto Adventista', 11, 12),
(8, 2, '15', 13, 'Villa Instituto Adventista - Canelones', 12, 13),
(9, 3, '25', 13, 'Terminal Tres Cruces - La Paloma', 1, 9),
(10, 3, '13', 10, 'La Paloma - Lezica', 9, 10),
(11, 2, '18', 20, 'Lezica - Progreso', 10, 11),
(12, 2, '11', 10, 'Progreso - Villa Instituto Adventista', 11, 12),
(13, 2, '15', 13, 'Villa Instituto Adventista - Canelones', 12, 13),
(14, 3, '25', 13, 'Terminal Tres Cruces - La Paloma', 1, 9),
(15, 3, '13', 10, 'La Paloma - Lezica', 9, 10),
(16, 2, '18', 20, 'Lezica - Progreso', 10, 11),
(17, 2, '11', 10, 'Progreso - Villa Instituto Adventista', 11, 12),
(18, 2, '15', 13, 'Villa Instituto Adventista - Canelones', 12, 13);

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
(4, 14, 1, 1, 1, 9),
(4, 15, 2, 2, 9, 10),
(4, 16, 3, 3, 10, 11),
(4, 17, 4, 4, 11, 12),
(4, 18, 5, 5, 12, 13),
(5, 19, 1, 6, 1, 3),
(5, 20, 2, 7, 3, 5);

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
('MWE 4453', 4),
('SAD 1490', 6);

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
(2, 1, 'Viauy Contact', '$2y$10$Zn31vAV10o8YFV4e8bg.j.eZJPB9UO3azglBLmNoVMftiVuCBGdD6', 'viauycontact@gmail.com', '092348384'),
(4, 1, 'Pou Rtryrt', '$2y$10$a0y3J5aj8jYMB6VoeGmdfOzM8/X5NTXVvMEWco6tF8qqh3kKpZBfm', 'joaquinbrusco12@gmail.com', '567777777'),
(5, 3, 'Christian Luttringer', '$2y$10$HZRhGbY1RcLhO66cr7IZQekeN2wZdoSIHhHZrApikoZCKLtY0ulyi', 'christianviauy@gmail.com', '099999999'),
(6, 2, 'Carina Sindoni', '$2y$10$Q3gYKeBJSquVIxDMaC/vae/CrJEabuVKiYRj5A9WD/hdHH7MYjeni', 'carinaviauy@gmail.com', '099999999'),
(7, 2, 'Oscar Papini', '$2y$10$gdOxuqGJHSIkKSUjtceYIuEg7vxrCj5lsvHP6tL7BjEeznWarJbe.', 'oscarviauy@gmail.com', '099999999'),
(8, 2, 'María Borrazás', '$2y$10$yM7O1akllfd3ilchb3zgDOY/LYxQm945BFhzJyZZevZB2IHQz66KS', 'mariaviauy@gmail.com', '099999999'),
(9, 1, 'Joaquin Brusc', '$2y$10$SKQ4d3jQkZn1djCtK4rF5uVejo./lMEyLOIVrHhwcgGpqCxXij7Wi', 'joaquinbrusco123@gmail.com', '434234225'),
(10, 1, 'Ignacio Trias', '$2y$10$GqIhaJlOssEZGrwHzRv6fuulO4uKnYuFGKSz/3xArszZAuYKlVXjq', 'alvxd332@gmail.com', '091234567');

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
  MODIFY `ID_Carac` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `ID_Usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
