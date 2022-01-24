import  React from 'react';
import { connect } from 'react-redux';

import { AppBar, Box, Typography, Button, Menu, MenuItem,Toolbar,IconButton, Link} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


import { userActions } from '../../_actions';
import Dashboard from '../Dashboard';
import MyShows from '../MyShows';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          condition: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(condition) {
        console.log('condition ',condition)
        this.setState( {condition} )
    }

    state = {
        auth: true,
        anchorEl: null,
        anchorOriginVertical: 'bottom',
        anchorOriginHorizontal: 'right',
        transformOriginVertical: 'top',
        transformOriginHorizontal: 'right',
        anchorReference: 'anchorEl',
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };
    
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        this.props.logout();
    };

    

    render() {
        
        const { loggingIn } = this.props;
        
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const { condition } = this.state;
        
        return(
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="default" style={{ background: '#e6f2ff' }}>
                    <Toolbar>
                        <Typography variant="h4" color="inherit">worthWatch</Typography>
                        <Link href="/homepage" style={{textDecoration: "none", color: "white", marginRight: '20px', display: 'flex'}}><Button variant="text" size="medium" style={{fontSize:'15px'}}>Home</Button></Link>
                        <Link href="/myshows" style={{textDecoration: "none", color: "white", marginRight: '20px', display: 'flex'}}><Button variant="text" size="medium" style={{fontSize:'15px'}}>My Shows</Button></Link>
                        <Link href="/" style={{textDecoration: "none", color: "white", marginRight: '20px', display: 'flex'}}><Button variant="text" size="medium" style={{fontSize:'15px'}}>Browse</Button></Link>
                        
                        <div style={{marginLeft: "auto",marginRight: -11}}>
                        
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                                color="default"
                                style={{}}
                            >
                            <AccountCircle style={{width:40,height:40}}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                open={open}
                                onClose={this.handleClose}
                            >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>    
                    </Toolbar>
                    </AppBar>
                </Box>    
            </div>
        )
    }
}

function mapState(state) {
    // console.log('state header');
    // console.log(state)
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    logout: userActions.logout
};

export default connect(mapState, actionCreators)(Header);