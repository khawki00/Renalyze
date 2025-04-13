using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Patients.Commands;

public class EditPatient
{
    public class Command : IRequest
    {
        public required Patient Patient {get;set;}
    }

    public  class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var patient = await context.Patients.FindAsync([request.Patient.MedicalRecordNumber], cancellationToken)
                 ?? throw new Exception("Cannot Find Patient");

           mapper.Map(request.Patient, patient);
           await context.SaveChangesAsync(cancellationToken);

           
        }
    }
}
