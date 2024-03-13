import { Grid, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { LogoutOutlined } from '@mui/icons-material';

import { useAuthStore } from '../../../hooks';

export const ToolbarDrawer = ({ open, handleDrawerOpen }) => {

  const { startLogout } = useAuthStore();

  return (
    <Toolbar>
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          ShoesPlay
        </Typography>

        <IconButton color="error" onClick={startLogout}>
          <LogoutOutlined />
        </IconButton>
      </Grid>
    </Toolbar>
  )
}
