import {
  Box,
  AppBar,
  Toolbar,
  Container,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Menu,
  Tooltip,
} from "@mui/material";
import Logo from "/Logo-s.png";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #3E691C 0%, #84AC54 69%, #8D482C 89%)",
        }}
      >
        <Container maxWidth="xl" sx={{mt:2}}>
          <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: "flex", gap: 2, ml:-5}}>
                <img src={Logo} width="35px" />
                <Typography variant="h4" fontWeight="bold">
                  Renalyze
                </Typography>
              </MenuItem>
            </Box>
            <Box>
              <MenuItem sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Patient Search
              </MenuItem>
            </Box>
            <Box>
              <MenuItem sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Dialysis List
              </MenuItem>
            </Box>
            <Box>
              <MenuItem sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Inpatient List
              </MenuItem>
            </Box>
            <Box>
              <MenuItem sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Reports
              </MenuItem>
            </Box>
            <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
            //   anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
               open={Boolean()}
            //  onClose={}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
