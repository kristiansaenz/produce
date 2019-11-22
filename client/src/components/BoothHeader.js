import React from 'react'
import BoothImages from './Booth-Profile/BoothImages'
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
                        <BoothImages booth_images={this.props.boothImages}/>
                    </div>
                </div>

                {/* Farmer Card + Farmer Description */}
                <div class="columns">
                    <div className="column is-two-fifths is-equal-column">
                        <FarmerCard 
                            boothOwnerName={this.props.boothOwnerName}
                            avatar={this.props.avatar}
                            boothName={this.props.boothName}
                            city={this.props.city}
                            state={this.props.state}
                            rating={this.props.rating}
                        />
                    </div>
                    <div className="column is-equal-column">
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
