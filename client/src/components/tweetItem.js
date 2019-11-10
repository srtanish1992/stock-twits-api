import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class TweetItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(

            <React.Fragment>
            {
                this.props.tweet && this.props.tweet.map(t => (

                    <Card 
                    // className={classes.card}
                    key={t.id}
                    >
                        <CardContent>
                            <Typography 
                                // className={classes.title} 
                                color="textSecondary" 
                                gutterBottom
                            >
                                {t.body}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {t.created_at}
                            </Typography>
                        </CardContent>
                    </Card>
                
                    )

                    
                    
                )
            }
            
            </React.Fragment>     
            
            
        )
    }
}

export default TweetItem;