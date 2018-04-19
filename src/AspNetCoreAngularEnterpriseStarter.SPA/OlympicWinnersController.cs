using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngularEnterpriseStarter.SPA
{
    [ApiController]
    [Route("api/[controller]")]
    public class OlympicWinnersController
    {
        [HttpGet]
        public async Task<ActionResult<ICollection<OlympicWinnerApiModel>>> Get([FromServices]OlympicWinnersClient client)
            => new OkObjectResult(await client.Get());
    }
}
