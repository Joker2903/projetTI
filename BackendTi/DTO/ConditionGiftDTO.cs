using System.Data.SqlClient;
using BackendTi.DAO;
using System ;
namespace BackendTi.DTO
{
    public class ConditionGiftDTO
    {
        
        public int ConditionID { get; set; }
        public int NumberOfClient { get; set; }
        public int GiftID { get; set; }
        public string Description { get; set; }

        

        public ConditionGiftDTO(int ConditionID,int NumberOfClient,int GiftID,string Description)
        {
            this.ConditionID = ConditionID;
            this.NumberOfClient = NumberOfClient;
            this.GiftID = GiftID;
            this.Description = Description;
            // {
            //     "Description" : "Lalalalalala"
            // }
        }

        public ConditionGiftDTO()
        {

        }

        public ConditionGiftDTO(SqlDataReader reader)
        {
            this.ConditionID = Convert.ToInt32(reader[ConditionDAO.FIELD_GIFTID].ToString());
            this.NumberOfClient = Convert.ToInt32(reader[ConditionDAO.FIELD_NUMBEROFCLIENT].ToString());
            this.GiftID = Convert.ToInt32(reader[GiftDAO.FIELD_GIFTID].ToString());
            this.Description = reader[GiftDAO.FIELD_DESCRIPTION].ToString();
           
        }
    }
}