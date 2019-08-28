import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Container from '@material-ui/core/Container';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import utama from './pages/utama'
import slotA from './pages/slotA'
import slotB from './pages/slotB'
import slotC from './pages/slotC'
import slotD from './pages/slotD'
import { useAuthState } from 'react-firebase-hooks/auth';
import Firebase from "./firebase"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
   stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  content:{
    flexGrow:1,
    marginLeft:'30px',
    marginTop:'30px'
  }
}));

 const App = function() {
    
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  const [user, initialising, error] = useAuthState(Firebase.auth);

 
  function handleChange(event, newValue) {
    setValue(newValue);
  }
if (initialising) {
  console.log(initialising)
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
else{
  console.log(initialising)
  return (
     <BrowserRouter>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
             <Typography variant="h6" className={classes.title}>
            Asset Tracker
          </Typography>
         
        </Toolbar>
      </AppBar>

<main >
 
   
      <Switch>
        <Route exact path="/" component={utama}/>
        <Route exact path="/slota" component={slotA}/>
        <Route exact path="/slotB" component={slotB}/>
        <Route exact path="/slotC" component={slotC}/>
        <Route exact path="/slotD" component={slotD}/>

      </Switch>
    
  
</main>

       <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
      <BottomNavigationAction component={Link} to={'/'} label="Home" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction component={Link} to={'/slota'} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction component={Link} to={'/slotB'} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction component={Link} to={'/slotC'} label="Folder" value="folder" icon={<Icon>folder</Icon>} />
    </BottomNavigation>
    </div>
    </BrowserRouter>
  );
}

}

ReactDOM.render(<App />, document.getElementById('root'));
