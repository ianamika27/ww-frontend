import React from 'react';
import { connect } from 'react-redux';

import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

import { userActions } from '../../_actions';

const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto"}
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const marginTop = { marginTop: 5 }
const typographyStyle = {fontSize:'20px',justifyContent: 'center',alignItems: 'center'}

class EmailSignIn extends React.Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
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
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return(
            <Grid style={{backgroundColor:'#e6f5ff',height:'100vh'}}>
                <span style={{padding:'40px',fontSize:'20px'}} >worthWatch</span>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>   
                    </Grid>
                    <Typography variant='caption' gutterBottom style={typographyStyle}>Sign in to worthWatch </Typography>
                    

                    <form name="form" onSubmit={this.handleSubmit}>
                        <TextField fullWidth label='Name' placeholder="Enter your username" name="username" value={username} onChange={this.handleChange}/>
                        <TextField fullWidth label='Password' placeholder="Enter your password" name="password" type="password" value={password} onChange={this.handleChange}/>
                        <Button type='submit' variant='contained' color='primary' style={{marginTop:'10px'}}>Sign In</Button>
                        
                    </form>
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
    logout: userActions.logout
};

export default connect(mapState, actionCreators)(EmailSignIn);