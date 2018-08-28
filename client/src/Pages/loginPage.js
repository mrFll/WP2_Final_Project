import React ,{Component} from 'react';

// material-ui core
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import TextField from "@material-ui/core/es/TextField/TextField";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

// material-ui icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "@material-ui/core/es/Button/Button";


export default class loginPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            result: null
        };
    }

    /**
     * change the state when the username or password field changed
     */
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    /**
     * invert password field to show or not show password characters
     */
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    /**
     * send email and password fields in state to back server
     */
    submitLogin = () =>{

        // TODO check inputs
        // object of data that should be send to server
        const data = {
            email: this.state.email,
            password: this.state.password
        };


        //TODO add route for fetch

        fetch('http://localhost:4000/signin' ,{
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
            ContentType: 'application/json',
           }
        }).then((response) => {
            console.log(response);
            // TODO handle response from API
        }).catch((err) => {
            console.log("----ERR---");
            console.error(err);
        });


        // change route to root route
        this.props.history.push('/');
    };


    render(){
        return(
            <div style={{paddingTop: '30%'}}>
                <Grid  container
                       direction="row"
                       justify="center"
                       alignItems="center">
                    {
                        // login input
                    }
                    <Grid item xs={12} sm={8}>
                        <Paper>
                        <div style={{padding: '10px'}}>
                            <Grid container spacing={24}>
                                {
                                    // Email
                                }
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        required
                                        onChange={this.handleChange('email')}
                                    />
                                </Grid>

                                {
                                    // Password
                                }
                                <Grid item xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input
                                            id="password"
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            value={this.state.password}
                                            onChange={this.handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowPassword}
                                                        onMouseDown={this.handleMouseDownPassword}
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Grid>

                                {
                                    // submit button
                                }
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        onClick={this.submitLogin}
                                    >Login</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}