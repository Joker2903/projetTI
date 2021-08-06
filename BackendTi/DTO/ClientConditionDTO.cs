using System.Data.SqlClient;
using BackendTi.DAO;
using System ;
namespace BackendTi.DTO
{
    public class ClientConditionDTO
    {
        public int clientId { get; set; }
        public int conditionId { get; set; }
        public DateTime completedDate { get; set; }
        

        public ClientConditionDTO(int clientId,int conditionId,DateTime completedDate)
        {
            this.clientId = clientId;
            this.conditionId = conditionId;
            this.completedDate = completedDate.Date;
            // {
            //     "clientId" : 7,
            //     "conditionId" : 1,
            //     "completedDate" : "2021-06-08"
            // }
        }

        public ClientConditionDTO()
        {

        }

        public ClientConditionDTO(SqlDataReader reader)
        {
            this.clientId = Convert.ToInt32(reader[ConditionDAO.FIELD_CONDITIONID].ToString());
            this.conditionId = Convert.ToInt32(reader[ConditionDAO.FIELD_NUMBEROFCLIENT].ToString());
            this.completedDate = Convert.ToDateTime(reader[ConditionDAO.FIELD_STARTDATE]).Date;
        }
    }
}