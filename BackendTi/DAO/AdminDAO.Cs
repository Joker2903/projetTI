using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using BackendTi.DTO;
using BackendTi.Helpers;
using Microsoft.Extensions.Options;
using System.Text;
using System.Linq;
using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;

using System.Security.Claims;


namespace BackendTi.DAO
{
    public class AdminDAO
    {
        private static readonly string TABLE_NAME = "Admin";

        public static readonly string FIELD_ID = "ID";
        public static readonly string FIELD_LOGIN = "Login";
        public static readonly string FIELD_PASSWORD= "Password";
 
        private readonly AppSettings _appSettings;

        public AdminDAO(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        private static readonly string REQ_QUERY = $"select * from {TABLE_NAME}";
        private static readonly string REQ_GET = REQ_QUERY + $" where {FIELD_ID} = @{FIELD_ID}";
        private static readonly string REQ_CONNECT = REQ_QUERY + $" where {FIELD_LOGIN} = @{FIELD_LOGIN} and {FIELD_PASSWORD} = @{FIELD_PASSWORD}";
        private static readonly string REQ_POST =
            $"insert into {TABLE_NAME} ({FIELD_LOGIN}, {FIELD_PASSWORD}) " +
            $"output inserted.{FIELD_ID}" +
            $" values (@{FIELD_LOGIN}, @{FIELD_PASSWORD})";

        
        public static List<AdminDTO> Query()
        {
            List<AdminDTO> admins = new List<AdminDTO>();

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_QUERY;

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    admins.Add(new AdminDTO(reader));
                }

                return admins;
            }
        }
    
        public static AdminDTO GetByID (int id)
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
                    
                    return new AdminDTO(reader);
                }

                return null;
            }
        }
         public static AdminDTO Create (AdminDTO admin)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_POST;

                command.Parameters.AddWithValue($"{FIELD_LOGIN}", admin.Login);
                command.Parameters.AddWithValue($"{FIELD_PASSWORD}", admin.Password);

                
                admin.ID =(int) command.ExecuteScalar();
                
            }
            return admin;
        } 
         public static AdminDTO Connect (AdminDTO admin)
        {
    

            using (var connection = Database.GetConnection())
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = REQ_CONNECT;

                command.Parameters.AddWithValue($"{FIELD_LOGIN}", admin.Login);
                command.Parameters.AddWithValue($"{FIELD_PASSWORD}", admin.Password);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    var adminWithToken = new AdminDTO(reader);
                    var token = generateJwtToken(adminWithToken);
                    adminWithToken.JsonToken = token;


                    return adminWithToken;
                }
                
            }
            return null;
        } 

        public static string generateJwtToken(AdminDTO admin)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(AppSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", admin.ID.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        
    }
}