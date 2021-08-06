using System.Data.SqlClient;
using BackendTi.DAO;
using System ;
namespace BackendTi.DTO
{
    public class ClientDTO
    {
        public int clientID { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Mail { get; set; }
        public int? SponsorID { get; set; }
        public string Password { get; set; }
        

        public ClientDTO(int clientID,string Lastname,string Firstname,string Mail,int SponsorID,string Password)
        {
            this.clientID = clientID;
            this.Lastname = Lastname;
            this.Firstname = Firstname;
            this.Mail =  Mail ;
            this.SponsorID = SponsorID;
            this.Password = Password;
            
        }

        public ClientDTO()
        {

        }

        public ClientDTO(SqlDataReader reader)
        {
            this.clientID = Convert.ToInt32(reader[ClientDAO.FIELD_ID].ToString());
            this.Firstname = reader[ClientDAO.FIELD_FIRSTNAME].ToString();
            this.Lastname = reader[ClientDAO.FIELD_LASTNAME].ToString();
            this.Mail = reader[ClientDAO.FIELD_MAIL].ToString();
            if(reader[ClientDAO.FIELD_SPONSORID].ToString()=="")
            {
                this.SponsorID=-1;
            }else
            {

            this.SponsorID = Convert.ToInt32(reader[ClientDAO.FIELD_SPONSORID].ToString());
            }
            this.Password = reader[ClientDAO.FIELD_PASSWORD].ToString();
        }
    }
}