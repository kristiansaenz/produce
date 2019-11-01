import React from 'react'
import BoothImages from './Booth-Profile/FarmerImages'
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
                    <div className="column is-two-fifths">
                        <FarmerCard 
                            farmerName={this.props.farmerName}
                            name={this.props.name}
                            city={this.props.city}
                            state={this.props.state}
                        />
                    </div>
                    <div className="column">
                        <FarmerDescription
                        description={this.props.description}
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BoothHeader
