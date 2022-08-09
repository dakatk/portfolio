import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Menu, 
  MenuItem, 
  Box, 
  Button 
} from '@mui/material';
import './MainMenu.css';

function MainMenu(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const menuBarItem = (menuItem, key) => {
    return (
      <Button 
        id={menuItem.id + '-nav-button'}
        key={key}
        onClick={() => {navigate(menuItem.route)}}
        sx={{ color: '#fff' }}
      >
        {menuItem.title}
      </Button>
    )
  }

  const menuBarItemWithSubMenu = (menuItem, key) => {
    const buttonId = menuItem.id + '-subnav-button';
    const menuId = menuItem.id + 'sub-menu';
    const open = anchorEl?.textContent === menuItem.title;

    return (
      <Box sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
        <Button 
          id={buttonId}
          key={key + 'sub'} 
          onClick={handleOpenMenu}
          sx={{ color: '#fff' }}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {menuItem.title}
        </Button>
        <Menu
          id={menuId}
          MenuListProps={{
            'aria-labelledby': buttonId,
          }}
          anchorEl={anchorEl}
          onClose={handleCloseMenu}
          open={open}
        >
          {menuItem.submenu.map((subitem, index) => 
            <MenuItem 
              key={buttonId + '-' + index} 
              onClick={() => {
                navigate(menuItem.route + subitem.route)
              }}
            >
              {subitem.title}
            </MenuItem>
          )}
        </Menu>
      </Box>
    )
  }

  const menuBar = (menuItems) => {
    return (
      <Box sx={{ display: { xs: 'none', sm: 'block',  } }}>
        {menuItems.map((item, index) => {
          return !item.submenu ? 
            menuBarItem(item, index) : 
            menuBarItemWithSubMenu(item, index);
        })}
      </Box>
    )
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {menuBar(props.items)}
      </Toolbar>
    </AppBar>
  )
}

export default MainMenu;