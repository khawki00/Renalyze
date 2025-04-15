import PatientCard from "./PatientCard";
import { Box } from "@mui/material";
type Props = {
  patients: Patient[];
  selectPatient: (id:string) => void;
  deletePatient: (id:string) => void;
};
export default function PatientList({ patients, deletePatient, selectPatient }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient}
            selectPatient={selectPatient}  
            deletePatient={deletePatient}
        />
      ))}
    </Box>
  );
}
