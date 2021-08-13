using System.Data.SqlClient;
using System.Collections.Generic;
using BackendTi.DTO;
namespace BackendTi.DAO
{
    public class ConditionDAO
    {
            private static readonly string TABLE_NAME = "Condition";

        public static readonly string FIELD_CONDITIONID = "ConditionID";
        public static readonly string FIELD_NUMBEROFCLIENT = "NumberOfClient";
        public static readonly string FIELD_STARTDATE = "StartDate";
        public static readonly string FIELD_ENDDATE = "EndDate";
        public static readonly string FIELD_EXPIRATION = "Expiration";
        public static readonly string FIELD_GIFTID = "GiftId";

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_QUERY_CONDITION_GIFT = $"select {TABLE_NAME}.{FIELD_CONDITIONID}, {TABLE_NAME}.{FIELD_NUMBEROFCLIENT}, gift.{GiftDAO.FIELD_GIFTID}, gift.{GiftDAO.FIELD_DESCRIPTION} from {TABLE_NAME} inner join gift on {TABLE_NAME}.{FIELD_GIFTID} = gift.{GiftDAO.FIELD_GIFTID} order by {TABLE_NAME}.{FIELD_NUMBEROFCLIENT}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_CONDITIONID} = @{FIELD_CONDITIONID}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_NUMBEROFCLIENT}, {FIELD_STARTDATE},{FIELD_ENDDATE}, {FIELD_EXPIRATION},{FIELD_GIFTID}) " +
            $"output inserted.{FIELD_CONDITIONID}" +
            $" values (@{FIELD_NUMBEROFCLIENT},@{FIELD_STARTDATE},@{FIELD_ENDDATE},@{FIELD_EXPIRATION},@{FIELD_GIFTID})";

        public static List<ConditionDTO> Query()
        {
            List<ConditionDTO> condition = new List<ConditionDTO>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    condition.Add(new ConditionDTO(reader));
                }

                return condition;
            }
        }
        public static List<ConditionGiftDTO> QueryGiftCondition()
        {
            List<ConditionGiftDTO> conditionGifts = new List<ConditionGiftDTO>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY_CONDITION_GIFT;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    conditionGifts.Add(new ConditionGiftDTO(reader));
                }

                return conditionGifts;
            }
        }
    
        public static ConditionDTO GetByID (int id)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET;
                command.Parameters.AddWithValue($"{FIELD_CONDITIONID}", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return new ConditionDTO(reader);
                }

                return null;
            }
        }
         public static ConditionDTO Create (ConditionDTO condition)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($"{FIELD_NUMBEROFCLIENT}", condition.NumberOfClient);
                command.Parameters.AddWithValue($"{FIELD_STARTDATE}", condition.StartDate);
                command.Parameters.AddWithValue($"{FIELD_ENDDATE}", condition.EndDate);
                command.Parameters.AddWithValue($"{FIELD_EXPIRATION}", condition.Expiration);
                command.Parameters.AddWithValue($"{FIELD_GIFTID}", condition.GiftId);
                
                condition.ConditionID=(int) command.ExecuteScalar();
                
            }
            return condition;
        }
    }
} 
