using System.Threading.Tasks;
using MediatR;

using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngularEnterpriseStarter.SPA
{
    [ApiController]
    [Route("api/[controller]")]
    public class I18nController
    {
        private IMediator _mediator;

        public I18nController(IMediator mediator) => _mediator = mediator;

        [HttpGet("{cultureCode}")]
        public async Task<ActionResult<dynamic>> Get([FromRoute]GetTranslationsByCultureCodeQuery.Request request) 
            => new OkObjectResult((await _mediator.Send(request)).Translations);
    }
}