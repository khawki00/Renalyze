import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

type Props = {
  openForm: () => void;

}

export default function SearchBar({openForm}: Props) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, marginTop: 2, marginTrim: 2 }}>
        <Typography variant="h5" fontWeight="semibold">
          Inpatient List
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 1, md: 2 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">
                All Providers
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Age"
                //   onChange={''}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 1, md: 2 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">
                All Locations
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Age"
                //   onChange={''}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 1, md: 2 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">Need to...</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Age"
                //   onChange={''}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 1, md: 1 }}>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
              />
            </FormControl>
          </Grid>
          <Grid size={{ xs: 1, md: 1 }}>
            <Button>Reassign Provider</Button>
          </Grid>
          <Grid size={{ xs: 1, md: 1 }}>
            <Button size="medium" variant='outlined' color="success"
             onClick={openForm}
            >Add Patient</Button>
          </Grid>
        </Grid>

        <Typography variant="h5" fontWeight="semibold" sx={{mb:2}}>
          Atrium Health Union IP (65)
        </Typography>
      </Box>
    </Container>
  );
}
