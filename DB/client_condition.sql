USE [TiProjetDB]
GO

/****** Object:  Table [dbo].[client_condition]    Script Date: 04-08-21 11:06:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[client_condition](
	[clientId] [int] NOT NULL,
	[conditionId] [int] NOT NULL,
	[completedDate] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[clientId] ASC,
	[conditionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[client_condition]  WITH CHECK ADD  CONSTRAINT [FK_client_condition_Client] FOREIGN KEY([clientId])
REFERENCES [dbo].[Client] ([clientID])
GO

ALTER TABLE [dbo].[client_condition] CHECK CONSTRAINT [FK_client_condition_Client]
GO

ALTER TABLE [dbo].[client_condition]  WITH CHECK ADD  CONSTRAINT [FK_client_condition_Condition] FOREIGN KEY([conditionId])
REFERENCES [dbo].[Condition] ([ConditionID])
GO

ALTER TABLE [dbo].[client_condition] CHECK CONSTRAINT [FK_client_condition_Condition]
GO

