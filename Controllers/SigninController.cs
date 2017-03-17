using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspnetcoreSpa.ViewModels;

namespace AspnetcoreSpa.Controllers
{
    [Route("api/[controller]")]
    public class SigninController : Controller
    {
        [HttpPost]
        public IActionResult Index([FromBody] User user)
        {
            var token = string.Empty;

            if (ModelState.IsValid)
            {
                token = "test_token";
            }

            return Json(new Dictionary<string, dynamic>
            {
                { "token", token },
                { "data", user}
            });
        }
    }
}
