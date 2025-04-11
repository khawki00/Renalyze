using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain;

public class Patient
{ 
  
    public string Id {get;set;} = Guid.NewGuid().ToString();
    [Key]
    public int MedicalRecordNumber { get; set; }
    public required string FirstName { get; set; }
    public string? MiddleInitial { get; set; }
    public required string LastName { get; set; }

    public DateTime Birthday { get; set; }
    public Gender Gender { get; set; }
    public required string Phone { get; set; }
    public required string Email { get; set; }
    public required string Address { get; set; }
    public required string Occupation { get; set; }
    public required string EmergencyContactName { get; set; }
    public required string EmergencyContactNumber { get; set; }
    public required string PrimaryProvider { get; set; }
    public required string InsuranceProvider { get; set; }
    public required string InsurancePolicyNumber { get; set; }

}
