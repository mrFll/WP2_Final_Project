import React ,{Component} from 'react';
import SearchBar from '../components/searchBar';
import HouseItem from "../components/HouseItem";
import Grid from "@material-ui/core/es/Grid/Grid";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    }
});

const tempHouses = [
    {
        title: "Downtown Penthouse, Amazing Views!",
        price: "40",
    },
    {
        title: "Lovely apt. Heart of Cochabamba",
        price: "31",
    },
    {
        title: "The Green Apartment!",
        price: "30",
    },
    {
        title: "Beautiful Apartment For Rent",
        price: "61",
    },
    {
        title: "Alquiler por Dias, Semana, Mes",
        price: "39",
    },
    {
        title: "Small apartment in a colonial city",
        price: "27",
    },
    {
        title: "Sri samui",
        price: "49",
    },
    {
        title: "Valentine Villa, apartment 2 bed 2 sofa with pool",
        price: "130",
    },
    {
        title: "Ocean Front Sunset Bungalow",
        price: "90",
    },
    {
        title: "Private room,Jinta City Hotel,Samui",
        price: "12",
    },
    {
        title: "Baan Hinlad near Waterfall no.3",
        price: "62",
    },

];

class resultPage extends Component{
    render(){
        const {classes} = this.props;
        return(
            <div >
                <SearchBar/>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container spacing={40}>
                    {
                        tempHouses.map((tempHouse, index) =>(
                            <HouseItem key={index} house={tempHouse} />
                        ))
                    }
                    </Grid>
                </div>
            </div>
        );
    }
}

resultPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(resultPage);