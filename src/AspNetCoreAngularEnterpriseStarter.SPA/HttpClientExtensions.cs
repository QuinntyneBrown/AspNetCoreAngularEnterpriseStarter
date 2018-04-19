using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace AspNetCoreAngularEnterpriseStarter.SPA
{
    public static class HttpClientExtensions
    {
        public static async Task<T> GetAsync<T>(this HttpClient client, string requestUri) {

            var response = await client.GetAsync(requestUri);

            var result = await  response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<T>(result);
        }
    }
}
