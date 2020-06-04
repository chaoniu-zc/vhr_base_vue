-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: myvhr
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `base_elem`
--

DROP TABLE IF EXISTS `base_elem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `base_elem` (
  `elemid` int(11) NOT NULL AUTO_INCREMENT COMMENT '工号',
  `elemname` varchar(10) DEFAULT NULL COMMENT '姓名',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(4) DEFAULT NULL COMMENT '性别',
  `phone` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `address` varchar(30) DEFAULT NULL COMMENT '现住址',
  `school` varchar(30) DEFAULT NULL COMMENT '毕业院校',
  `native` varchar(10) DEFAULT NULL COMMENT '籍贯',
  `id` varchar(20) DEFAULT NULL COMMENT '身份证号',
  `birthday` date DEFAULT NULL COMMENT '出生日期',
  `unitid` int(11) NOT NULL COMMENT '部门编号',
  `jobid` int(11) NOT NULL COMMENT '职称编号',
  `intojob` date DEFAULT NULL COMMENT '就职日期',
  `jobyear` int(11) DEFAULT NULL COMMENT '合同年限',
  `jobstatus` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '在职状态',
  PRIMARY KEY (`elemid`)
) ENGINE=InnoDB AUTO_INCREMENT=1011 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base_elem`
--

LOCK TABLES `base_elem` WRITE;
/*!40000 ALTER TABLE `base_elem` DISABLE KEYS */;
INSERT INTO `base_elem` VALUES (1001,'张雄',30,'男','15924740875','北京市海淀区','北京大学','云南','530381199722241136','1990-12-24',1,106,'2020-05-20',10,'在职'),(1002,'李丽',32,'女','1732345678','北京市昌平区','清华大学','云南','530381199412031145','1988-11-23',2,102,'2019-12-12',10,'在职'),(1003,'彝睦',35,'男','15923740987','北京市昌平区','燕京大学','云南','530381199511121145','1985-11-12',3,103,'2019-12-26',10,'在职'),(1004,'刀雨薪',27,'女','15934323456','北京海淀','法政大学','湖南','530381234511234023','1993-12-12',4,101,'2018-10-12',2,'在职'),(1005,'小王',27,'男','15934323456','北京海淀','法政大学','湖南','530381234511234012','1993-12-12',2,101,'2018-10-12',2,'在职'),(1006,'张辉',23,'男','13475827294','北京海淀','河北北方学院','河北','12434353534343434156','1994-12-12',3,104,'2019-12-21',3,'在职'),(1007,'张娜娜',19,'女','13345827294','北京海淀','燕山大学','河北','12674353534343434156','2001-12-12',2,104,'2020-01-21',3,'在职'),(1008,'王璐',24,'女','19345827294','北京海淀','天津大学','天津','17874353534343434156','1996-12-12',4,101,'2019-01-21',3,'在职'),(1009,'昌戈',24,'男','16345827297','北京昌平','河北工业大学','湖北','2374353534343434156','1996-02-28',1,105,'2019-10-21',3,'在职'),(1010,'苏蕊',22,'女','17345627297','北京昌平','湖南大学','湖南','3024353534343434156','1998-02-28',1,102,'2019-09-14',3,'在职');
/*!40000 ALTER TABLE `base_elem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job` (
  `jobid` int(11) NOT NULL COMMENT '职位编号',
  `jobname` varchar(11) DEFAULT NULL COMMENT '职位名称',
  `belongunit` int(11) DEFAULT NULL COMMENT '所属部门',
  PRIMARY KEY (`jobid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (101,'前端工程师',3),(102,'java工程师',3),(103,'ui设计师',3),(104,'前台接代',2),(105,'行政',2),(106,'产品经理',1);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `unit` (
  `unitid` int(8) NOT NULL AUTO_INCREMENT COMMENT '部门编号',
  `unitname` varchar(10) NOT NULL COMMENT '部门名称',
  `unitlader` varchar(10) DEFAULT NULL COMMENT '部门领导',
  `laderid` int(11) DEFAULT NULL COMMENT '领导编号',
  PRIMARY KEY (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'产品部','张雄',1001),(2,'人事部','李丽',1002),(3,'研发部','彝睦',1003),(4,'公关部','小紫',NULL),(5,'智能推荐部',NULL,NULL),(6,'事业部','小紫',NULL),(7,'广告部','阿bab里',NULL);
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `elemid` int(10) NOT NULL COMMENT '管理员工号',
  `elemname` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '管理员姓名',
  `unitid` int(10) NOT NULL COMMENT '所属部门编号',
  `username` varchar(10) NOT NULL COMMENT '用户名',
  `password` varchar(8) NOT NULL COMMENT '密码',
  `status` tinyint(1) NOT NULL COMMENT '权限',
  PRIMARY KEY (`elemid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1002,'李丽',2,'lili','123456',1),(1005,'王凯',2,'wangkai','123456',1),(1007,'张娜娜',2,'zhangnana','123456',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-31 10:55:32
