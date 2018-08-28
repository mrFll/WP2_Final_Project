import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from "@material-ui/core/es/TextField/TextField";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Grid from "@material-ui/core/es/Grid/Grid";
import Search from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fafafa',
            main: '#ff7915',
            dark: '#4b4b4b',
            contrastText: '#fff',
        },
    },
});

const styles = {
    root: {
        flexGrow: 1,
    },

};

function searchBar(props) {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          spacing={8}>

                        <Grid item  xs={12} sm={3}>
                            <TextField
                                label="City"
                                type="text"
                                margin="normal"
                                color="primary"
                                fullWidth
                            />
                        </Grid>

                        <Grid item  xs={6} sm={3}>
                            <TextField
                                label="check in"
                                type="date"
                                margin="normal"
                                color="primary"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item  xs={6} sm={3}>
                            <TextField
                                label="check out"
                                type="date"
                                margin="normal"
                                color="inherit"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item  xs={9} sm={2}>
                            <TextField
                                label="guest number"
                                type="number"
                                margin="normal"
                                color="inherit"
                                fullWidth
                            />
                        </Grid>
                        <Grid item  xs={1} sm={1}>
                            <IconButton>
                               <Search />
                            </IconButton>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
        </MuiThemeProvider>
    );
}

searchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(searchBar);