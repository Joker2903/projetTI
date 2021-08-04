using System.Data.SqlClient;

namespace BackendTi
{
    public class Database
    {
        private static readonly string CONNECTION_STRING = 
            "Server=DESKTOP-REMSA7H;Database=TiProjetDB;Integrated Security=SSPI;";
        
        public static SqlConnection GetConnection()
        {
            return new SqlConnection(CONNECTION_STRING);
        }
    }
}