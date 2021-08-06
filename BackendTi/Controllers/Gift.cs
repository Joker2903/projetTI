using BackendTi.DTO;
using BackendTi.DAO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BackendTi.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class Gift: ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<GiftDTO>> Query()
        {
            return Ok(GiftDAO.Query());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<GiftDTO> GetByID(int id)
        {
            return Ok(GiftDAO.GetByID(id));
        }

        [HttpPost]
        
        public ActionResult<GiftDTO> Create([FromBody]GiftDTO gift)
        {
            return Ok(GiftDAO.Create(gift));
        }

        [HttpPut]
        
        public ActionResult<GiftDTO> Update ([FromBody]GiftDTO gift)
        {
            bool updated = GiftDAO.Update(gift);
            if (updated)
            {
                return NoContent();
            }
            return NotFound("Client not found");
            
        }
            [HttpDelete]
            [Route("{id}")]
        public ActionResult<GiftDTO> DeletedById (int id)
        {
            bool Deleted = GiftDAO.DeletedById(id);
            if (Deleted)
            {
                return NoContent();
            }
            return NotFound("Client not found");
            
        }

    }
    
}