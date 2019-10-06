import React from 'react'
import Booth from '../components/Booth'
import FilterBooths from '../components/FilterBooths'
import axios from 'axios'


class BoothList extends React.Component {
    state = {
        booths: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/farmers")
        .then(response => this.setState({
            booths: response.data
        }))
    }

    render() {
        return(
            <div>
                <FilterBooths />
                <div class="columns is-mobile">
                    <Booth />
                    <Booth />
                    <Booth />
                    <Booth />
                    <Booth />
                </div>
            </div>
        )
    }
}

// BoothList = {
//     booths: propTypes.array.isRequired
// }

export default BoothList;