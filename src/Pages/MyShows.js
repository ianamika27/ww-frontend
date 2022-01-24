import  React from 'react';
import { connect } from 'react-redux';

import { Grid, Paper, Typography, TextField, Button, Stack, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';

import Header from './common/Header';
import Footer from './common/Footer';

import { searchActions } from '../_actions';

class MyShows extends React.Component {

    constructor(props) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            searchkeyword: '',
            searchResult:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        
    }

    handleChange(e) {
        const { name, value } = e.target;
        // console.log(name, value )
        this.setState({ [name]: value });
    }

    handleSearch(e) {
        e.preventDefault();
        // this.setState({ submitted: true });
        
        const { searchkeyword } = this.state;
        // console.log(searchkeyword)
        if (searchkeyword) {
            this.props.search(searchkeyword);
        }
        // console.log('searching')
    }

    render() {

        const { searchkeyword,searchResult } = this.props;

        return(
            <div>
                <div className="col-md-12 col-md-offset-0" style={{'padding':'0px',height:'100vh',background: '#fff'}}>
                <Header/>
                <div className='col-md-12 maincontainer' style={{height:''}}>
                    <div className='col-md-1'></div>
                    <div className='col-md-10' style={{border:'0px solid red',height:''}}>
                        <Grid container spacing={0} style={{border:'0px solid #ff66ff'}}>
                            <Grid item xs={2} style={{border:'0px solid yellow'}}>
                                <h4>My Shows</h4>
                            </Grid>
                            <Grid item xs={2} style={{border:'0px solid green',paddingLeft:'0px',paddingRight:'0px'}}></Grid>
                            <Grid item xs={3} style={{border:'0px solid blue'}}>
                                <TextField id="standard-basic" label="Search" variant="standard" style={{width:'280px'}} name="searchkeyword" value={searchkeyword} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={5} style={{border:'0px solid blue',paddingTop:'13px'}}>
                                <Button variant="text" size="medium" onClick={this.handleSearch}><SearchIcon/></Button>
                                <Button size="medium">Settings</Button>
                                <Button size="medium">Statistics</Button>
                                <Button size="medium">Print</Button>
                                <span>|</span>
                                <Button size="medium"><GridViewIcon/></Button>
                                <Button size="medium"><ListIcon/></Button>
                            </Grid>
                            <Grid item xs={12} style={{border:'0px solid blue'}}>
                                <hr style={{color: 'blue',backgroundColor: 'grey',height: 1}}/>
                            </Grid>
                            <Grid item xs={2} style={{border:'0px solid blue'}}>
                                <h5>Playlist</h5>
                                <Stack spacing={2} style={{paddingLeft:'0px'}}>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px'}}>All</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Watched</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Currently Watching</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Want to Watch</Button>
                                </Stack>
                                <Button type='submit' variant='contained' color='primary' style={{marginTop:'10px'}}>Add Category</Button>
                                <hr style={{color: 'blue',backgroundColor: 'grey',height: 1}}/>
                                <h5>Your Watching Activity</h5>
                                <Stack spacing={2} style={{paddingLeft:'0px'}}>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px'}}>Review Draft</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Note & Highlights</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Binge Watch</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Shows in Year</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Watching Stats</Button>
                                </Stack>
                                <hr style={{color: 'blue',backgroundColor: 'grey',height: 1}}/>
                                <h5>Others</h5>
                                <Stack spacing={2} style={{paddingLeft:'0px'}}>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px'}}>Recommendations</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Explore</Button>
                                </Stack>
                                <hr style={{color: 'blue',backgroundColor: 'grey',height: 1}}/>
                                <h5>Tools</h5>
                                <Stack spacing={2} style={{paddingLeft:'0px'}}>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px'}}>Owned Shows</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Find Similar</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Widgets</Button>
                                    <Button size="medium" style={{justifyContent: 'left', paddingTop:'1px',paddingBottom:'2px',paddingLeft:'0px',marginTop:'0px'}}>Import & Export</Button>
                                </Stack>    
                            </Grid>
                            <Grid item xs={10} style={{border:'1px solid grey'}}>
                                    {searchResult && searchResult.body}
                            </Grid>
                        </Grid>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <Footer/>
                </div>
                
            </div>
        )
    }
}

function mapState(state) {
    console.log('state myshows');
    console.log(state)
    const { searchkeyword , searchResult} = state;
    return { searchkeyword , searchResult };
}

const actionCreators = {
    search: searchActions.search
};

export default connect(mapState,actionCreators)(MyShows);