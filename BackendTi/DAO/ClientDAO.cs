using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using BackendTi.DTO;
namespace BackendTi.DAO
{
    public class ClientDAO
    {
            private static readonly string TABLE_NAME = "Client";

        public static readonly string FIELD_ID = "ClientID";
        public static readonly string FIELD_FIRSTNAME = "FirstName";
        public static readonly string FIELD_LASTNAME = "Lastname";
        public static readonly string FIELD_MAIL = "Mail";
        public static readonly string FIELD_SPONSORID = "SponsorID";
        public static readonly string FIELD_PASSWORD = "Password";

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_SPONSORED_COUNT= $"select count(*) as numberSponsoredClient from {TABLE_NAME} where {FIELD_SPONSORID} = @{FIELD_SPONSORID}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID} = @{FIELD_ID}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_FIRSTNAME}, {FIELD_LASTNAME},{FIELD_MAIL}, {FIELD_SPONSORID},{FIELD_PASSWORD}) " +
            $"output inserted.{FIELD_ID}" +
            $" values (@{FIELD_FIRSTNAME},@{FIELD_LASTNAME},@{FIELD_MAIL},@{FIELD_SPONSORID},@{FIELD_PASSWORD})";

        private static readonly string REQ_UPDATE =
            $"update {TABLE_NAME} set " +
            $"{FIELD_FIRSTNAME} = @{FIELD_FIRSTNAME}, {FIELD_LASTNAME} = @{FIELD_LASTNAME}, {FIELD_MAIL} = @{FIELD_MAIL}, {FIELD_PASSWORD} = @{FIELD_PASSWORD}" +
            $" where {FIELD_ID}=@{FIELD_ID}";

            private static readonly string REQ_DELETE =
            $"delete from {TABLE_NAME} where {FIELD_ID} = @{FIELD_ID}";
        public static List<ClientDTO> Query()
        {
            List<ClientDTO> client = new List<ClientDTO>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    client.Add(new ClientDTO(reader));
                }

                return client;
            }
        }
    
        public static ClientDTO GetByID (int id)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_GET;
                command.Parameters.AddWithValue($"{FIELD_ID}", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return new ClientDTO(reader);
                }

                return null;
            }
        }
        public static int GetSponsoredClientByID (int id)
        {
    

            using (var connection = Database.GetConnection())
            {
                int numberSponsoredClient = 0;
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_SPONSORED_COUNT;
                command.Parameters.AddWithValue($"{FIELD_SPONSORID}", id);

                numberSponsoredClient =(int) command.ExecuteScalar();

                return numberSponsoredClient;
            }
        }
         public static ClientDTO Create (ClientDTO client)
        {

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($"{FIELD_FIRSTNAME}", client.Firstname);
                command.Parameters.AddWithValue($"{FIELD_LASTNAME}", client.Lastname);
                command.Parameters.AddWithValue($"{FIELD_MAIL}", client.Mail);
                if (string.IsNullOrEmpty(client.SponsorID.ToString()) || client.SponsorID == 0){
                    command.Parameters.AddWithValue($"{FIELD_SPONSORID}", DBNull.Value);
                } else {
                    command.Parameters.AddWithValue($"{FIELD_SPONSORID}", client.SponsorID);

                }
                command.Parameters.AddWithValue($"{FIELD_PASSWORD}", client.Password);
                
                client.clientID=(int) command.ExecuteScalar();
                
            }
            return client;
        } 
        public static bool Update (ClientDTO client)
        {
            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_UPDATE;

                command.Parameters.AddWithValue($"{FIELD_FIRSTNAME}", client.Firstname);
                command.Parameters.AddWithValue($"{FIELD_LASTNAME}", client.Lastname);
                command.Parameters.AddWithValue($"{FIELD_MAIL}", client.Mail);
                command.Parameters.AddWithValue($"{FIELD_PASSWORD}", client.Password);
                command.Parameters.AddWithValue($"{FIELD_ID}", client.clientID);
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
                command.Parameters.AddWithValue($"{FIELD_ID}", id);


                 return command.ExecuteNonQuery() == 1;
            }
    }
}
}