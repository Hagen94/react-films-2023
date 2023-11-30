
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCopy from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { UseAuth } from '../../../auth/hook/use_auth';


export default function IconMenu() {
    const { logOut } = UseAuth();
  return (
    <Paper sx={{ width: 250, maxWidth: '100%', color: "white" , backgroundColor:"black"}}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <EditIcon fontSize="large" style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText>Administrar perfiles</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsIcon fontSize="large" style={{color:"white"}} />
          </ListItemIcon>
          <ListItemText>Transferir perfil</ListItemText>
          
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonOutlineIcon fontSize="large" style={{color:"white"}} />
          </ListItemIcon>
          <ListItemText>Cuenta</ListItemText>
         
        </MenuItem>
       
        <MenuItem>
          <ListItemIcon>
            <HelpOutlineIcon fontSize="large" style={{color:"white"}} />
          </ListItemIcon>
          <ListItemText>Centro de ayuda</ListItemText>
        </MenuItem> 
        <Divider />
        <MenuItem onClick={logOut}>
            Cerrar sesion en Netflix
        </MenuItem>
      </MenuList>
    </Paper>
  );
}