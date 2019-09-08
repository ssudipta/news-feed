import React, {Component} from 'react';
//import API_ROOT from '../../axios-news-feed';
import axios from 'axios';

class NewsList extends Component{
    state = {
        country: 'in',
        newsFeed: [],
        error: '',
        isLoaded: false
    }

    componentDidMount(){
        console.log("inside componentDidMount");
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=d5b361315fbe4bd68161f4b7847acb99`)
            //.then(res => res)
            .then(json => {
                this.setState({
                    isLoaded: true,
                    newsFeed: json.data.articles
                })
            })
            .catch(
                error=> {
                    this.setState({error: error});
                    console.log(JSON.stringify(this.state.error));
                    console.log(this.state.country);
                }  
            );
    }
    render(){

        var {isLoaded, newsFeed, error, country} = this.state;
        if(this.state.error){
            return(
                <div>
                    Some error occured : {JSON.stringify(this.state.error)}
                </div>
            )  
        }
        if(!isLoaded){
            return <div>Loading...</div>;
            console.log("inside if part");
            console.log(JSON.stringify(this.state.newsFeed));
        }
        else{
            console.log("inside else part");
            return(
                <div>
                    <ol>
                        {
                            newsFeed.map((newsItem,index)=>(
                                <li key= {index}>
                                    Title: <a href= "">{newsItem.title} </a>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            );
        }
    } 
}

export default NewsList;