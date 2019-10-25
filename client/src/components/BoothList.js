import { React, useState, useEffect } from 'react'
import Booth from '../components/Booth'
import FilterBooths from '../components/FilterBooths'
import axios from 'axios'

function BoothList(){

  const [farmers, setFarmers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/farmers')
        setFarmers(result.data);
      };
      fetchData();
    }, []);

    return(
      <div>
        <div className="columns">
        {farmers.map(farmer => (
            <Booth 
              id={farmer._id}
              name={farmer.name}
              email={farmer.email}
            />
        ))}
        </div>
      </div>
    )
  }

export default BoothList