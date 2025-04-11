using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Patients.Any()) return;

        var patients = new List<Patient>
        {
            new () {
                FirstName =  "Emily",
                MiddleInitial= "R",
                LastName = "Thompson",
                Birthday = DateTime.Parse("1985-07-12"),
                Gender = Gender.Female,
                Phone = "(415) 555-3412",
                Email = "emily.thompson85@example.com",
                Address = "123 Maple St, San Francisco, CA 94110",
                Occupation = "Graphic Designer",
                EmergencyContactName = "James Thompson",
                EmergencyContactNumber = "(510) 555-9887",
                PrimaryProvider = "Dr. Amanda Liu",
                InsuranceProvider  = "Blue Cross Blue Shield",
                InsurancePolicyNumber = "BCBS9384732",

            },
              new () {
                FirstName =  "Michael",
                LastName = "Reyes",
                Birthday = DateTime.Parse("1990-11-03"),
                Gender = Gender.Male,
                Phone = "(312) 555-7845",
                Email = "m.reyes90@example.com",
                Address = "456 Oak Ave, Chicago, IL 60622",
                Occupation = "Software Engineer",
                EmergencyContactName = "Anna Reyes",
                EmergencyContactNumber = "(773) 555-2189",
                PrimaryProvider = "Dr. Raj Patel",
                InsuranceProvider  = "UnitedHealthcare",
                InsurancePolicyNumber = "UHC8372649",

        },
          new () {
                FirstName =  "Sophia",
                 MiddleInitial= "L",
                LastName = "Nguyen",
                Birthday = DateTime.Parse("2000-03-28"),
                Gender = Gender.Female,
                Phone = "(213) 555-0983",
                Email = "sophia.nguyen@aol.com",
                Address = "789 Pine Rd, Los Angeles, CA 90012",
                Occupation = "Student",
                EmergencyContactName = "Mai Nguyen",
                EmergencyContactNumber = "(626) 555-4411",
                PrimaryProvider = "Dr. Karen Holmes",
                InsuranceProvider  = "Kaiser Permanente",
                InsurancePolicyNumber = "KP12345678",

        },
         new () {
                FirstName =  "David",
                 MiddleInitial= "J",
                LastName = "Miller",
                Birthday = DateTime.Parse("1977-01-21"),
                Gender = Gender.Male,
                Phone = "(817) 555-6723",
                Email = "david.miller77@hotmail.com",
                Address = "1022 Birch St, Fort Worth, TX 76102",
                Occupation = "Teacher",
                EmergencyContactName = "Linda Miller",
                EmergencyContactNumber = "(214) 555-3456",
                PrimaryProvider = "Dr. Alan Cooper",
                InsuranceProvider  = "Aetna",
                InsurancePolicyNumber = "AET8325643",

         },
           new () {
                FirstName =  "Olivia",
                LastName = "Bennett",
                Birthday = DateTime.Parse("1995-09-30"),
                Gender = Gender.Female,
                Phone = "(503) 555-2190",
                Email = "olivia.bennett95@yahoo.com",
                Address = "567 Cedar Ln, Portland, OR 97203",
                Occupation = "Nurse",
                EmergencyContactName = "Samantha Bennett",
                EmergencyContactNumber = "(503) 555-8932",
                PrimaryProvider = "Dr. Peter Shaw",
                InsuranceProvider  = "Cigna",
                InsurancePolicyNumber = "CIG5489321",

         },
    };

        context.Patients.AddRange(patients);
        await context.SaveChangesAsync();
    }
}
