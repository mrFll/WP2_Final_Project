// react
import React ,{Component} from 'react';
import kaashaneeLogo from '../rec/kaashaane.jpg';
import PropTypes from 'prop-types';
// material-ui/ core components
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Input from "@material-ui/core/es/Input/Input";
import Button from '@material-ui/core/Button';
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import {createMuiTheme, withStyles} from "@material-ui/core/styles/index";
import Typography from "@material-ui/core/es/Typography/Typography";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fafafa',
            main: '#ff7915',
            dark: '#ba5d15',
            contrastText: '#fff',
        },
    },
});

const styles = {
    root: {
        flexGrow: 1,
        marginBottom: '10px'
    },
    flex: {
        flexGrow: 1,
    },
    avatar:{
        width: 60,
        height: 60,
        margin: '5px'
    }
};



class searchPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            destination: '',
            checkIn: '',
            checkOut: '',
            guestNumb: ''
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    getSearchData = () =>{

        // TODO check inputs
        // object of data that should be send to server
        let data = {
            destination: this.state.destination,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            guestNumb: this.state.guestNumb
        };


        //TODO add route for fetch
        fetch('http://localhost:4000/search/' ,{
            body: JSON.stringify(data),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        })
            .then((response) => {
                console.log(response);
            });

        // change route to show houses
        this.props.history.push('/houses');
    };

    render(){
        const { classes } = this.props;
        return(
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Avatar alt="Remy Sharp" src={kaashaneeLogo} className={classes.avatar} />
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Kaashaane
                            </Typography>
                            <Button color="inherit"
                                    onClick={() =>{this.props.history.push('/login')}}>
                                Login</Button>
                            <Button color="inherit"
                                    onClick={() => {this.props.history.push('/signup')}}>
                                Sign up</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                {
                    // inputs
                }
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                    <Grid item xs={12} sm={8} md={5}>
                        <Paper>
                        <div style={{padding: '10px'}}>
                            <Grid container spacing={24}>
                                {
                                    // destination name
                                }
                                <Grid item xs={12}>
                                    <TextField
                                        id="City"
                                        label="City"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('destination')}
                                    />
                                </Grid>

                                {
                                    // check in
                                }
                                <Grid item xs={6}>
                                    <TextField
                                        id="checkIn"
                                        label="Check in"
                                        type="date"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('checkIn')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>

                                {
                                    // check out
                                }
                                <Grid item xs={6}>
                                    <TextField
                                        id="checkOut"
                                        label="Check out"
                                        type="date"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('checkOut')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>


                                {
                                    // guest number
                                }
                                <Grid item xs={12}>
                                    <Input
                                        id="guestNumber"
                                        label="Guest number"
                                        type="number"
                                        endAdornment={<InputAdornment position="end">person</InputAdornment>}
                                        inputProps={{
                                            'aria-label': 'Weight',
                                        }}
                                        fullWidth
                                        onChange={this.handleChange('guestNumb')}
                                    />
                                    <FormHelperText id="weight-helper-text">Guest number</FormHelperText>
                                </Grid>

                                {
                                    // Search button
                                }
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.getSearchData}
                                        fullWidth>
                                        Search</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

searchPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(searchPage);