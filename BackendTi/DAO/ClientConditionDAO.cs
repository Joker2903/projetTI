using System.Data.SqlClient;
using System.Collections.Generic;
using BackendTi.DTO;
namespace BackendTi.DAO
{
    public class ClientConditionDAO
    {
        private static readonly string TABLE_NAME = "client_condition";

        public static readonly string FIELD_CLIENTID = "clientId";
        public static readonly string FIELD_CONDITIONID = "conditionId";
        public static readonly string FIELD_COMPLETEDDATE = "completedDate";

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_CONDITIONID} = @{FIELD_CONDITIONID}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_CLIENTID}, {FIELD_CONDITIONID},{FIELD_COMPLETEDDATE}) " +
            $"values (@{FIELD_CLIENTID},@{FIELD_CONDITIONID},@{FIELD_COMPLETEDDATE})";

        public static List<ClientConditionDTO> Query()
        {
            List<ClientConditionDTO> clientCondition = new List<ClientConditionDTO>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    clientCondition.Add(new ClientConditionDTO(reader));
                }

                return clientCondition;
            }
        }
    
        public static ClientConditionDTO GetByID (int id)
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
                    return new ClientConditionDTO(reader);
                }

                return null;
            }
        }
        public static ClientConditionDTO Create (ClientConditionDTO clientCondition)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($"{FIELD_CLIENTID}", clientCondition.clientId);
                command.Parameters.AddWithValue($"{FIELD_CONDITIONID}", clientCondition.conditionId);
                command.Parameters.AddWithValue($"{FIELD_COMPLETEDDATE}", clientCondition.completedDate);
                
                command.ExecuteScalar();
                
            }
            return clientCondition;
        }
    }
} 
