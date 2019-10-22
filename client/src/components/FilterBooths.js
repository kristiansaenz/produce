import React from 'react'
import FilterButton from '../images/filterbutton.svg'


class FilterBooths extends React.Component {

    render() {
        return(
            <nav class="level" id="filter">
               <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-5">
                            <strong>Filter By</strong>
                        </p>
                        <div class="filter-button"><img src={FilterButton}></img></div>
                    </div>
               </div>
             
               <div class="level-right">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Location"></input>
                        </p>
                        <p class="control">
                            <button class="button">Search</button>
                        </p>
                    </div>
                </div>
            </nav>
        )
    }
}

export default FilterBooths