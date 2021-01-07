import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('should render collapsed event component and its elements correctly', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
    expect(EventWrapper.find('.start-dateTime')).toHaveLength(1);
    expect(EventWrapper.find('.start-timeZone')).toHaveLength(1);
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('should render details button', () => {
    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
  });

  test('should render event component state correctly', () => {
    expect(EventWrapper.state('isExpanded')).toBe(false);
  });

  test('clicking "show-details" button should expand event component', () => {
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(true);
  });

  test('should render expanded event component and its elements correctly', () => {
    expect(EventWrapper.find('.Expanded-Event')).toHaveLength(1);
    expect(EventWrapper.find('.about')).toHaveLength(1);
    expect(EventWrapper.find('.link')).toHaveLength(1);
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('expanded event should collapse when details button is clicked', () => {
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(false);
  });

  test('expanded event component should no longer be present after collapsing event', () => {
    expect(EventWrapper.find('.Expanded-Event')).toHaveLength(0);
  });
});
