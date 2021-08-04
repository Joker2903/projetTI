using System.Data.SqlClient;
using BackendTi.DAO;
using System ;
namespace BackendTi.DTO
{
    public class ConditionDTO
    {
        public int ConditionID { get; set; }
        public int NumberOfClient { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Expiration { get; set; }
        public int GiftId { get; set; }
        

        public ConditionDTO(int ConditionID,int NumberOfClient,DateTime StartDate,DateTime EndDate,int Expiration,int GiftId)
        {
            this.ConditionID = ConditionID;
            this.NumberOfClient = NumberOfClient;
            this.StartDate = StartDate;
            this.EndDate =  EndDate ;
            this.Expiration = Expiration;
            this.GiftId = GiftId;
            
        }

        public ConditionDTO()
        {

        }

        public ConditionDTO(SqlDataReader reader)
        {
            this.ConditionID = Convert.ToInt32(reader[ConditionDAO.FIELD_CONDITIONID].ToString());
            this.NumberOfClient = Convert.ToInt32(reader[ConditionDAO.FIELD_NUMBEROFCLIENT].ToString());
            this.StartDate = Convert.ToDateTime(reader[ConditionDAO.FIELD_STARTDATE].ToString());
            this.EndDate = Convert.ToDateTime(reader[ConditionDAO.FIELD_ENDDATE].ToString());
            if(reader[ConditionDAO.FIELD_EXPIRATION].ToString()=="")
            {
                this.Expiration=-1;
            }else
            {
            this.Expiration = Convert.ToInt32(reader[ConditionDAO.FIELD_EXPIRATION].ToString());
            }
             if(reader[ConditionDAO.FIELD_GIFTID].ToString()=="")
            {
                this.GiftId=-1;
            }else
            {
            this.GiftId = Convert.ToInt32(reader[ConditionDAO.FIELD_GIFTID].ToString());
            }
            
        }
    }
}