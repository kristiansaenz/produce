import  React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Route,
  useParams
} from 'react-router-dom'

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
      <div>
        <ul>
          <li>{boothInfo.name}</li>
        </ul>
      </div>
    );
}

export default BoothPage