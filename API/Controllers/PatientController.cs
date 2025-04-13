using Applicaiton.Patients.Queries;
using Application.Patients.Commands;
using Domain;
using MediatR;

using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController: BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Patient>>> GetPatients()
        {
            return await Mediator.Send(new GetPatientList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatientDetail(int id)
        {
           return await Mediator.Send(new GetPatientDetails.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreatePatient(Patient patient)
        {
            return await Mediator.Send(new CreatePatient.Command{Patient = patient});
        }

        [HttpPut]
        public async Task<ActionResult> EditPatient(Patient patient)
        {
            await Mediator.Send(new EditPatient.Command{Patient = patient});
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePatient(int id)
        {
            await Mediator.Send(new DeletePatient.Command{Id = id});
            return Ok();
        }
    }
}
