
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconMenu from './components/menu_item';
import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <ListItemButton  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <ListItemAvatar>
            <Avatar
          
            alt="avatar"
            src="https://i.pravatar.cc/100?img=10"
            />
        </ListItemAvatar>
        
    </ListItemButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          style: {
            color: "white",
            backgroundColor:"black",
            
          }
        }}
      >
      <List dense sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItemButton>
        <ListItemAvatar>
            <Avatar
          
            alt="avatar"
            src="https://i.pravatar.cc/100?img=3"
            />
        </ListItemAvatar>
        <ListItemText>Netflix</ListItemText>
    </ListItemButton>
    <ListItemButton>
        <ListItemAvatar>
            <Avatar
            alt="avatar"
            src="https://i.pravatar.cc/100?img=1"
            />
        </ListItemAvatar>
        <ListItemText>Netflix</ListItemText>
    </ListItemButton>
    <ListItemButton>
        <ListItemAvatar>
            <Avatar
            alt="avatar"
            src="https://i.pravatar.cc/100?img="
            />
        </ListItemAvatar>
        <ListItemText>Netflix</ListItemText>
    </ListItemButton>

    </List>

        <IconMenu></IconMenu>
      </Menu>
    </div>
  );
}