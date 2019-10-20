import React from 'react'
import Booth from '../components/Booth'
import FilterBooths from '../components/FilterBooths'
import axios from 'axios'

function BoothList(){

  const [farmers, setFarmers] = React.useState([]);

<<<<<<< HEAD
  React.useEffect(() => {
    axios.get('/farmers')
      .then(res => {
        filterData(res.data)
      })
  })

  let filterData = (farmersList) => {
    for(let i = 0; i < farmersList.length; i++) {
       console.log(farmersList[i]);
    }
    //console.log(farmers);
  }

    return(
=======
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



    //return(
>>>>>>> ed86dc95ac6f9665635418d53b1c236f2a5df999
        // <div>
        //     <FilterBooths />
        //     <div className="columns is-mobile">
        //         <Booth />
        //         <Booth />
        //         <Booth />
        //         <Booth />
        //         <Booth />
        //     </div>
        // </div>
<<<<<<< HEAD
        <div>Hello {farmers}</div>
    )
  }
=======

>>>>>>> ed86dc95ac6f9665635418d53b1c236f2a5df999
// BoothList = {
//     booths: propTypes.array.isRequired
// }

export default BoothList;