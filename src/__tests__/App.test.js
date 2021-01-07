import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('should render EventList component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('should render CitySearch component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('should render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});
