import  React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  useParams
} from 'react-router-dom'
import BoothHeader from '../components/BoothHeader'
import ItemList from '../components/ItemList'
import ProfileMap from '../components/ProfileMap'
import ReviewList from '../components/reviews/ReviewList'
import { Loader } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'


const BoothPage = () => {

  const panes = [
    {
      menuItem: 'Produce',
      render: () => <Tab.Pane attached={false}><ItemList produce={booth.produce} /></Tab.Pane>,
    },
    {
      menuItem: 'Reviews',
      render: () => <Tab.Pane attached={false}><ReviewList booth_id={booth._id} reviews={booth.reviews}/></Tab.Pane>,
    },
  ]

  const [boothOwner, setBoothOwner] = useState({})
  const [booth, setBooth] = useState({})
  const [addressInfo, setAddressInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  let id = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/booths/${id.id}`)
      const result2 = await axios.post('/users/getUserByBoothId', {
        id: id.id
      })

      setBooth(result.data);
      setBoothOwner(result2.data[0]);
      setAddressInfo(result.data.address);
      setIsLoading(false);
    };
    fetchData();
  }, [id.id]);

  if(isLoading) {
    return (
      <section className="section is-large">
        <Loader active inline='centered' />
      </section>
    )
  } else {
    return(
      <section className="section is-small is-farmer-page">
        <BoothHeader 
          boothOwnerName={boothOwner.name}
          avatar={boothOwner.avatar}
          boothImages={booth.images}
          boothName={booth.booth_name}
          description={booth.description}
          city={addressInfo.city}
          state={addressInfo.state}
          rating={booth.rating}
          booth={booth}
        />
        <br/>
      {/* <ProfileMap booths={booth} /> */}
      <div className="booth-content">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </section>
  );
  }
}

export default BoothPage