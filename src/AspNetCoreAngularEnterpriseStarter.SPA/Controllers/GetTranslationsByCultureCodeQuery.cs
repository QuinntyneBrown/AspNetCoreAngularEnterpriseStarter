﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AspNetCoreAngularEnterpriseStarter.SPA.Controllers
{
    public class GetTranslationsByCultureCodeQuery
    {
        public class Request : IRequest<Response>
        {
            public string CultureCode { get; set; }
        }

        public class Response
        {
            public dynamic Translations { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            public Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var response = new Response()
                {
                    Translations = new {
                        Title = "Olympic Winners"
                    }
                };

                return Task.FromResult(response);
            }
        }
    }
}
