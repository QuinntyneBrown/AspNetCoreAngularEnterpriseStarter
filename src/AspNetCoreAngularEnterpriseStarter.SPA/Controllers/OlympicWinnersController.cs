using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngularEnterpriseStarter.SPA.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OlympicWinnersController
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public OlympicWinnersController(IHttpClientFactory httpClientFactory) => _httpClientFactory = httpClientFactory;

        [HttpGet]
        public async Task<dynamic> Get()
        {
            var client = _httpClientFactory.CreateClient();

            return await client.GetAsync("https://www.ag-grid.com/olympicWinners.json");
        }

    }
}
