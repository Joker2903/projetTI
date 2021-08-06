using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Text;
using BackendTi.DTO;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorizeAttribute : Attribute, IAuthorizationFilter
{
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var user = (AdminDTO)context.HttpContext.Items["AdminDTO"];
        if (user == null)
        {

            // var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "ID").Value);
            // not logged in
            context.Result = new JsonResult(new { message = "Unauthorized"}) { StatusCode = StatusCodes.Status401Unauthorized };
            // context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
        }

    }
}