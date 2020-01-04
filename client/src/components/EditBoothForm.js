import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Button, Icon } from 'semantic-ui-react'
import Field from "../components/forms/Field";
import { categories, fruitItems, vegetableItems } from './produce/categories'
import TextAreaField from "./forms/TextAreaField";
import SubmitButton from "./forms/SubmitButton";
import AddItemField from "./forms/AddItemField";
import useForm from "./forms/useForm";
import AddItemBoxList from "./produce/AddItemBoxList";

function EditBoothForm(props) {
  // const { values, handleChange, handleSubmit } = useForm(updateBooth);
  const [submitStatus, setSubmitStatus] = useState(false)
  const [boothName, setBoothName] = useState('')
  const [description, setDescription] = useState('')
  const [fruits, setFruits] = useState(fruitItems)
  const [vegetables, setVegetables] = useState(vegetableItems)
  const [selectedFruits, setSelectedFruits] = useState([])
  const [selectedVegetables, setSelectedVegetables] = useState([])
  const [selectedProduce, setSelectedProduce] = useState([])



  function updateBooth() {

    setSubmitStatus(true)

    let produceArray = [
      {
        category: 'fruits',
        items: selectedFruits
      },
      {
        category: 'vegetables',
        items: selectedVegetables
      }
    ];

    console.log(produceArray)

    axios
      .patch(`/booths/${props.user.booth}`, {
        // booth_name: input.boothName,
        // description: input.description,
        produce: produceArray
      })
      .then(response => {
        console.log(response);
        setSubmitStatus(false)
        alert('Booth Updated!')
    });
  }

  const handleProduceAdd = (produce, type) => {
    switch(type) {
      case 'fruit':
        setFruits(fruits.filter(item => item !== produce))
        setSelectedFruits([...selectedFruits, produce])
        break;
      case 'vegetable':
        setVegetables(vegetables.filter(item => item !== produce))
        setSelectedVegetables([...selectedVegetables, produce])
        break;
      default:
      console.log('hi')
    }

  }

  const handleProduceRemove = (produce, type) => {

    switch(type) {
      case 'fruit':
        setSelectedFruits(selectedFruits.filter(item => item !== produce))
        setFruits([...fruits, produce])
        break;
      case 'vegetable':
        setSelectedVegetables(selectedVegetables.filter(item => item !== produce))
        setVegetables([...vegetables, produce])
        break;
      default:
      console.log('hi')
    }
  }

  return (
    <div>
      <div>
        <h1>Choose Produce</h1>
        <h5>Fruits</h5>
        {fruits.map(fruit => {
          return(
            <ul>
              <li><Button onClick={() => handleProduceAdd(fruit, 'fruit')}>{fruit}</Button></li>
            </ul>
          )
        })
        }
        <h5>Vegetables</h5>
        {vegetables.map(vegetable => {
          return(
            <ul>
              <li><Button onClick={() => handleProduceAdd(vegetable, 'vegetable')}>{vegetable}</Button></li>
            </ul>
          )
        })
        }
      </div>
      <br />
      <h1>Selected Fruits</h1>
      <div>
        {selectedFruits.map(fruit => {
          return(
            <Button onClick={() => handleProduceRemove(fruit, 'fruit')}>{fruit}</Button>
          )
        })
        }
      </div>
      <br />
      <h1>Selected Vegetables</h1>
      <div>
      {selectedVegetables.map(vegetable => {
          return(
            <Button onClick={() => handleProduceRemove(vegetable, 'vegetable')}>{vegetable}</Button>
          )
        })
        }
      </div>
      <br />
      {submitStatus ? (
        <Button loading>Loading</Button>
      ) : (
        <Button onClick={updateBooth}>Submit</Button>
      )
      }
      
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(EditBoothForm);
