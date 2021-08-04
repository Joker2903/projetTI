USE [master]
GO

/****** Object:  Database [TiProjetDB]    Script Date: 04-08-21 11:04:24 ******/
CREATE DATABASE [TiProjetDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TiProjetDB', FILENAME = N'D:\programmes files\MSSQL15.MSSQLSERVER\MSSQL\DATA\TiProjetDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TiProjetDB_log', FILENAME = N'D:\programmes files\MSSQL15.MSSQLSERVER\MSSQL\DATA\TiProjetDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TiProjetDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [TiProjetDB] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [TiProjetDB] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [TiProjetDB] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [TiProjetDB] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [TiProjetDB] SET ARITHABORT OFF 
GO

ALTER DATABASE [TiProjetDB] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [TiProjetDB] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [TiProjetDB] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [TiProjetDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [TiProjetDB] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [TiProjetDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [TiProjetDB] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [TiProjetDB] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [TiProjetDB] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [TiProjetDB] SET  DISABLE_BROKER 
GO

ALTER DATABASE [TiProjetDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [TiProjetDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [TiProjetDB] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [TiProjetDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [TiProjetDB] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [TiProjetDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [TiProjetDB] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [TiProjetDB] SET RECOVERY FULL 
GO

ALTER DATABASE [TiProjetDB] SET  MULTI_USER 
GO

ALTER DATABASE [TiProjetDB] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [TiProjetDB] SET DB_CHAINING OFF 
GO

ALTER DATABASE [TiProjetDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [TiProjetDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [TiProjetDB] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [TiProjetDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [TiProjetDB] SET QUERY_STORE = OFF
GO

ALTER DATABASE [TiProjetDB] SET  READ_WRITE 
GO
