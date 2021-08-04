USE [TiProjetDB]
GO

/****** Object:  Table [dbo].[Condition]    Script Date: 04-08-21 11:06:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Condition](
	[ConditionID] [int] IDENTITY(1,1) NOT NULL,
	[NumberOfClient] [int] NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[Expiration] [int] NULL,
	[GiftId] [int] NULL,
 CONSTRAINT [PK_Condition] PRIMARY KEY CLUSTERED 
(
	[ConditionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Condition]  WITH CHECK ADD  CONSTRAINT [FK_Condition_Gift] FOREIGN KEY([GiftId])
REFERENCES [dbo].[Gift] ([GiftID])
GO

ALTER TABLE [dbo].[Condition] CHECK CONSTRAINT [FK_Condition_Gift]
GO

