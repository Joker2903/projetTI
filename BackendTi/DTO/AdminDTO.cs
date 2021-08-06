using System.Data.SqlClient;
using BackendTi.DAO;
using System ;
namespace BackendTi.DTO
{
    public class AdminDTO
    {
        public int ID { get; set; }
        public string Login { get; set; }
        
        public string Password { get; set; }
        public string JsonToken { get; set; }
        

        public AdminDTO(int ID,string Login,string Password)
        {
            this.ID = ID;
            this.Login = Login;
            this.Password = Password;
           
        }
        public AdminDTO(int ID,string Login,string Password, string JsonToken)
        {
            this.ID = ID;
            this.Login = Login;
            this.Password = Password;
            this.JsonToken = JsonToken;
        }

        public AdminDTO()
        {

        }

        public AdminDTO(SqlDataReader reader)
        {
            this.ID = Convert.ToInt32(reader[AdminDAO.FIELD_ID].ToString());
            this.Login = reader[AdminDAO.FIELD_LOGIN].ToString();
            this.Password = reader[AdminDAO.FIELD_PASSWORD].ToString();
        }
    }
}