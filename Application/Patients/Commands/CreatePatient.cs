using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Patients.Commands;

public class CreatePatient
{
    public class Command : IRequest<string>
    {
        public required Patient Patient {get;set;}
    }
    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Patients.Add(request.Patient);
            await context.SaveChangesAsync(cancellationToken);
            return request.Patient.Id;
        }
    }
}