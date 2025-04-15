import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import PatientDashboard from "../../feature/patients/dashboard/PatientDashboard";
import DashboardHeading from "../../feature/patients/dashboard/DashboardHeading";

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined);
  const [editMode,setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Patient[]>("https://localhost:5001/api/patients")
      .then(response => setPatients(response.data))
  }, []);

  const handleSelectPatient = (id: string) =>{
    setSelectedPatient(patients.find(x=>x.id ===id));

  }

  const handleCancelSelectPatient = () =>{
    setSelectedPatient(undefined);
  }

  const handleOpenForm = (id?: string) =>{
    if(id) handleSelectPatient(id);
    else handleCancelSelectPatient();
    setEditMode(true);
  } 

  const handleFormClose = ()=>{
    setEditMode(false);
  }

  const handleSubmitForm = (patient: Patient)=>{
    if(patient.id){
      setPatients(patients.map(p => p.id === patient.id ? patient : p))
    } else {
      const newPatient = {...patient, id: patients.length.toString()}
      setSelectedPatient(newPatient);
      setPatients([...patients, newPatient])

    }
  
    setEditMode(false);
  }

  const handleDelete= (id: string)=>{
    setPatients(patients.filter(x => x.id !== id))
  }
  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
    <CssBaseline/>
      <NavBar/>
      <SearchBar openForm={handleOpenForm}/>
      <DashboardHeading/>
      <Container maxWidth='xl' sx={{mt:3}} >
        <PatientDashboard patients={patients}
         selectPatient={handleSelectPatient}
         cancelSelectPatient={handleCancelSelectPatient}
         selectedPatient={selectedPatient}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        submitForm = {handleSubmitForm}
        deletePatient ={handleDelete}
        />
    </Container>
    </Box>
  );
}

export default App;
