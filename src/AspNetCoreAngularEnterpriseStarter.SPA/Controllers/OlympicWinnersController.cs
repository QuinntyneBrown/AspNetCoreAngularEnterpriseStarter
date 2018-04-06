using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngularEnterpriseStarter.SPA.Extensions;

namespace AspNetCoreAngularEnterpriseStarter.SPA.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OlympicWinnersController
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public OlympicWinnersController(IHttpClientFactory httpClientFactory) => _httpClientFactory = httpClientFactory;

        [HttpGet]
        public async Task<ActionResult<ICollection<OlympicWinnerApiModel>>> Get()
        {
            var client = _httpClientFactory.CreateClient();

            var olympicWinners = await client.GetAsync<ICollection<OlympicWinnerApiModel>>("https://www.ag-grid.com/olympicWinners.json");

            return new OkObjectResult(olympicWinners);
        }

    }
}
