import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListItemButton, Menu } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './estreno.style.module.css';

export default function AlignItemsList({data}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    <ListItemButton  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <ListItemAvatar>
        <FontAwesomeIcon icon={faBell } size="2x" style={{color: "#f7f7f7",}} />
        </ListItemAvatar>
        
    </ListItemButton>
    <Menu 
     id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        
        }}>
    
    <List sx={{ width: '100%', maxWidth:" 30rem", }}>
     
        {
            data?.map((element)=>(
                <>
                 <ListItem alignItems="flex-start" className={styles.listItem} key={element.id}>
                <ListItemAvatar>
                <Avatar alt="imagen de una pelicula" src={element.poster} />
                </ListItemAvatar>
                <ListItemText
                primary="Estreno"
                secondary={
                <React.Fragment>
                <Typography
                sx={{ display: 'inline', color:"white" }}
                component="h2"
                variant="body2"
                color="white"
                >{element.title} 
                </Typography>
                <Typography  
                component="h4"
                variant="body3"
                color="white">{element.lanzamiento}</Typography>
             
                </React.Fragment>
                }/>
                
             </ListItem>
            <Divider variant="fullWidth" component="li" />
                </>
                
            

            ))
        }
   
    </List>
    </Menu>
    </div>
  );
}