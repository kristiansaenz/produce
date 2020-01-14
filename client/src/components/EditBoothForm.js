import React, { useState, useEffect } from "react";
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
  const [userBooth, setUserBooth] = useState(null)
  const [submitStatus, setSubmitStatus] = useState(false)
  const [boothName, setBoothName] = useState('')
  const [description, setDescription] = useState('')
  const [fruits, setFruits] = useState(fruitItems)
  const [vegetables, setVegetables] = useState(vegetableItems)
  const [selectedFruits, setSelectedFruits] = useState([])
  const [selectedVegetables, setSelectedVegetables] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const booth = await axios.get(`/booths/${props.user.booth}`)
      setUserBooth(booth.data)
      setBoothName(booth.data.booth_name)
      setDescription(booth.data.description)

      let fruitArray = booth.data.produce[0].items
      let vegetableArray = booth.data.produce[1].items

      setSelectedFruits(fruitArray)
      setSelectedVegetables(vegetableArray)

      let fruitDifference = fruitItems.filter(x => !fruitArray.includes(x))
      let vegetableDifference = vegetableItems.filter(x => !vegetableArray.includes(x))
      setFruits(fruitDifference)
      setVegetables(vegetableDifference)
      
    };
    fetchData();
  }, []);

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

    if(boothName !== '' && description !== '') {
      axios
      .patch(`/booths/${props.user.booth}`, {
        booth_name: boothName,
        description: description,
        produce: produceArray
      })
      .then(response => {
        console.log(response);
        setSubmitStatus(false)
        alert('Booth Updated!')
      });
    } else {
      alert('Please enter a Booth Name and Description')
      setSubmitStatus(false)
    }
  }

  const handleBoothNameChange = e => {
    setBoothName(e.target.value)
    console.log(e.target.value)
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value)
    console.log(e.target.value)
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
        break;
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

  if(userBooth === null) {
    return (<div>LOADING</div>)
  } else {
      return (
        <div>
          <Field 
            name={boothName}
            label='Booth Name'
            value={boothName}
            handleChange={handleBoothNameChange}
          />
          <TextAreaField 
            name={description}
            label='Booth Description'
            value={description}
            handleChange={handleDescriptionChange}
          />
          <div className="columns">
            <div className="column">
                <label className="label">Selected Fruits</label>
                <div>
                {selectedFruits.map(fruit => {
                  return(
                    <Button color='green' onClick={() => handleProduceRemove(fruit, 'fruit')}>{fruit}<span class="icon">
                  </span></Button>
                  )
                })
                }
                </div>
            </div>
            <div className="column">
              <label className="label">Add Fruit</label>
              {fruits.map(fruit => {
                return(
                  <Button basic color='green' content='Green' onClick={() => handleProduceAdd(fruit, 'fruit')}>{fruit}</Button>
                )
              })
              }
            </div>
          </div>
          <div className="columns">
              <div className="column">
                <label className="label">Selected Vegetables</label>
                <div>
                {selectedVegetables.map(vegetable => {
                    return(
                      <Button color='green' onClick={() => handleProduceRemove(vegetable, 'vegetable')}>{vegetable}</Button>
                    )
                  })
                  }
                </div>
              </div>
              <div className="column">
                <label className="label">Add Vegetables</label>
                {vegetables.map(vegetable => {
                  return(
                    <Button basic color='green' content='Green' onClick={() => handleProduceAdd(vegetable, 'vegetable')}>{vegetable}</Button>
                  )
                })
                }
              </div>
          </div>
          <br />
          <div className="submit-button">
            {submitStatus ? (
              <Button loading>Loading</Button>
            ) : (
              <Button onClick={updateBooth}>Save Changes</Button>
            )
            }
          </div>
        </div>
      );
    }
  }

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(EditBoothForm);
