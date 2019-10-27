import React from 'react'
import BoothImages from './BoothImages'
import BoothInfo from './BoothInfo'

class BoothHeader extends React.Component {

    render() {
        return(
            <div class="booth-header">
            <div class="container">
                <div class="columns">
                    <BoothImages />
                    <BoothInfo 
                        name={this.props.name}
                        description={this.props.description}
                    />
                </div>
            </div>
            </div>
        )
    }
}

export default BoothHeader
