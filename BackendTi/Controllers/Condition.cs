using BackendTi.DTO;
using BackendTi.DAO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BackendTi.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class Condition: ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<ConditionDTO>> Query()
        {
            return Ok(ConditionDAO.Query());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<ConditionDTO> GetByID(int id)
        {
            return Ok(ConditionDAO.GetByID(id));
        }

        [HttpPost]
        
        public ActionResult<ConditionDTO> Create([FromBody]ConditionDTO condition)
        {
            return Ok(ConditionDAO.Create(condition));
        }
    }
}