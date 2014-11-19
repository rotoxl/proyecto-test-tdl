-- MySQL dump 10.13  Distrib 5.5.38, for osx10.6 (i386)
--
-- Host: localhost    Database: tapp37
-- ------------------------------------------------------
-- Server version	5.5.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `cd_categoria` int(11) NOT NULL,
  `ds_categoria` varchar(250) DEFAULT NULL,
  `cd_categoriapadre` int(11) DEFAULT NULL,
  `i` varchar(45) DEFAULT NULL,
  `listarComoCategoria` tinyint(4) DEFAULT '1',
  `color` varchar(45) DEFAULT NULL,
  `texto_promo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`cd_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `grupos`
--

DROP TABLE IF EXISTS `grupos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupos` (
  `cd_grupo` int(11) NOT NULL,
  `ds_grupo` varchar(250) DEFAULT NULL,
  `picture` varchar(250) DEFAULT NULL,
  `admin` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`cd_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `preguntas_tests`
--

DROP TABLE IF EXISTS `preguntas_tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntas_tests` (
  `cd_test` int(11) NOT NULL,
  `cd_pregunta` smallint(6) NOT NULL,
  `pregunta` varchar(500) NOT NULL,
  `cd_respuestacorrecta` tinyint(4) NOT NULL,
  `respuesta0` varchar(500) DEFAULT NULL,
  `respuesta1` varchar(500) DEFAULT NULL,
  `respuesta2` varchar(500) DEFAULT NULL,
  `respuesta3` varchar(500) DEFAULT NULL,
  `respuesta4` varchar(500) DEFAULT NULL,
  `respuesta5` varchar(500) DEFAULT NULL,
  `recursopregunta` varchar(250) DEFAULT NULL,
  `recursorespuesta0` varchar(250) DEFAULT NULL,
  `recursorespuesta1` varchar(250) DEFAULT NULL,
  `recursorespuesta2` varchar(250) DEFAULT NULL,
  `recursorespuesta3` varchar(250) DEFAULT NULL,
  `recursorespuesta4` varchar(250) DEFAULT NULL,
  `recursorespuesta5` varchar(250) DEFAULT NULL,
  `notas` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`cd_test`,`cd_pregunta`),
  CONSTRAINT `fk_ptests` FOREIGN KEY (`cd_test`) REFERENCES `tests` (`cd_test`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `promociones`
--

DROP TABLE IF EXISTS `promociones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promociones` (
  `CD_Promocion` varchar(45) NOT NULL,
  `DS_Promocion` varchar(250) DEFAULT NULL,
  `maxUsuarios` smallint(6) DEFAULT NULL,
  `F_Registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `F_Caducidad` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`CD_Promocion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `test_categorias`
--

DROP TABLE IF EXISTS `test_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test_categorias` (
  `cd_test` int(11) NOT NULL,
  `cd_categoria` int(11) NOT NULL,
  PRIMARY KEY (`cd_test`,`cd_categoria`),
  KEY `fk_xcat_idx` (`cd_categoria`),
  CONSTRAINT `fk_xcat` FOREIGN KEY (`cd_categoria`) REFERENCES `categorias` (`cd_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_xxtest` FOREIGN KEY (`cd_test`) REFERENCES `tests` (`cd_test`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tests` (
  `cd_test` int(11) NOT NULL,
  `matricula` varchar(10) DEFAULT NULL,
  `ds_test` varchar(250) DEFAULT NULL,
  `region` varchar(250) DEFAULT NULL,
  `organismo` varchar(250) DEFAULT NULL,
  `img` varchar(400) DEFAULT NULL,
  `f_examen` datetime DEFAULT NULL,
  `fallosRestan` decimal(3,2) DEFAULT NULL COMMENT 'Ej: 0.25',
  `minutos` smallint(6) DEFAULT NULL COMMENT '120',
  `numPreguntas` smallint(6) DEFAULT NULL COMMENT 'Para verificar la integridad del test, si falta alguna o qué pas',
  `admiteReordenarPreguntas` tinyint(4) DEFAULT '0',
  `admiteReordenarRespuestas` tinyint(4) DEFAULT '0',
  `precio` decimal(3,2) DEFAULT '0.00',
  `cd_moneda` varchar(2) DEFAULT '€',
  `comentario` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`cd_test`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tests_t`
--

DROP TABLE IF EXISTS `tests_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tests_t` (
  `cd_test` int(11) NOT NULL,
  `f_pendiente` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `f_ejecucion` timestamp NULL DEFAULT NULL,
  `cd_usuario` varchar(250) DEFAULT NULL,
  `cd_operacion` varchar(45) DEFAULT NULL,
  `ds_operacion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`cd_test`,`f_pendiente`),
  KEY `cd_usuario_idx` (`cd_usuario`),
  CONSTRAINT `cd_test` FOREIGN KEY (`cd_test`) REFERENCES `tests` (`cd_test`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `cd_usuario` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `cd_usuario` varchar(250) NOT NULL,
  `f_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(200) DEFAULT NULL,
  `picture` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios_categorias`
--

DROP TABLE IF EXISTS `usuarios_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_categorias` (
  `CD_Usuario` varchar(250) NOT NULL,
  `CD_Categoria` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`CD_Usuario`,`CD_Categoria`),
  KEY `fk_categorias_idx` (`CD_Categoria`),
  KEY `fk_categorias_idxx` (`CD_Categoria`),
  CONSTRAINT `fk_usuarios` FOREIGN KEY (`CD_Usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios_grupos`
--

DROP TABLE IF EXISTS `usuarios_grupos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_grupos` (
  `cd_usuario` varchar(250) NOT NULL,
  `cd_grupo` int(11) NOT NULL,
  `f_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `f_aceptacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`,`cd_grupo`),
  KEY `cd_grupo_idx` (`cd_grupo`),
  CONSTRAINT `xxcd_usu` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `xxxcd_grupo` FOREIGN KEY (`cd_grupo`) REFERENCES `grupos` (`cd_grupo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios_grupos_mensajes`
--

DROP TABLE IF EXISTS `usuarios_grupos_mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_grupos_mensajes` (
  `cd_usuario` varchar(250) NOT NULL,
  `CD_grupo` int(11) NOT NULL,
  `cd_mensaje` int(11) NOT NULL,
  `texto` varchar(500) DEFAULT NULL,
  `cd_test` int(11) DEFAULT NULL,
  `badge` varchar(50) DEFAULT NULL,
  `f_msg` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cd_usuario`,`CD_grupo`,`cd_mensaje`),
  KEY `xcd_grupo_idx` (`CD_grupo`),
  CONSTRAINT `xcd_grupo` FOREIGN KEY (`CD_grupo`) REFERENCES `grupos` (`cd_grupo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `xcd_usuario` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios_likes`
--

DROP TABLE IF EXISTS `usuarios_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_likes` (
  `CD_Usuario` varchar(250) NOT NULL,
  `CD_Test` int(11) NOT NULL DEFAULT '0',
  `F_Registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Comentario` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`CD_Usuario`,`CD_Test`),
  KEY `fk_xtest_idx` (`CD_Usuario`,`CD_Test`),
  CONSTRAINT `fk_xusu` FOREIGN KEY (`CD_Usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios_promociones`
--

DROP TABLE IF EXISTS `usuarios_promociones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_promociones` (
  `CD_Usuario` varchar(250) NOT NULL,
  `CD_Promocion` varchar(45) DEFAULT NULL,
  `F_Registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CD_Usuario`),
  KEY `fk_promociones_idx` (`CD_Promocion`),
  CONSTRAINT `fk_promociones` FOREIGN KEY (`CD_Promocion`) REFERENCES `promociones` (`CD_Promocion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usus` FOREIGN KEY (`CD_Usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios_tests`
--

DROP TABLE IF EXISTS `usuarios_tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_tests` (
  `cd_usuario` varchar(250) NOT NULL,
  `cd_test` int(11) DEFAULT NULL,
  `f_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `precio` decimal(2,2) DEFAULT '0.00',
  `moneda` varchar(2) DEFAULT '€',
  PRIMARY KEY (`cd_usuario`),
  KEY `fk_testssss_idx` (`cd_test`),
  CONSTRAINT `fk__tests` FOREIGN KEY (`cd_test`) REFERENCES `tests` (`cd_test`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk__usu` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios` (`cd_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `vs_preguntasconcaracteresextranhos`
--

DROP TABLE IF EXISTS `vs_preguntasconcaracteresextranhos`;
/*!50001 DROP VIEW IF EXISTS `vs_preguntasconcaracteresextranhos`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vs_preguntasconcaracteresextranhos` (
  `cd_test` tinyint NOT NULL,
  `cd_pregunta` tinyint NOT NULL,
  `pregunta` tinyint NOT NULL,
  `cd_respuestacorrecta` tinyint NOT NULL,
  `respuesta0` tinyint NOT NULL,
  `respuesta1` tinyint NOT NULL,
  `respuesta2` tinyint NOT NULL,
  `respuesta3` tinyint NOT NULL,
  `respuesta4` tinyint NOT NULL,
  `respuesta5` tinyint NOT NULL,
  `recursopregunta` tinyint NOT NULL,
  `recursorespuesta0` tinyint NOT NULL,
  `recursorespuesta1` tinyint NOT NULL,
  `recursorespuesta2` tinyint NOT NULL,
  `recursorespuesta3` tinyint NOT NULL,
  `recursorespuesta4` tinyint NOT NULL,
  `recursorespuesta5` tinyint NOT NULL,
  `notas` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vs_testpreview`
--

DROP TABLE IF EXISTS `vs_testpreview`;
/*!50001 DROP VIEW IF EXISTS `vs_testpreview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vs_testpreview` (
  `cd_test` tinyint NOT NULL,
  `ds_test` tinyint NOT NULL,
  `matricula` tinyint NOT NULL,
  `img` tinyint NOT NULL,
  `f_examen` tinyint NOT NULL,
  `organismo` tinyint NOT NULL,
  `numPreguntas` tinyint NOT NULL,
  `fallosRestan` tinyint NOT NULL,
  `admiteReordenarPreguntas` tinyint NOT NULL,
  `admiteReordenarRespuestas` tinyint NOT NULL,
  `minutos` tinyint NOT NULL,
  `region` tinyint NOT NULL,
  `precio` tinyint NOT NULL,
  `cd_moneda` tinyint NOT NULL,
  `likes` tinyint NOT NULL,
  `lisCat` tinyint NOT NULL,
  `fu_modificacion` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vs_preguntasconcaracteresextranhos`
--

/*!50001 DROP TABLE IF EXISTS `vs_preguntasconcaracteresextranhos`*/;
/*!50001 DROP VIEW IF EXISTS `vs_preguntasconcaracteresextranhos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 */
/*!50001 VIEW `vs_preguntasconcaracteresextranhos` AS select `preguntas_tests`.`cd_test` AS `cd_test`,`preguntas_tests`.`cd_pregunta` AS `cd_pregunta`,`preguntas_tests`.`pregunta` AS `pregunta`,`preguntas_tests`.`cd_respuestacorrecta` AS `cd_respuestacorrecta`,`preguntas_tests`.`respuesta0` AS `respuesta0`,`preguntas_tests`.`respuesta1` AS `respuesta1`,`preguntas_tests`.`respuesta2` AS `respuesta2`,`preguntas_tests`.`respuesta3` AS `respuesta3`,`preguntas_tests`.`respuesta4` AS `respuesta4`,`preguntas_tests`.`respuesta5` AS `respuesta5`,`preguntas_tests`.`recursopregunta` AS `recursopregunta`,`preguntas_tests`.`recursorespuesta0` AS `recursorespuesta0`,`preguntas_tests`.`recursorespuesta1` AS `recursorespuesta1`,`preguntas_tests`.`recursorespuesta2` AS `recursorespuesta2`,`preguntas_tests`.`recursorespuesta3` AS `recursorespuesta3`,`preguntas_tests`.`recursorespuesta4` AS `recursorespuesta4`,`preguntas_tests`.`recursorespuesta5` AS `recursorespuesta5`,`preguntas_tests`.`notas` AS `notas` from `preguntas_tests` where (concat(`preguntas_tests`.`pregunta`,`preguntas_tests`.`respuesta0`,`preguntas_tests`.`respuesta1`,`preguntas_tests`.`respuesta2`,`preguntas_tests`.`respuesta3`) like '%quo%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vs_testpreview`
--

/*!50001 DROP TABLE IF EXISTS `vs_testpreview`*/;
/*!50001 DROP VIEW IF EXISTS `vs_testpreview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  */
/*!50001 VIEW `vs_testpreview` AS select `t`.`cd_test` AS `cd_test`,`t`.`ds_test` AS `ds_test`,`t`.`matricula` AS `matricula`,`t`.`img` AS `img`,`t`.`f_examen` AS `f_examen`,`t`.`organismo` AS `organismo`,`t`.`numPreguntas` AS `numPreguntas`,`t`.`fallosRestan` AS `fallosRestan`,`t`.`admiteReordenarPreguntas` AS `admiteReordenarPreguntas`,`t`.`admiteReordenarRespuestas` AS `admiteReordenarRespuestas`,`t`.`minutos` AS `minutos`,`t`.`region` AS `region`,`t`.`precio` AS `precio`,`t`.`cd_moneda` AS `cd_moneda`,(select count(`l`.`CD_Usuario`) from `usuarios_likes` `l` where (`t`.`cd_test` = `l`.`CD_Test`)) AS `likes`,concat(',',(select group_concat(`tc2`.`cd_categoria` separator ',') from `test_categorias` `tc2` where (`t`.`cd_test` = `tc2`.`cd_test`)),',') AS `lisCat`,`tt`.`f_ejecucion` AS `fu_modificacion` from (`tests` `t` left join `tests_t` `tt` on(((`t`.`cd_test` = `tt`.`cd_test`) and (`tt`.`cd_operacion` = 'Alta')))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-11-18 20:02:18
