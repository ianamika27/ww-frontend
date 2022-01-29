import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Paper, Typography, TextField, Button, Stack, InputAdornment} from '@mui/material';

import Header from './common/Header';
import Footer from './common/Footer';
import Dashboard from './Dashboard';

class Homepage extends React.Component {
    componentDidMount() {
        //this.props.getUsers();
    }

    handleDeleteUser(id) {
        //return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user } = this.props;
        console.log("user header", user)
        
        return (
            <div className="col-md-12 col-md-offset-0" style={{'padding':'0px',height:'100vh',background: '#fff'}}>
                <Header/>
                <div className='col-md-12 maincontainer' style={{height:''}}>
                    <div className='col-md-1'></div>
                    <div className='col-md-10' style={{border:'0px solid red',height:''}}>
                        <Grid container spacing={0} style={{border:'1px solid #ff66ff'}}>
                            <Grid item xs={12} style={{border:'1px solid yellow'}}>
                                <h4>Currently Watching</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={12} style={{border:'1px solid yellow'}}>
                                <h4>Netflix Recent Release</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={12} style={{border:'1px solid yellow'}}>
                                <h4>Amazon Prime Recent Release</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={12} style={{border:'1px solid yellow'}}>
                                <h4>Hotstar Recent Release</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 1</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 2</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 3</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 4</h4>
                            </Grid>
                            <Grid item xs={12} style={{border:'1px solid yellow'}}>
                                <h4>Zee5 Recent Release</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 1</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 2</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 3</h4>
                            </Grid>
                            <Grid item xs={3} style={{border:'1px solid yellow'}}>
                                <h4>Shows 4</h4>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='col-md-1'>{user.user.email}</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapState(state) {
    console.log('homepage state ');console.log(state)
    const {  authentication } = state;
    console.log('homepage authentication ');console.log(authentication)
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    
}

export default connect(mapState, actionCreators)(Homepage);