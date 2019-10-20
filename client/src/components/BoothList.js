import React from 'react'
import Booth from '../components/Booth'
import FilterBooths from '../components/FilterBooths'
import axios from 'axios'

function BoothList(){

  const [farmers, setFarmers] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/farmers')
        setFarmers(result.data);
      };
      fetchData();
    }, []);

    return(
      <div>
        <FilterBooths />
        <div className="columns is-mobile">
        {farmers.map(c => (
          <div>
            -{c.name}
            <Booth />
          </div>
        ))}
        </div>
      </div>
    )
  }

export default BoothList;