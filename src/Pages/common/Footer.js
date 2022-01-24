import  React from 'react';
import { connect } from 'react-redux';

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

class Footer extends React.Component {
    render() {
        return(
            <div className="col-md-12" style={{paddingTop:'10px',background: '#111'}}>
                <div className="col-md-1"></div>
                <div className='col-md-10' style={{paddingLeft:'0px',paddingRight:'0px'}}>
                    <div className='col-md-12'style={{paddingLeft:'0px',paddingRight:'0px'}}>
                        <div className='col-md-3'style={{paddingLeft:'0px',paddingRight:'0px'}}>
                            <span style={{color:'#d9d9d9',fontSize:'15px'}}>worthWatch</span>
                            <p style={{color:'#999999',paddingTop:'5px'}}>An effort to answer ordinary question, like, Next Watch? Idea is to help your sort out your watchlist.</p>
                        </div>
                        <div className='col-md-3'>
                            <span style={{color:'#d9d9d9'}}>CONNECT</span>
                            <div className='col-md-12' style={{padding:'0px',paddingTop:'5px'}}>
                                <span style={{paddingRight:'10px'}}><FacebookIcon style={{color:'white'}}/></span>
                                <span style={{paddingRight:'10px'}}><TwitterIcon style={{color:'white'}}/></span>
                                <InstagramIcon style={{color:'white'}}/>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <span style={{color:'#d9d9d9'}}>BLOG</span>
                        </div>
                        <div className='col-md-3'>
                            <span style={{color:'#d9d9d9'}}>COMPANY</span>
                            {/* <span>About Us</span> */}
                        </div>
                    </div>
                    <div className='col-md-12' style={{paddingLeft:'0px',paddingRight:'0px'}}>
                        <hr style={{color: '#d9d9d9',height: 1}}/>
                        <div className='col-md-12' style={{color: '#d9d9d9'}}>
                            © 2022 Worth Watch Inc. Ltd. All rights reserved
                        </div>  
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default connect()(Footer);