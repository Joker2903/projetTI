using BackendTi.DTO;
using BackendTi.DAO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BackendTi.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientCondition: ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<ClientConditionDTO>> Query()
        {
            return Ok(ClientConditionDAO.Query());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<ClientConditionDTO[]> GetByClientID(int id)
        {
            return Ok(ClientConditionDAO.GetByClientID(id));
        }
        [HttpGet]
        [Route("both/{clientID}/{conditionID}")]
        public ActionResult<ClientConditionDTO> GetByBothID(int clientID, int conditionID)
        {
            // if (ClientConditionDAO.GetByBothID(clientID,conditionID) == null){
            //     return NoContent();
            // }
            return Ok(ClientConditionDAO.GetByBothID(clientID,conditionID));
        }

        [HttpPost]
        
        public ActionResult<ClientConditionDTO> Create([FromBody]ClientConditionDTO clientCondition)
        {
            return Ok(ClientConditionDAO.Create(clientCondition));
        }
    }
}