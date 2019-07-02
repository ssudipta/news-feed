import React, {Component} from 'react';
import NewsList from './Views/NewsList';


class NewsFeed extends Component{
    render(){
        return(
            <div>
                <h1>Top News</h1>
                <hr/>
                {/* <NewsList/> */}
                
            </div>
        );
    }
}

export default NewsFeed;