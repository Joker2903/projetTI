using BackendTi.DTO;
using BackendTi.DAO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BackendTi.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class Admin: ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<AdminDTO>> Query()
        {
            return Ok(AdminDAO.Query());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<AdminDTO> GetByID(int id)
        {
            return Ok(AdminDAO.GetByID(id));
        }

        [HttpPost]
        public ActionResult<AdminDTO> Create([FromBody]AdminDTO admin)
        {
            return Ok(AdminDAO.Create(admin));
        }
        [HttpPost]
        [Route("connect")]
        public ActionResult<AdminDTO> Connect([FromBody]AdminDTO admin)
        {
            AdminDTO identifiedAdmin = AdminDAO.Connect(admin);
            if (identifiedAdmin == null){
                return BadRequest("Wrong combination login/password.");
            }
            return Ok(identifiedAdmin);
        }
        [Authorize]
        [HttpGet]
        [Route("fake")]
        public ActionResult<string> FakeAuth()
        {
            return Ok("Hello bro you're authorized with JWT");
        }
    }
}