-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-04-2023 a las 04:42:01
-- Versión del servidor: 10.5.18-MariaDB-0+deb11u1
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acquaforte_bdd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `id_event` int(11) NOT NULL,
  `image_event` varchar(255) DEFAULT NULL,
  `titre_event` varchar(25) DEFAULT NULL,
  `date_event` datetime DEFAULT NULL,
  `adr_num_event` int(11) DEFAULT NULL,
  `adr_rue_event` varchar(50) DEFAULT NULL,
  `adr_ville_event` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `collaborateurs`
--

CREATE TABLE `collaborateurs` (
  `id_coll` int(11) NOT NULL,
  `nom_coll` varchar(25) NOT NULL,
  `lien_coll` varchar(255) NOT NULL,
  `image_coll` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membres`
--

CREATE TABLE `membres` (
  `id_membre` int(11) NOT NULL,
  `nom_membre` varchar(25) NOT NULL,
  `prenom_membre` varchar(50) NOT NULL,
  `image_membre` varchar(255) NOT NULL,
  `vignette_membre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description_membre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description_membre_esp` varchar(255) NOT NULL,
  `vignette_membre_esp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `membres`
--

INSERT INTO `membres` (`id_membre`, `nom_membre`, `prenom_membre`, `image_membre`, `vignette_membre`, `description_membre`, `description_membre_esp`, `vignette_membre_esp`) VALUES
(65, 'facundo', 'botta', '../../SRL/membres/botta.png', 'dev', 'très très bien', 'muy bien', 'dov'),
(66, 'pepe', 'pipon', '../../SRL/membres/pipon.png', 'nop', 'nop nop nop', 'nip nip nip', 'nip');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spectacles`
--

CREATE TABLE `spectacles` (
  `id_spectacle` int(11) NOT NULL,
  `description_spectacle` varchar(255) NOT NULL,
  `site_spectacle` varchar(255) DEFAULT NULL,
  `info_spectacle` varchar(255) DEFAULT NULL,
  `affiche_spectacle` varchar(255) NOT NULL,
  `images_spectacle` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images_spectacle`)),
  `video_spectacle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_event`);

--
-- Indices de la tabla `collaborateurs`
--
ALTER TABLE `collaborateurs`
  ADD PRIMARY KEY (`id_coll`);

--
-- Indices de la tabla `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`id_membre`);

--
-- Indices de la tabla `spectacles`
--
ALTER TABLE `spectacles`
  ADD PRIMARY KEY (`id_spectacle`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `collaborateurs`
--
ALTER TABLE `collaborateurs`
  MODIFY `id_coll` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `membres`
--
ALTER TABLE `membres`
  MODIFY `id_membre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `spectacles`
--
ALTER TABLE `spectacles`
  MODIFY `id_spectacle` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
