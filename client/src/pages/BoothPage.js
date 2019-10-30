import  React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  useParams
} from 'react-router-dom'
import BoothHeader from '../components/BoothHeader'
import ItemList from '../components/ItemList'


const BoothPage = () => {

  const [boothInfo, setBoothInfo] = useState({})
  const [addressInfo, setAddressInfo] = useState({})
  let id = useParams()

  useEffect(() => {  
    const fetchData = async () => {
      const result = await axios.get(`/farmers/booth/${id.id}`)
      setBoothInfo(result.data.booth);
      setAddressInfo(result.data.address);
    };
    fetchData();
  }, []);

  return (
    <section class="section is-small">
      <BoothHeader
        name={boothInfo.booth_name}
        description={boothInfo.description}
        city={addressInfo.city}
        state={addressInfo.state}
      />
      <br />

      <div class="booth-items-section">
        <ItemList produce={boothInfo.produce} />
      </div>
    </section>
  );
}

export default BoothPage