using System;
using MediatR;
using Persistence;

namespace Application.Patients.Commands;

public class DeletePatient
{
    public class Command : IRequest
    {
        public required int Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var patient = await context.Patients.FindAsync([request.Id], cancellationToken)
                 ?? throw new Exception("Cannot Find Patient");
            context.Remove(patient);    
            await context.SaveChangesAsync(cancellationToken); 
        }
    }
}
