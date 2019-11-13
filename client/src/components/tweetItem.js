import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';


const useStyles = makeStyles({
    
    card: {
        // width: 275,
        minHeight: 200,
        backgroundColor: 'lightsteelblue'
    },
    title: {
      fontSize: 14,
      color:'black'
    },
  });


const TweetItem = (props) => {

    const classes = useStyles();

    return (

        <React.Fragment>
            
            
            {
                props.tweet && props.tweet.map(t => (  
                    
                <Grid item xs={6} sm={4}>
                    <Card 
                        className={classes.card}
                    key={t.id}
                    >
                        <CardContent>
                            <Typography 
                                className={classes.title} 
                                gutterBottom
                            >
                                {t.body}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                { moment(t.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                
                    )  
                    
                )
            }
            
            </React.Fragment> 

    )
}

export default TweetItem;