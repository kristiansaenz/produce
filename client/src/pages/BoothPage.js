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
      setBoothInfo(result.data);
    };
    fetchData();
  }, []);

    return(
      <section class = "section is-small">
            <BoothHeader 
              name={boothInfo.name}
            />
            <br/>

            <section class="hero">
            <div class="hero-body">
                <ItemList />
            </div>
            </section>
      </section>
    );
}

export default BoothPage