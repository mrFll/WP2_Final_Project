-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.17-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema kaashaane
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ kaashaane;
USE kaashaane;

--
-- Table structure for table `kaashaane`.`city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `ID` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(45) NOT NULL default '',
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kaashaane`.`city`
--

/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` (`ID`,`name`) VALUES 
 (1,'Shiraz'),
 (2,'Tehran'),
 (3,'Esfahan'),
 (4,'Mashhad'),
 (5,'Semnan'),
 (6,'Sangesar'),
 (7,'Booshehr'),
 (8,'Ahvaz');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;


--
-- Table structure for table `kaashaane`.`house`
--

DROP TABLE IF EXISTS `house`;
CREATE TABLE `house` (
  `ID` int(10) unsigned NOT NULL auto_increment,
  `owner_ID` int(10) unsigned NOT NULL default '0',
  `title` varchar(30) NOT NULL default '',
  `address` varchar(100) NOT NULL default '',
  `city_ID` int(10) unsigned NOT NULL default '0',
  `price` int(10) unsigned NOT NULL default '0',
  `guest_cap` varchar(5) NOT NULL default '',
  `location` varchar(30) NOT NULL default '',
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=1;

--
-- Dumping data for table `kaashaane`.`house`
--

/*!40000 ALTER TABLE `house` DISABLE KEYS */;
/*!40000 ALTER TABLE `house` ENABLE KEYS */;


--
-- Table structure for table `kaashaane`.`person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `ID` int(10) unsigned NOT NULL auto_increment,
  `first_name` varchar(45) NOT NULL default '',
  `last_name` varchar(45) NOT NULL default '',
  `email` varchar(45) NOT NULL default '',
  `phone` varchar(20) NOT NULL default '',
  `password` varchar(50) NOT NULL default '',
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kaashaane`.`person`
--

/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` (`ID`,`first_name`,`last_name`,`email`,`phone`,`password`) VALUES 
 (16,'Parham','Fallah','parhamf7@gmail.com','09171047949','123'),
 (17,'abbash','koliii','abbs@gmail.com','09171177942','123'),
 (18,'','','','',''),
 (19,'','','','','');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
