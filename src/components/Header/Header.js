import './Header.css'
import React, { Component } from 'react';
import { TextField } from '@mui/material';

class Header extends Component {
    render() {
        return (
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                home
                about
            </div>
        );
    }
}

export default Header;
