import  React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Route,
  useParams
} from 'react-router-dom'
import BoothHeader from '../components/BoothHeader'
import ItemList from '../components/ItemList'


const BoothPage = () => {

  const [boothInfo, setBoothInfo] = useState({})
  let id = useParams()

  useEffect(() => {  
    const fetchData = async () => {
      // const result = await axios.get(`/farmers/booth/${id}`)
      const result = await axios.get(`/farmers/booth/${id.id}`)
      setBoothInfo(result.data.booth);
    };
    fetchData();
  }, []);

    return(
      <section class = "section is-small">
            <BoothHeader 
              name={boothInfo.booth_name}
              description={boothInfo.description}
            />
            <br/>

            <div class="booth-items-section">

                  <ItemList />

            </div>
      </section>
    );
}

export default BoothPage