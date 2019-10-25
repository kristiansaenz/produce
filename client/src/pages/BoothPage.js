import { React, useState, useEffect } from 'react'
import axios from 'axios'
import {
  Route,
  useParams
} from 'react-router-dom'

const BoothPage = () => {

  const [boothInfo, setBoothInfo] = useState({})
  let id = useParams()

  useEffect((id) => {
    
    const fetchData = async () => {
      const result = await axios.get(`/booth/${id}`)
      console.log(result.data);
      setBoothInfo(result.data);
    };
    fetchData();
  }, []);

    return(
      <div>
        Hello 
      </div>
    );
}

export default BoothPage