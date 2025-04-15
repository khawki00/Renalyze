import { Grid2 } from "@mui/material";
import PatientList from "./PatientList";
import PatientDetail from "../details/PatientDetail";
import PatientForm from "../details/form/PatientForm";

type Props = {
  patients: Patient[];
  selectPatient: (id: string) => void;
  cancelSelectPatient: () => void;
  selectedPatient?: Patient;
  openForm: (id: string) => void;
  closeForm: ()=> void;
  editMode:boolean
  submitForm:(patient: Patient) => void
  deletePatient: (id: string) => void
};
export default function PatientDashboard({ patients, deletePatient, selectPatient, cancelSelectPatient, selectedPatient, openForm, closeForm, editMode, submitForm }: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <PatientList patients={patients} 
          selectPatient={selectPatient}
          deletePatient={deletePatient}/>
      </Grid2>

      <Grid2 size={5}>
          {selectedPatient && !editMode &&
          <PatientDetail patient={selectedPatient}
            cancelSelectPatient={cancelSelectPatient}
            openForm = {openForm}
          
          />}
          {editMode && <PatientForm closeForm={closeForm} patient={selectedPatient} submitForm={submitForm}/>}
    
      </Grid2>
    </Grid2>
  );
}
