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
      render: () => <Tab.Pane attached={false}><ItemList produce={boothInfo.produce} /></Tab.Pane>,
    },
    {
      menuItem: 'Map',
      render: () => <Tab.Pane attached={false}><ProfileMap farmers={farmer}/></Tab.Pane>,
    },
    {
      menuItem: 'Reviews',
      render: () => <Tab.Pane attached={false}>No reviews yet</Tab.Pane>,
    },
  ]

  const [farmer, setFarmer] = useState({})
  const [boothInfo, setBoothInfo] = useState({})
  const [addressInfo, setAddressInfo] = useState({})
  const [farmerName, setFarmerName] = useState("")
  let id = useParams()

  useEffect(() => {  
    const fetchData = async () => {
      const result = await axios.get(`/farmers/booth/${id.id}`)
      setFarmer(result.data);
      setFarmerName(result.data.name);
      setBoothInfo(result.data.booth);
      setAddressInfo(result.data.address);
    };
    fetchData();
  }, []);

    return(
      <section class="section is-small is-farmer-page">
        <BoothHeader 
          farmerName={farmerName}
          name={boothInfo.booth_name}
          description={boothInfo.description}
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
    </section>
  );
}

export default BoothPage