import  React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  useParams
} from 'react-router-dom'
import BoothHeader from '../components/BoothHeader'
import ItemList from '../components/ItemList'
import ProfileMap from '../components/ProfileMap'
import { Tab } from 'semantic-ui-react'


const BoothPage = () => {

  const panes = [
    {
      menuItem: 'Produce',
      render: () => <Tab.Pane attached={false}><ItemList produce={booth.produce} /></Tab.Pane>,
    },
    // {
    //   menuItem: 'Map',
    //   render: () => <Tab.Pane attached={false}><ProfileMap farmers={farmer}/></Tab.Pane>,
    // },
    {
      menuItem: 'Reviews',
      render: () => <Tab.Pane attached={false}>No reviews yet</Tab.Pane>,
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
  }, []);

  if(isLoading) {
    return <div></div>
  } else {
    return(
      <section class="section is-small is-farmer-page">
        <BoothHeader 
          boothOwnerName={boothOwner.name}
          avatar={boothOwner.avatar}
          boothImages={booth.images}
          boothName={booth.booth_name}
          description={booth.description}
          city={addressInfo.city}
          state={addressInfo.state}
        />
        <br/>

        {/* <nav class="level is-mobile is-produce-review-switch">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">Produce</p>
            </div>
            <div class="level-item">
              <p class="subtitle is-5">Reviews</p>
            </div>
          </div>
      </nav>
        

      <div class="booth-items-section">
        <ItemList produce={boothInfo.produce} />
      </div>

        <ProfileMap farmers={farmer}/> */}

      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    <ProfileMap booths={booth} />
    </section>
  );
  }
}

export default BoothPage