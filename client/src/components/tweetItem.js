import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { styled } from '@material-ui/core/styles';


const MyCard = styled(Card)({
    // width: 275,
    minHeight: 200,
    backgroundColor: 'lightsteelblue'
})

const MyTypographyBody = styled(Typography)({
    fontSize: 18,
    color:'black'
})

const MyTypographyDate = styled(Typography)({
    fontSize: 14,
    color:'darkviolet',
    fontWeight:'bold'
})

class TweetItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(

            <React.Fragment>
            
            {
                this.props.tweet && this.props.tweet.map(t => (  
                    
                <Grid item xs={6} sm={4} key={t.id}>
                    <MyCard>
                        <CardContent>
                            <MyTypographyBody>
                                {t.body}
                            </MyTypographyBody>
                            <MyTypographyDate>
                                { moment(t.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                            </MyTypographyDate>
                        </CardContent>
                    </MyCard>
                </Grid>
                
                    )  
                    
                )
            }
            
            </React.Fragment> 

        )
    }
}

export default TweetItem;