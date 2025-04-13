using System;
using System.Diagnostics;
using Domain;
using MediatR;
using Persistence;

namespace Applicaiton.Patients.Queries;

public class GetPatientDetails
{
    public class Query : IRequest<Patient>
    {
        public required int Id {get;set;}
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Patient>
    {
        public async Task<Patient> Handle(Query request, CancellationToken cancellationToken)
        {
           var patient = await context.Patients.FindAsync([request.Id], cancellationToken);

           if (patient == null) throw new Exception("Patient Not Found");

           return patient;
        }
    }
}