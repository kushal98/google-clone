import React from 'react';
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import Search from './Search';

import './SearchPage.css'

function SearchPage(props) {

    const [{ term } , dispatch] = useStateValue()
    const {data} = useGoogleSearch(term) // LIVE API CALL


    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
                <Search hideButtons/>
            </div>

            <div className="searchPage__results">

            </div>
        </div>
    );
}

export default SearchPage;