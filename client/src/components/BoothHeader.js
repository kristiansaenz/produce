import React from "react";
import BoothImages from "./Booth-Profile/BoothImages";
import FarmerCard from "./Booth-Profile/FarmerCard";
import FarmerDescription from "./Booth-Profile/FarmerDescription";
import ProfileMap from "./ProfileMap";

class BoothHeader extends React.Component {
  render() {
    return (
      <div className="booth-header">
        <div className="container">
          
          {/* Booth Images Component */}
          <div className="columns">
            <div className="column">
              <BoothImages boothImages={this.props.boothImages} />
            </div>
          </div>

          {/* Farmer Card */}
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

            {/* Farmer Description + Map Location */}
            <div className="column is-three-fifths is-equal-column">
              <FarmerDescription
                description={this.props.description}
                booth={this.props.booth}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoothHeader;
