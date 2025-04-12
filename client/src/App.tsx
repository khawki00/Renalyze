import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    axios.get<Patient[]>("https://localhost:5001/api/patients")
      .then(response => setPatients(response.data))
  }, []);
  return (
    <>
      <Typography variant="h3">Renalyze</Typography>
      <List>
        {patients.map((patient) => (
          <ListItem key={patient.id}>
            <ListItemText>{patient.firstName + " " + patient.lastName}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
