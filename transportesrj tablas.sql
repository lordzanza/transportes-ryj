-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-03-2020 a las 06:38:42
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportesrj`
--

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `conductor`
--

CREATE TABLE `usuario` (                                       
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,                   
  `nombres` varchar(20) NOT NULL,                              
  `apellidos` varchar(20) NOT NULL,                            
  `tipo_documento` varchar(2) NOT NULL,                        
  `documento` varchar(20) NOT NULL,                            
  `correo` varchar(40) NOT NULL,
  `direccion` varchar(20) NOT NULL,   
  `ciudad` varchar(20) NOT NULL,                           
  `usuario` varchar(20) NOT NULL,                              
  `clave` varchar(20) NOT NULL,                                
  `tipo` varchar(3) NOT NULL,
  `estado` varchar(10) NOT NULL,                
  `numero_id` int (5),
  PRIMARY KEY (`id`),                                          
  UNIQUE KEY `unique_documento` (`tipo_documento`,`documento`),  
  UNIQUE KEY `unique_usuario` (`usuario`),
  UNIQUE KEY `unique_correo` (`correo`) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;   


-- --------------------------------------------------------

CREATE TABLE `vehiculo` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,    
  `descripcion` varchar(20) NOT NULL,
  `placa` varchar(10) NOT NULL,
  `cilindraje` smallint NOT NULL,
  `color` varchar(20) NOT NULL,
  `modelo` smallint NOT NULL,
  PRIMARY KEY (`id`),                                          
  UNIQUE KEY `unique_placa` (`placa`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `licencia_conductor`
--

CREATE TABLE `licencia_conductor` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,  
  `id_conductor` mediumint(9) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `restricciones` varchar(50) NOT NULL,
   PRIMARY KEY (`id`),
   FOREIGN KEY (id_conductor) REFERENCES usuario(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `gastos_vehiculos_mensual`
--

CREATE TABLE `gastos_vehiculos_mensual` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,  
  `id_vehiculo` mediumint(9) NOT NULL,
  `id_conductor` mediumint(9) NOT NULL,
  `tipo_gasto` varchar(50) NOT NULL,
  `fecha_gasto` date NOT NULL,
  `costo_gasto` double NOT NULL,
  `observaciones` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id),
  FOREIGN KEY (id_conductor) REFERENCES usuario(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `historial_gastos_vehiculo`
--

CREATE TABLE `historial_gastos_vehiculo` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `acpm` double,
  `peajes` double,
  `seguro_carro` double,
  `seguro_trabajadores` double,
  `liquidacion_anual` double,
  `plan_celular` double,
  `sueldo_trabajadores` double,
  `dotacion_trabajadores` double,
  `cotas_llantas` double,
  `dotaciones_trabajadores` double,
  `seguro_tecnomecanica` double,
  `cambio_aceite` date,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------
--
CREATE TABLE `relacion_historial_gastos` (
  `id_historial` mediumint(9) NOT NULL,
  `id_gastos_mensual` mediumint(9) NOT NULL,
  PRIMARY KEY (`id_historial`, `id_gastos_mensual`),
  FOREIGN KEY (id_historial) REFERENCES historial_gastos_vehiculo(id),
  FOREIGN KEY (id_gastos_mensual) REFERENCES gastos_vehiculos_mensual(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
-- --------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
