-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: db_mini_app_store_management
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_stocks`
--

DROP TABLE IF EXISTS `product_stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_stocks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_stocks`
--

LOCK TABLES `product_stocks` WRITE;
/*!40000 ALTER TABLE `product_stocks` DISABLE KEYS */;
INSERT INTO `product_stocks` VALUES (1,'P001',50,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(2,'P002',30,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(3,'P003',20,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(4,'P004',40,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(5,'P005',35,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(6,'P006',25,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(7,'P007',70,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(8,'P008',80,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(9,'P009',60,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL),(10,'P010',45,'2025-06-13 09:23:41','2025-06-13 09:23:41',NULL);
/*!40000 ALTER TABLE `product_stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('P001','Kopi Hitam',10000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P002','Teh Tarik',12000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P003','Roti Bakar',15000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P004','Indomie Goreng',13000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P005','Nasi Goreng',18000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P006','Ayam Geprek',20000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P007','Es Jeruk',9000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P008','Es Teh Manis',8000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P009','Mie Ayam',16000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL),('P010','Sate Ayam',22000,'2025-06-13 09:23:40','2025-06-13 09:23:40',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchases` (
  `id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `status` enum('waiting_for_payment','completed','canceled') NOT NULL DEFAULT 'waiting_for_payment',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
INSERT INTO `purchases` VALUES ('ce7fc377-d758-4ba6-953d-0823af90111b','P001',12,'completed','2025-06-13 12:41:56','2025-06-13 12:46:18',NULL);
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-13 20:10:29
