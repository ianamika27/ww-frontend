import React from 'react';
import { connect } from 'react-redux';

import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

const buttonStyle = {marginBottom:'10px'}
const paperStyle = { padding: '20px 20px', width: 500, margin: "20px auto" }
const typographyStyle = {fontSize:'14px',justifyContent: 'center',alignItems: 'center'}

import { userActions } from '../../_actions';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user:{
                name:'',
                email: '',
                password: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.email && user.password) {
            this.props.register(user);
        }
    }
    
    render() {

        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
           <div>
               <Grid style={{backgroundColor:'#DDDDDD',height:'100vh'}}>
                    <span style={{padding:'40px',fontSize:'20px'}} ><b>worthWatch</b></span>
                    <Paper elevation={20} style={paperStyle}>
                    <h4 style={{margin:'15px'}}>Discover & Watch More</h4>
                    <Typography variant='caption' gutterBottom style={typographyStyle}>Sign up to see what your friends are watching, get show recommendations,
    and join the world’s largest community of watching. </Typography>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <TextField fullWidth label='Username' placeholder="Enter your username" name="name" value={user.name} onChange={this.handleChange} style={{marginBottom:'10px'}}/>
                        <TextField fullWidth label='Email Address' placeholder="Enter your emailaddress" name="email" value={user.email} onChange={this.handleChange} style={{marginBottom:'10px'}}/>
                        <TextField fullWidth type="password" label='Password' placeholder="Enter your password" name="password" value={user.password} onChange={this.handleChange} style={{marginBottom:'10px'}}/>
                        <Button type='submit' fullWidth variant='contained' color='primary' style={buttonStyle}>Sign up With Email</Button>
                    </form>
                    <Button
                        type="submit"
                        name="google"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={(ev) => this.props.loginOAuthGoogle()}
                        style={buttonStyle}
                    >
                        Sign Up With Google
                    </Button>
                    <Button
                        type="button"
                        name="facebook"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={(ev) => this.props.loginOAuthFacebook()}
                        style={buttonStyle}
                    >
                        Sign up With Facebook
                    </Button>
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
    console.log('state signup');
    console.log(state)
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register,
    loginOAuthGoogle: userActions.loginOAuthGoogle,
    loginOAuthFacebook: userActions.loginOAuthFacebook
};

export default connect(mapState,actionCreators)(SignUp);