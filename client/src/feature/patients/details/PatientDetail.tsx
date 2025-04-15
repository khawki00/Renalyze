import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Avatar from '/avatar.png'
type Props = {
  patient: Patient;
  cancelSelectPatient: () => void;
  openForm: (id: string) => void;
};
export default function PatientDetail({ patient, cancelSelectPatient, openForm }: Props) {
  return (
    <Card sx={{ borderRadius: 1 }}>
      <CardMedia component="img" src={Avatar} sx={{height:"300px",width:'610px'}} />

      <CardContent>
        <Typography variant="h5">{patient.email}</Typography>
        <Typography variant="h5">{patient.phone}</Typography>
        <Typography variant="h5">{patient.address}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>openForm(patient.id)} color="primary">Edit</Button>
        <Button onClick={cancelSelectPatient} color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  );
}
