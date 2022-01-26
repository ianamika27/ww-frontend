import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Paper, Button, Typography } from '@mui/material';

const buttonStyle = {marginBottom:'10px'}
const paperStyle = { padding: '20px 20px', width: 500, margin: "20px auto" }
const typographyStyle = {fontSize:'14px',justifyContent: 'center',alignItems: 'center'}

import { userActions } from '../_actions';

class Landingpage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loggingIn: false
        };
    }

    
    render() {

        const { loggingIn } = this.props;

        return (
           <div>
               <Grid style={{backgroundColor:'#DDDDDD',height:'100vh'}}>
                    <span style={{padding:'40px',fontSize:'20px'}} ><b>worthWatch</b></span>
                    <Paper elevation={20} style={paperStyle}>
                    <h4 style={{margin:'15px'}}>Discover & Watch More</h4>
                    <Button
                        type="submit"
                        name="google"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={(ev) => this.props.loginOAuthGoogle()}
                        style={buttonStyle}
                    >
                        Sign in With Google
                    </Button>
                        <Button fullWidth variant="outlined" size="medium" style={buttonStyle}>Continue with Facebook</Button>
                        <Button component={Link} to="/register" fullWidth variant="outlined" size="medium" style={buttonStyle}>Sign up with email</Button>
                        <Typography variant='caption' gutterBottom style={typographyStyle}>By creating an account, you agree to the worthWatch <a href='#'>Terms of Service</a> and <a href="#">Privacy Policy</a>.</Typography>
                        <hr style={{backgroundColor: 'grey',height: 1 }}/>
                        <span>Already a member? <a href='/login'>Sign In</a></span>
                    </Paper>
                </Grid>
           </div>
       )
    }
}

function mapState(state) {
    console.log('state landing');
    console.log(state)
    // const { loggingIn } = state.authentication;
    return {  
        loggingIn: state.authentication.loggingIn,
        user: state.authentication.user
    };
}

const actionCreators = {
    loginOAuthGoogle: userActions.loginOAuthGoogle
    
};

export default connect(mapState,actionCreators)(Landingpage);