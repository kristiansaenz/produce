import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import sinon from 'sinon'

// make snapshots more human friendly
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// adding enzyme adapter for react 16
Enzyme.configure({ adapter: new Adapter() });

// make enyzme funtions available
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
