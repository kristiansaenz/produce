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
      console.log('result: ', result);
      setBoothInfo(result.data);
    };
    fetchData();
  }, []);

    return(

      <section class = "section is-small">
            <li>{boothInfo.name}</li>
            <BoothHeader />
            <br/>

            <section class="hero">
            <div class="hero-body">
                {/* <h1 class="title">Your Items will appear here</h1>
                <h2 class="subtitle">
                    Buy goods here ~
                </h2> */}
                <ItemList />
            </div>
            </section>
      </section>
    );
}

export default BoothPage