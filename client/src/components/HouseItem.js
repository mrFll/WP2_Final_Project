import React ,{Component} from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import kaashaaneLogo from '../rec/kaashaane.jpg';

const styles = theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
});


class HouseItem extends Component{
    render(){
        const {classes , house} = this.props;
        return(
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={kaashaaneLogo}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {house.title}
                        </Typography>
                        <Typography>
                            ${house.price} per night
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            View
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

HouseItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseItem);