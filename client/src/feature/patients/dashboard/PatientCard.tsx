import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

type Props = {
  patient: Patient;
  selectPatient: (id:string) => void;
  deletePatient: (id:string) => void;
};
export default function PatientCard({ patient, selectPatient, deletePatient }: Props) {
  return (
    <Card sx={{ borderRadius: 1 }}>
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="h6">
          <Button  onClick={()=> selectPatient(patient.id)}
            variant="text" sx={{':hover':{bgcolor:'white',},fontSize:'20px', padding:0}}>{patient.lastName + "," + patient.firstName}</Button>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "text.secondary" }}>
            {patient.birthday}
          </Typography>
          <Typography sx={{ color: "text.secondary", mr: 12 }}>
            {patient.primaryProvider}
          </Typography>
          <Typography variant="subtitle1">
            {patient.medicalRecordNumber}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ gap: 1 }}>
        <InsertInvitationIcon />
        <Button onClick={() => deletePatient(patient.id)} variant='text' sx={{':hover':{bgcolor:'white'}}}>
          Add Sign Out
        </Button>
      </CardActions>
    </Card>
  );
}
