import React, {Component} from 'react';
import axios from 'axios';

class CountryList extends Component{
    state = {
        countryList: [],
        error : ''
    }

    componentDidUpdate(){
        axios
            .get('https://newsapi.org/v2/sources?apiKey=d5b361315fbe4bd68161f4b7847acb99')
            .then(
                res=> {
                    let list = res.data.sources;
                    this.setState({countryList: list});
                }
            )
            .catch(
                error => {
                    this.setState({error: error})
                }
            )
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default CountryList;