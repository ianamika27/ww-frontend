import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

import { Grid, Paper, Button, TextField, Typography } from '@mui/material';


const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto"}
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const marginTop = { marginTop: 5 }
const typographyStyle = {fontSize:'12px',justifyContent: 'center',alignItems: 'center'}


class EmailSignup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                emailaddress: '',
                password: '',
                confirmpassword: ''
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
        if (user.username && user.emailaddress && user.password && user.confirmpassword) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <Grid style={{backgroundColor:'#DDDDDD',height:'100vh'}}>
                <span style={{padding:'40px',fontSize:'20px'}} >worthWatch</span>
                <Paper elevation={10} style={paperStyle}>
                    <h4>Sign up for worthWatch</h4>
                    <Typography variant='caption' gutterBottom style={typographyStyle}>Sign up to see what your friends are watching, get show recommendations,
    and join the world’s largest community of watching. </Typography>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <TextField fullWidth label='Username' placeholder="Enter your username" name="username" value={user.username} onChange={this.handleChange}/>
                        <TextField fullWidth label='Email Address' placeholder="Enter your emailaddress" name="emailaddress" value={user.emailaddress} onChange={this.handleChange}/>
                        <TextField fullWidth type="password" label='Password' placeholder="Enter your password" name="password" value={user.password} onChange={this.handleChange}/>
                        <TextField fullWidth type="password" label='Confirm Password' placeholder="Enter your confirm password" name="confirmpassword" value={user.confirmpassword} onChange={this.handleChange}/>
                        <Button type='submit' variant='contained' color='primary' style={{marginTop:'10px'}}>Sign Up</Button>
                    </form>
                    <hr style={{color: 'grey',backgroundColor: 'grey',height: 1}}/>
                    <span>Already a member? <a href='/login' >Sign In</a></span>
                </Paper>
            </Grid>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

export default connect(mapState, actionCreators)(EmailSignup);
