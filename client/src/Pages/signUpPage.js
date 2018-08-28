import React ,{Component} from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";

export default class signUpPage extends Component{


    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            rePassword: ''
        }
    }
    submitLogin = () =>{

        // TODO check inputs
        // object of data that should be send to server
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
        };


        //TODO add route for fetch
        fetch('http://localhost:4000/signup/' ,{
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors',
        }).then((response) => {
                console.log(response);
            });

        // change route to login page
        this.props.history.push('/login');
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };


    render(){
        return(
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">

                <Grid item xs={12} sm={8}>
                    <Paper>
                            <h1 style={{margin: '5px'}}>Sign up</h1>
                        <div style={{padding: '10px'}}>
                            <Grid container spacing={24}>
                                {
                                    // First name
                                }
                                <Grid item xs={6}>
                                    <TextField
                                        id="firstName"
                                        label="First name"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('firstName')}
                                    />
                                </Grid>

                                {
                                    // Last name
                                }
                                <Grid item xs={6}>
                                    <TextField
                                        id="lastName"
                                        label="Last name"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('lastName')}
                                    />
                                </Grid>

                                {
                                    // Email
                                }
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type="email"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('email')}
                                    />
                                </Grid>

                                {
                                    // Phone number
                                }
                                <Grid item xs={12}>
                                    <TextField
                                        id="phoneNumber"
                                        label="Phone number"
                                        type="number"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('phone')}
                                    />
                                </Grid>

                                {
                                    // Password
                                }
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('password')}
                                    />
                                </Grid>
                                {
                                    // Re password
                                }

                                <Grid item xs={12}>
                                    <TextField
                                        id="rePassword"
                                        label="confirm password"
                                        type="password"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.handleChange('rePassword')}
                                    />
                                </Grid>

                                {
                                    // Submit button
                                }
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={this.submitLogin}
                                        fullWidth>Submit</Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}