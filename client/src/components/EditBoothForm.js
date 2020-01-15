import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/authActions';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react';
import Field from '../components/forms/Field';
import { categories, fruitItems, vegetableItems } from './produce/categories';
import TextAreaField from './forms/TextAreaField';
import SubmitButton from './forms/SubmitButton';
import AddItemField from './forms/AddItemField';
import useForm from './forms/useForm';
import AddItemBoxList from './produce/AddItemBoxList';
import BoothImageUploader from './BoothImageUploader';

function EditBoothForm(props) {
  const [userBooth, setUserBooth] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [boothName, setBoothName] = useState('');
  const [description, setDescription] = useState('');
  const [fruits, setFruits] = useState(fruitItems);
  const [vegetables, setVegetables] = useState(vegetableItems);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedVegetables, setSelectedVegetables] = useState([]);

  useEffect(() => {
    if (props.user.booth) {
      const fetchData = async () => {
        const booth = await axios.get(`/booths/${props.user.booth}`);
        setUserBooth(booth.data);
        setBoothName(booth.data.booth_name);
        setDescription(booth.data.description);

        let fruitArray = booth.data.produce[0].items;
        let vegetableArray = booth.data.produce[1].items;

        setSelectedFruits(fruitArray);
        setSelectedVegetables(vegetableArray);

        let fruitDifference = fruitItems.filter(x => !fruitArray.includes(x));
        let vegetableDifference = vegetableItems.filter(
          x => !vegetableArray.includes(x)
        );
        setFruits(fruitDifference);
        setVegetables(vegetableDifference);
      };
      fetchData();
    } else {
      console.log('Booth Not Found');
    }
  }, []);

  function updateBooth() {
    setSubmitStatus(true);
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

    if (boothName !== '' && description !== '') {
      axios
        .patch(`/booths/${props.user.booth}`, {
          booth_name: boothName,
          description: description,
          produce: produceArray
        })
        .then(response => {
          console.log(response);
          setSubmitStatus(false);
          alert('Booth Updated!');
        });
    } else {
      alert('Please enter a Booth Name and Description');
      setSubmitStatus(false);
    }
  }

  const createBooth = e => {
    setSubmitStatus(true);

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

    if (boothName !== '' && description !== '') {
      let createBoothOptions = {
        booth_name: boothName,
        description: description,
        produce: produceArray,
        zip: 78237
      };

      axios
        .post('/booths/create', createBoothOptions)
        .then(res =>
          axios.patch(`/users/${props.user._id}`, {
            booth: res.data._id
          })
        )
        .then(res => {
          console.log(res);
          alert('Booth Created!');
          setSubmitStatus(false);
          store.dispatch(loadUser());
        });
    }
  };

  const handleBoothNameChange = e => {
    setBoothName(e.target.value);
    console.log(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };

  const handleProduceAdd = (produce, type) => {
    switch (type) {
      case 'fruit':
        setFruits(fruits.filter(item => item !== produce));
        setSelectedFruits([...selectedFruits, produce]);
        break;
      case 'vegetable':
        setVegetables(vegetables.filter(item => item !== produce));
        setSelectedVegetables([...selectedVegetables, produce]);
        break;
      default:
        break;
    }
  };

  const handleProduceRemove = (produce, type) => {
    switch (type) {
      case 'fruit':
        setSelectedFruits(selectedFruits.filter(item => item !== produce));
        setFruits([...fruits, produce]);
        break;
      case 'vegetable':
        setSelectedVegetables(
          selectedVegetables.filter(item => item !== produce)
        );
        setVegetables([...vegetables, produce]);
        break;
      default:
        console.log('hi');
    }
  };

  return (
    <div>
      <BoothImageUploader />
      <Field
        name={boothName}
        label='Booth Name'
        value={boothName}
        handleChange={handleBoothNameChange}
      />{' '}
      <TextAreaField
        name={description}
        label='Booth Description'
        value={description}
        handleChange={handleDescriptionChange}
      />{' '}
      <div>
        <h1> Choose Produce </h1> <h5> Fruits </h5>{' '}
        {fruits.map(fruit => {
          return (
            <Button
              basic
              color='green'
              content='Green'
              onClick={() => handleProduceAdd(fruit, 'fruit')}
            >
              {' '}
              <Icon name='add' color='black' /> {fruit}{' '}
            </Button>
          );
        })}{' '}
        <h5> Vegetables </h5>{' '}
        {vegetables.map(vegetable => {
          return (
            <Button
              basic
              color='green'
              content='Green'
              onClick={() => handleProduceAdd(vegetable, 'vegetable')}
            >
              {' '}
              <Icon name='add' color='black' /> {vegetable}{' '}
            </Button>
          );
        })}{' '}
      </div>{' '}
      <br />
      <h1> Selected Fruits </h1>{' '}
      <div>
        {' '}
        {selectedFruits.map(fruit => {
          return (
            <Button
              color='green'
              onClick={() => handleProduceRemove(fruit, 'fruit')}
            >
              {' '}
              <Icon name='remove' color='black' /> {fruit}{' '}
            </Button>
          );
        })}{' '}
      </div>{' '}
      <br />
      <h1> Selected Vegetables </h1>{' '}
      <div>
        {' '}
        {selectedVegetables.map(vegetable => {
          return (
            <Button
              color='green'
              onClick={() => handleProduceRemove(vegetable, 'vegetable')}
            >
              {' '}
              <Icon name='remove' color='black' /> {vegetable}{' '}
            </Button>
          );
        })}{' '}
      </div>{' '}
      <br />{' '}
      {/* {submitStatus ? (
                    <Button loading>Loading</Button>
                  ) : (
                    <Button onClick={createBooth}>Submit</Button>
                  )
                  } */}{' '}
      {props.user.booth ? (
        <Button onClick={updateBooth}> Submit </Button>
      ) : (
        <Button onClick={createBooth}> Submit </Button>
      )}{' '}
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(EditBoothForm);
