import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockData } from '../mock-data'
import { extractLocations, getEvents } from '../api'
import App from '../App'
import NumberOfEvents from '../NumberOfEvents'
import EventList from '../EventList'
import Event from '../Event'
import CitySearch from '../CitySearch'
import { WarningAlert } from '../Alert'
import DataVisualization from '../DataVisualization'

// Unit Tests
describe('<App /> component', () => {
  let AppWrapper
  beforeAll(() => {
    AppWrapper = shallow(<App />)
  })

  test('should render EventList component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1)
  })

  test('should render CitySearch component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1)
  })

  test('should render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1)
  })

  test('should render WarningAlert component', () => {
    expect(AppWrapper.find(WarningAlert)).toHaveLength(1)
  })

  test('should render DataVisualization component', () => {
    expect(AppWrapper.find(DataVisualization)).toHaveLength(1)
  })
})

describe('<App /> component updateEvents() function', () => {
  test('passing location to updateEvents() should update App component location state', async () => {
    const AppWrapper = mount(<App />)
    const instance = AppWrapper.instance()
    await instance.updateEvents('London')
    expect(AppWrapper.state().currentLocation).toEqual('London')
    AppWrapper.unmount()
  })

  test('passing location to updateEvents() should filter events in App component state', async () => {
    const AppWrapper = mount(<App />)
    const instance = AppWrapper.instance()
    const filteredEvents = mockData.filter(
      (event) => event.location === 'London'
    )
    await instance.updateEvents('London')
    expect(AppWrapper.state().events).toEqual(filteredEvents)
    AppWrapper.unmount()
  })
})

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />)
    AppWrapper.setState({ isLoading: false })
    const AppEventsState = AppWrapper.state('events')
    expect(AppEventsState).not.toEqual(undefined)
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState)
    AppWrapper.unmount()
  })

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />)
    const AppLocationsState = AppWrapper.state('locations')
    expect(AppLocationsState).not.toEqual(undefined)
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    )
    AppWrapper.unmount()
  })

  test('App should load default number of events when launched', async () => {
    const AppWrapper = mount(<App />)
    const expectedNumEvents = mockData.length
    const { events } = await getEvents()
    AppWrapper.setState({ events })
    expect(AppWrapper.find(Event)).toHaveLength(expectedNumEvents)
    AppWrapper.unmount()
  })

  test('App passes `numberOfEvents` state as a prop to NumberOfEvents', () => {
    const AppWrapper = mount(<App />)
    const numberOfEvents = AppWrapper.state('numberOfEvents')
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(
      numberOfEvents
    )
    AppWrapper.unmount()
  })

  test('App receives state update for currentLocation when user selects location', async () => {
    const AppWrapper = mount(<App />)
    const CitySearchWrapper = AppWrapper.find(CitySearch)
    await CitySearchWrapper.instance().handleItemClicked('Berlin')
    expect(AppWrapper.state('currentLocation')).toBe('Berlin')
    AppWrapper.unmount()
  })

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />)
    const CitySearchWrapper = AppWrapper.find(CitySearch)
    const locations = extractLocations(mockData)
    CitySearchWrapper.setState({ suggestions: locations })
    const suggestions = CitySearchWrapper.state('suggestions')
    const selectedIndex = Math.floor(Math.random() * suggestions.length)
    const selectedCity = suggestions[selectedIndex]
    await CitySearchWrapper.instance().handleItemClicked(selectedCity)
    const allEvents = await getEvents()
    const eventsToShow = allEvents.events.filter(
      (event) => event.location === selectedCity
    )
    expect(AppWrapper.state('events')).toEqual(eventsToShow)
    AppWrapper.unmount()
  })

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />)
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li')
    suggestionItems.at(suggestionItems.length - 1).simulate('click')
    const allEvents = await getEvents()
    expect(AppWrapper.state('events')).toEqual(allEvents.events)
    AppWrapper.unmount()
  })
})
