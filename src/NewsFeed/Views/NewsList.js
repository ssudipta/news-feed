import React, {Component} from 'react';
import API_ROOT from '../../axios-news-feed';

class NewsList extends Component{
    state = {
        title: null,
        description: null,
        url: null,
        urlToImage: null,
        content: null,
        country: 'in',
        newsFeed: []
    }

    componentDidMount(){
        axios
            .get(`${API_ROOT}?country=${this.state.country}&apiKey=d5b361315fbe4bd68161f4b7847acb99`)
            .then(response => {
                newsFeed : response.data
            });
    }

    
}

export default NewsList;