using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngularEnterpriseStarter.SPA.Controllers
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