using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;


namespace AspNetCoreAngularEnterpriseStarter.SPA
{
    public class OlympicWinnersClient
    {
        private HttpClient _client;

        public OlympicWinnersClient(HttpClient client)
        {
            _client = client;
        }

        public async Task<ICollection<OlympicWinnerApiModel>> Get()
        {
            return await _client.GetAsync<ICollection<OlympicWinnerApiModel>>("olympicWinners.json");            
        }
    }
}
