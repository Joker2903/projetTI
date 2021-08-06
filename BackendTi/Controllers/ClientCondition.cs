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
        public ActionResult<ClientConditionDTO> GetByID(int id)
        {
            return Ok(ClientConditionDAO.GetByID(id));
        }

        [HttpPost]
        
        public ActionResult<ClientConditionDTO> Create([FromBody]ClientConditionDTO clientCondition)
        {
            return Ok(ClientConditionDAO.Create(clientCondition));
        }
    }
}