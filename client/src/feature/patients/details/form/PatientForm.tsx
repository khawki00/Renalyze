import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
type Props = {
    patient?: Patient
    closeForm: () => void;
    submitForm: (patient: Patient) => void
}
export default function PatientForm({patient, closeForm, submitForm}: Props) {
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
       const formData = new FormData(event.currentTarget);
       const data:{[key: string]: FormDataEntryValue} ={}
       formData.forEach((value, key)=>{
        data[key] = value;
       });

       if(patient) data.id = patient.id
       submitForm(data as unknown as Patient)
    }
  return (
  <Paper sx={{borderRadius: 3, padding:3}}>
    <Typography variant="h5" gutterBottom color="primary">
        Add Patient
    </Typography>
    <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
        <TextField name='firstName' label="First Name" defaultValue={patient?.firstName} />
        <TextField name='middleInitial' label="Middle Initial" defaultValue={patient?.middleInitial}/>
        <TextField name='lastName' label="Last Name" defaultValue={patient?.lastName}/>
         Birth Day<TextField type="date"/>
         <FormControl fullWidth variant="standard">
              <InputLabel id="gender-label">
                Gender
              </InputLabel>
              <Select name='gender'
                labelId="gender-label"
                id="gender-select"
                //   value={}
                label="Gender"
                //   onChange={''}
                defaultValue={patient?.gender}
              >
                <MenuItem value={0}>Male</MenuItem>
                <MenuItem value={1}>Female</MenuItem>
               
              </Select>
            </FormControl>
        <TextField name='phone' label="Phone" defaultValue={patient?.phone} />
        <Box display='flex' justifyContent='end' gap={3}>
            <Button onClick={closeForm}color='inherit'>Cancel</Button>
            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    </Box>
  </Paper>);
}
