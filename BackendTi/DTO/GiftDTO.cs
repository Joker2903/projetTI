using System.Data.SqlClient;
using BackendTi.DAO;
using System ;
namespace BackendTi.DTO
{
    public class GiftDTO
    {
        public int GiftID { get; set; }
        public string Description { get; set; }

        

        public GiftDTO(int GiftID,string Description)
        {
            this.GiftID = GiftID;
            this.Description = Description;
            
        }

        public GiftDTO()
        {

        }

        public GiftDTO(SqlDataReader reader)
        {
            this.GiftID = Convert.ToInt32(reader[GiftDAO.FIELD_GIFTID].ToString());
            this.Description = reader[GiftDAO.FIELD_DESCRIPTION].ToString();
           
        }
    }
}