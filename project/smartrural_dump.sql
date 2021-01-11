-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: smartrural
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CanFertilizer`
--

DROP TABLE IF EXISTS `CanFertilizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CanFertilizer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` varchar(500) NOT NULL DEFAULT 'Mensaje generico para poder fertilizar el invernadero',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CanFertilizer`
--

LOCK TABLES `CanFertilizer` WRITE;
/*!40000 ALTER TABLE `CanFertilizer` DISABLE KEYS */;
INSERT INTO `CanFertilizer` VALUES (1,'2021-01-11 15:56:29','Mensaje generico para poder fertilizar el invernadero');
/*!40000 ALTER TABLE `CanFertilizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CanOpenWallGreenhouse`
--

DROP TABLE IF EXISTS `CanOpenWallGreenhouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CanOpenWallGreenhouse` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` varchar(500) NOT NULL DEFAULT 'Mensaje generico para la apertura de la pared del invernadero',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CanOpenWallGreenhouse`
--

LOCK TABLES `CanOpenWallGreenhouse` WRITE;
/*!40000 ALTER TABLE `CanOpenWallGreenhouse` DISABLE KEYS */;
INSERT INTO `CanOpenWallGreenhouse` VALUES (1,'2021-01-11 15:56:38','Mensaje generico para la apertura de la pared del invernadero');
/*!40000 ALTER TABLE `CanOpenWallGreenhouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Irrigate`
--

DROP TABLE IF EXISTS `Irrigate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Irrigate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` varchar(500) NOT NULL DEFAULT 'Mensaje generico para poder regar el invernadero',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Irrigate`
--

LOCK TABLES `Irrigate` WRITE;
/*!40000 ALTER TABLE `Irrigate` DISABLE KEYS */;
INSERT INTO `Irrigate` VALUES (1,'2021-01-11 15:56:48','Mensaje generico para poder regar el invernadero');
/*!40000 ALTER TABLE `Irrigate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OpenCeilingGreenHouse`
--

DROP TABLE IF EXISTS `OpenCeilingGreenHouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OpenCeilingGreenHouse` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` varchar(500) NOT NULL DEFAULT 'Mensaje generico para la apertura del techo del invernadero',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OpenCeilingGreenHouse`
--

LOCK TABLES `OpenCeilingGreenHouse` WRITE;
/*!40000 ALTER TABLE `OpenCeilingGreenHouse` DISABLE KEYS */;
INSERT INTO `OpenCeilingGreenHouse` VALUES (1,'2021-01-11 15:56:57','Mensaje generico para la apertura del techo del invernadero');
/*!40000 ALTER TABLE `OpenCeilingGreenHouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SmartRural`
--

DROP TABLE IF EXISTS `SmartRural`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SmartRural` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sensorId` bigint(20) DEFAULT NULL,
  `roomTemperature` float DEFAULT NULL,
  `airHumidity` float DEFAULT NULL,
  `groundHumidity` float DEFAULT NULL,
  `litrePerMeterWater` float DEFAULT NULL,
  `windForce` float DEFAULT NULL,
  `windDirection` float DEFAULT NULL,
  `countIllumination` float DEFAULT NULL,
  `isRaining` tinyint(1) DEFAULT NULL,
  `isCeilingGreenhouseOpen` tinyint(1) DEFAULT NULL,
  `isWallGreenhouseOpen` tinyint(1) DEFAULT NULL,
  `isAtDaytime` tinyint(1) DEFAULT NULL,
  `canPhotosynthesisImprove` tinyint(1) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SmartRural`
--

LOCK TABLES `SmartRural` WRITE;
/*!40000 ALTER TABLE `SmartRural` DISABLE KEYS */;
INSERT INTO `SmartRural` VALUES (1,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:34:12'),(2,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:34:14'),(3,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:35:12'),(4,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:35:12'),(5,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:36:11'),(6,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:36:11'),(7,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:37:11'),(8,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:37:11'),(9,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:38:11'),(10,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:38:11'),(11,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:39:11'),(12,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:39:11'),(13,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:40:11'),(14,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:40:11'),(15,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:41:11'),(16,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:41:11'),(17,8,4.81,53.58,92.96,63.77,1.62,68.54,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:42:11'),(18,2,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,0,NULL,1,'2021-01-11 13:42:11'),(19,8,93.13,40.3,71.66,92.66,94.7,31.96,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:43:12'),(20,7,NULL,NULL,NULL,NULL,NULL,NULL,69.06,NULL,0,1,NULL,1,'2021-01-11 13:43:12'),(21,6,48.35,67.97,34.55,76.66,4.92,85.34,NULL,0,NULL,NULL,NULL,NULL,'2021-01-11 13:44:11'),(22,9,NULL,NULL,NULL,NULL,NULL,NULL,56.11,NULL,0,0,NULL,0,'2021-01-11 13:44:11'),(23,6,74.47,88.83,68.1,88.59,38.21,26.57,NULL,0,NULL,NULL,NULL,NULL,'2021-01-11 13:45:11'),(24,8,NULL,NULL,NULL,NULL,NULL,NULL,31.86,NULL,1,1,NULL,0,'2021-01-11 13:45:11'),(25,7,37.4,89.24,62.83,38.47,65.28,45.86,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:46:11'),(26,4,NULL,NULL,NULL,NULL,NULL,NULL,90.15,NULL,1,1,NULL,1,'2021-01-11 13:46:11'),(27,6,15.54,1.27,80.83,69.26,65.46,11.03,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:47:11'),(28,9,NULL,NULL,NULL,NULL,NULL,NULL,16.66,NULL,1,1,NULL,0,'2021-01-11 13:47:11'),(29,7,59.35,65.39,30.42,92.34,66.79,10.59,NULL,0,NULL,NULL,NULL,NULL,'2021-01-11 13:48:11'),(30,6,NULL,NULL,NULL,NULL,NULL,NULL,97.94,NULL,1,0,NULL,0,'2021-01-11 13:48:11'),(31,9,15.77,59.52,70.97,35.51,51.94,19.12,NULL,0,NULL,NULL,NULL,NULL,'2021-01-11 13:49:11'),(32,6,NULL,NULL,NULL,NULL,NULL,NULL,63.64,NULL,1,0,NULL,1,'2021-01-11 13:49:11'),(33,7,20.33,7.14,76.61,68.57,12.68,60.06,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:50:11'),(34,1,NULL,NULL,NULL,NULL,NULL,NULL,40.83,NULL,1,1,NULL,1,'2021-01-11 13:50:11'),(35,7,20.33,7.14,76.61,68.57,12.68,60.06,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:51:11'),(36,1,NULL,NULL,NULL,NULL,NULL,NULL,40.83,NULL,1,1,NULL,1,'2021-01-11 13:51:11'),(37,7,20.33,7.14,76.61,68.57,12.68,60.06,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:52:11'),(38,1,NULL,NULL,NULL,NULL,NULL,NULL,40.83,NULL,1,1,NULL,1,'2021-01-11 13:52:11'),(39,7,20.33,7.14,76.61,68.57,12.68,60.06,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:53:11'),(40,1,NULL,NULL,NULL,NULL,NULL,NULL,40.83,NULL,1,1,NULL,1,'2021-01-11 13:53:12'),(41,7,20.33,7.14,76.61,68.57,12.68,60.06,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:54:11'),(42,1,NULL,NULL,NULL,NULL,NULL,NULL,40.83,NULL,1,1,NULL,1,'2021-01-11 13:54:11'),(43,7,20.33,7.14,76.61,68.57,12.68,60.06,NULL,1,NULL,NULL,NULL,NULL,'2021-01-11 13:55:11'),(44,1,NULL,NULL,NULL,NULL,NULL,NULL,40.83,NULL,1,1,NULL,1,'2021-01-11 13:55:11');
/*!40000 ALTER TABLE `SmartRural` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-11 18:38:49
