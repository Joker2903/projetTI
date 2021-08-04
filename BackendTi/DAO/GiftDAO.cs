using System.Data.SqlClient;
using System.Collections.Generic;
using BackendTi.DTO;
namespace BackendTi.DAO
{
    public class GiftDAO
    {
            private static readonly string TABLE_NAME = "Gift";

        public static readonly string FIELD_GIFTID = "GiftID";
        public static readonly string FIELD_DESCRIPTION = "Description";
 

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_GIFTID} = @{FIELD_GIFTID}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_DESCRIPTION}) " +
            $"output inserted.{FIELD_GIFTID}" +
            $" values (@{FIELD_DESCRIPTION})";

        private static readonly string REQ_UPDATE =
            $"update {TABLE_NAME} set " +
            $"{FIELD_DESCRIPTION} = @{FIELD_DESCRIPTION}" +
            $" where {FIELD_GIFTID}=@{FIELD_GIFTID}";

            private static readonly string REQ_DELETE =
            $"delete from {TABLE_NAME} where {FIELD_GIFTID} = @{FIELD_GIFTID}";
        public static List<GiftDTO> Query()
        {
            List<GiftDTO> gift = new List<GiftDTO>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    gift.Add(new GiftDTO(reader));
                }

                return gift;
            }
        }
    
        public static GiftDTO GetByID (int id)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET;
                command.Parameters.AddWithValue($"{FIELD_GIFTID}", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return new GiftDTO(reader);
                }

                return null;
            }
        }
         public static GiftDTO Create (GiftDTO gift)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($"{FIELD_DESCRIPTION}", gift.Description);

                
                gift.GiftID=(int) command.ExecuteScalar();
                
            }
            return gift;
        } 
        public static bool Update (GiftDTO gift)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;

                command.Parameters.AddWithValue($"{FIELD_DESCRIPTION}", gift.Description);
                command.Parameters.AddWithValue($"{FIELD_GIFTID}", gift.GiftID);
                return command.ExecuteNonQuery() == 1;
                
            }
            
        }
         public static bool DeletedById (int id)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_DELETE;
                command.Parameters.AddWithValue($"{FIELD_GIFTID}", id);


                 return command.ExecuteNonQuery() == 1;
            }
    }
}
}