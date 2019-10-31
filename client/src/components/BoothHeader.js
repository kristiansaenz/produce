import React from 'react'
import BoothImages from './Booth-Profile/FarmerImages'
import BoothInfo from './BoothInfo'
import FarmerCard from './Booth-Profile/FarmerCard'
import FarmerDescription from './Booth-Profile/FarmerDescription'


class BoothHeader extends React.Component {

    render() {
        return(
            <div class="booth-header">
            <div class="container">
                
                {/* Booth Images Component */}
                <div class="columns">
                    <div class="column">
                        <BoothImages />
                    </div>
                </div>

                {/* Farmer Card + Farmer Description */}
                <div class="columns">
                    {/* <BoothInfo 
                        name={this.props.name}
                        description={this.props.description}
                        city={this.props.city}
                        state={this.props.state}
                    /> */}
                    <div className="column is-two-fifths">
                        <FarmerCard />
                    </div>
                    <div className="column">
                        <FarmerDescription/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BoothHeader
