import { Card, CardContent, Typography, Box, Grid2, Container } from "@mui/material";

export default function DashboardHeading() {
  return (
    <Container maxWidth='xl'>
    <Grid2 container>
     <Grid2 size={7}>

    <Card sx={{ borderRadius: 1}}>
      <CardContent sx={{pb:0}}>
        
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
        Patient
        </Typography>
          <Typography variant="h6">
            Provider
          </Typography>
          <Typography variant="h6">
          MRN
          </Typography>
        
        </Box>
      </CardContent>
    </Card>
    </Grid2>
    </Grid2>
    </Container>

  )
}