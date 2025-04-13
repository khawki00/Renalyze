using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Applicaiton.Patients.Queries;


public class GetPatientList
{
    public class Query : IRequest<List<Patient>>{}

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Patient>>
    {
        public async Task<List<Patient>> Handle(Query request, CancellationToken cancellationToken)
        {
         
            return await context.Patients.ToListAsync(cancellationToken);
        }
    }
}

