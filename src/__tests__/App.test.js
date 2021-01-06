import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('should render EventList', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('should render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});
