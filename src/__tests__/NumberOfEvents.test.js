import React from 'react'
import { shallow } from 'enzyme'
import NumberOfEvents from '../NumberOfEvents'
import { ErrorAlert } from '../Alert'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, eventCount

  beforeAll(() => {
    const updateEvents = jest.fn(eventCount)
    const numberOfEvents = '10'
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        updateEvents={updateEvents}
      />
    )
  })

  test('should specify 10 as value for events by default', () => {
    expect(NumberOfEventsWrapper.instance().props.numberOfEvents).toBe('10')
  })

  test('should render ErrorAlert', () => {
    expect(NumberOfEventsWrapper.find(ErrorAlert)).toHaveLength(1)
  })

  test('should render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1)
  })

  test('number input should render numEvents as its value correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.instance().props.numberOfEvents
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toEqual(
      numberOfEvents
    )
  })

  test('should change state when input changes', () => {
    const eventObject = { target: { value: '1' } }
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject)
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('1')
  })
})
