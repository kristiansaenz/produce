import React from 'react'
import Booth from '../components/Booth'
import FilterBooths from '../components/FilterBooths'
import axios from 'axios'

function BoothList(){

  const [farmers, setFarmers] = React.useState([]);

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
        <div>Hello {farmers}</div>
    )
  }
// BoothList = {
//     booths: propTypes.array.isRequired
// }

export default BoothList;