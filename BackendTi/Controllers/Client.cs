using BackendTi.DTO;
using BackendTi.DAO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BackendTi.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class Client: ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<ClientDTO>> Query()
        {
            return Ok(ClientDAO.Query());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<ClientDTO> GetByID(int id)
        {
            return Ok(ClientDAO.GetByID(id));
        }

        [HttpGet]
        [Route("sponsor/{id}")]
        public ActionResult<int> GetSponsoredClientByID(int id)
        {
            return Ok(ClientDAO.GetSponsoredClientByID(id));
        }

        [HttpPost]
        
        public ActionResult<ClientDTO> Create([FromBody]ClientDTO client)
        {
            return Ok(ClientDAO.Create(client));
        }

        [HttpPut]
        
        public ActionResult<ClientDTO> Update ([FromBody]ClientDTO client)
        {
            bool updated = ClientDAO.Update(client);
            if (updated)
            {
                return NoContent();
            }
            return NotFound("Client not found");
            
        }
            [HttpDelete]
            [Route("{id}")]
        public ActionResult<ClientDTO> DeletedById (int id)
        {
            bool Deleted = ClientDAO.DeletedById(id);
            if (Deleted)
            {
                return NoContent();
            }
            return NotFound("Client not found");
            
        }

    }
    
}