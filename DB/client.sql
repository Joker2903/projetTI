USE [TiProjetDB]
GO

/****** Object:  Table [dbo].[Client]    Script Date: 04-08-21 11:05:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Client](
	[clientID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nchar](60) NOT NULL,
	[LastName] [nchar](60) NOT NULL,
	[Mail] [nchar](100) NOT NULL,
	[SponsorID] [int] NULL,
	[Password] [nchar](100) NOT NULL,
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[clientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Client]  WITH CHECK ADD  CONSTRAINT [FK_Client_Client1] FOREIGN KEY([SponsorID])
REFERENCES [dbo].[Client] ([clientID])
GO

ALTER TABLE [dbo].[Client] CHECK CONSTRAINT [FK_Client_Client1]
GO

