import React from 'react';
import { connect } from 'react-redux';

import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

import { userActions } from '../../_actions';

const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto"}
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const marginTop = { marginTop: 5 }
const typographyStyle = {fontSize:'20px',justifyContent: 'center',alignItems: 'center'}

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {

        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;

        return(
            <Grid style={{backgroundColor:'#DDDDDD',height:'100vh'}}>
                <span style={{padding:'40px',fontSize:'20px'}} >worthWatch</span>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>   
                    </Grid>
                    <Typography variant='caption' gutterBottom style={typographyStyle}>Sign in to worthWatch </Typography>
                    

                    <form name="form" onSubmit={this.handleSubmit}>
                        <TextField fullWidth label='Email Address' placeholder="Enter your email address" name="email" value={email}  onChange={this.handleChange} style={{marginTop:'10px'}} />
                        <TextField fullWidth label='Password' placeholder="Enter your password" name="password" type="password" value={password} onChange={this.handleChange} style={{marginTop:'10px'}}/>
                        <Button type='submit' fullWidth variant='contained' color='primary' style={{marginTop:'10px'}}>Sign In with Email</Button>
                        
                    </form>
                    <Button
                        type="submit"
                        name="google"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop:'10px'}}
                        onClick={(ev) => this.props.loginOAuthGoogle()}
                        >
                        Sign in With Google
                    </Button>
                    <Button 
                        name="facebook"
                        type="button" 
                        fullWidth 
                        variant="contained" 
                        color="primary" 
                        style={{marginTop:'10px'}}
                        onClick={(ev) => this.props.loginOAuthFacebook()}
                    >
                        Sign in with Facebook
                    </Button>
                    <hr style={{color: 'grey',backgroundColor: 'grey',height: 1}}/>
                    <span>Not a member? <a href='/register' >Sign Up</a></span>
                </Paper>
            </Grid>
        )
    }
}

function mapState(state) {
    console.log('state login');
    console.log(state)
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    loginOAuthGoogle: userActions.loginOAuthGoogle,
    loginOAuthFacebook: userActions.loginOAuthFacebook,
    logout: userActions.logout
};

export default connect(mapState, actionCreators)(SignIn);