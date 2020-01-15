import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import BoothHeader from '../components/BoothHeader';
import ItemList from '../components/ItemList';
import ProfileMap from '../components/ProfileMap';
import ReviewList from '../components/reviews/ReviewList';
import {
  setSelectedBooth,
  clearSelectedBooth
} from '../actions/selectedBoothAction';
import { Loader } from 'semantic-ui-react';
import { Tab } from 'semantic-ui-react';

const BoothPage = props => {
  const panes = [
    {
      menuItem: 'Produce',
      render: () => (
        <Tab.Pane attached={false}>
          <ItemList produce={props.booth.produce} />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Reviews',
      render: () => (
        <Tab.Pane attached={false}>
          <ReviewList booth_id={props.booth._id} />
        </Tab.Pane>
      )
    }
  ];

  let id = useParams();

  useEffect(() => {
    props.setSelectedBooth(id);

    return () => {
      props.clearSelectedBooth();
    };
  }, []);

  if (!props.booth.address) {
    return (
      <section className='section is-large'>
        <Loader active inline='centered' />
      </section>
    );
  } else {
    return (
      <section className='section is-small is-farmer-page'>
        <BoothHeader
          boothOwnerName={props.booth.name}
          avatar={props.booth.avatar}
          boothImages={props.booth.images}
          boothName={props.booth.booth_name}
          description={props.booth.description}
          city={props.booth.address.city}
          state={props.booth.address.state}
          rating={props.booth.rating}
          booth={props.booth}
        />
        <br />
        {/* <ProfileMap booths={booth} /> */}
        <div className='booth-content'>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  booth: state.selectedBooth
});

export default connect(mapStateToProps, {
  setSelectedBooth,
  clearSelectedBooth
})(BoothPage);
