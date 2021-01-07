import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('should render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('should render event start dateTime', () => {
    expect(EventWrapper.find('.start-dateTime')).toHaveLength(1);
  });

  test('should render event start timeZone', () => {
    expect(EventWrapper.find('.start-timeZone')).toHaveLength(1);
  });

  test('should render event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('should render details button', () => {
    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
  });
});
