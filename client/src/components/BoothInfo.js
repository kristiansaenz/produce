import React from 'react'

class BoothInfo extends React.Component {
    render() {
        return(
            <div class="column">
                <div class="booth-info">
                    <div class="booth-title">
                        <p class="title is-4">{this.props.name}</p>
                    </div>
                    <br />
                    <br />
                    <div class="booth-info-content">
                        <p class="subtitle is-6">
                            {/* There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. If you are 
                            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on 
                            the Internet tend to repeat predefined chunks as necessary, making this the 
                            first true generator on the Internet. */}
                            {this.props.description}
                        </p>
                    </div>
                    <br />
                    <br />
                    <div class="booth-location">
                        <p class="subtitle is-6">Corpus Christi, Tx</p>
                    </div>

                
                {/* <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Pacha's Farmhaus</p>
                                </div>
                            </div>

                            <div class="content">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. If you are 
                            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on 
                            the Internet tend to repeat predefined chunks as necessary, making this the 
                            first true generator on the Internet.
                            <br/>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                </div>   */}

                </div>
            </div>
        )
    }
}

export default BoothInfo
