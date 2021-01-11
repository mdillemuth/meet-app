# Meet App

## Description

Meet App is a serverless, progressive web application that uses the [Google Calendar API](https://developers.google.com/calendar) to fetch upcoming events. The app is built with React using a test-driven development (TDD) approach. The serverless function is hosted by the cloud provider AWS.

The app alows user to search for a city and get a list of events hosted in that city. The user can view charts that display how many events will take place in that city on upcoming days as well as view the popularity of event genres in the form of a pie chart.

## Quick Start 🚀

Currently the app can be viewed on [GitHub Pages](https://mdillemuth.github.io/meet-app/).
To run it locally yourself, clone the repository, and complete the following steps:

### Install dependencies

```bash
npm install
```

### Start application with npm and run in browser

_By default the app will run a local server on port: 3000_

```bash
npm run start
```

### Running application tests

```bash
npm run test
```

---

## Features

Described in terms of user stories and scenarios

### 1. Filter Events By City

#### User Story:

- As a _user_, I should be able to _“filter events by city”_ so that I can _see the list of events that take place in that city_

#### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities

- _Given_ user hasn't searched for any city
- _When_ the user opens the app
- _Then_ the user should see a list of all upcoming events-

#### Scenario 2: User should see a list of suggestions when they search for a city

- _Given_ the main page is open
- _When_ the user starts typing in the city textbox
- _Then_ the user should see a list of cities (suggestions) that match what they've typed

#### Scenario 3: User can select a city from the suggested list

- _Given_ the user was typing "Berlin" in the city textbox and the list of suggested cities is showing
- _When_ the user selects a city (e.g. "Berlin, Germany") from the list
- _Then_ their city should be changed to that city (i.e. "Berlin, Germany") and the user should receive a list of upcoming events in that city

### 2. Show/Hide An Event's Details

#### User Story:

- As a _user_, I would like to be able to _show/hide event details_ so that I can _see more/less information about an event_

#### Scenario 1: An event element is collapsed by default

- _Given_ the main page is open
- _When_ the app is rendered
- _Then_ the user should see a list of collapsed event elements for all cities

#### Scenario 2: User can expand an event to see its details

- _Given_ the list of upcoming events are displayed
- _When_ the user clicks 'show details' on the event element
- _Then_ the user should see the expanded event elements with its details

#### Scenario 3: User can collapse an event to hide its details

- _Given_ the user has clickend 'show details' on an event element
- _When_ the user clicks 'hide details' on the event element
- _Then_ the event element will close and the user will see the list of collapsed event elements

### 3. Specify Number of Events

#### User Story:

- As a _user_, I would like to be able to _specify the number of events I want to view in the app_ so that I can _see more or fewer events in the events list at once_

#### Scenario 1: When user hasn't specified a number, 32 is the default number

- _Given_ the main page is open
- _When_ the app has rendered
- _Then_ the app will display 32 as the number of events displayed by default

#### Scenario 2: User can change the number of events they want to see

- _Given_ the list of upcoming events are displayed
- _When_ the user enters the input box for 'number of events'
- _Then_ the user can change the number of events displayed on input

### 4. Use The App When Offline

#### User Story:

- As a _user_, I would like to be able to _use the app when offline_ so that I can _see the events I viewed the last time I was online_

#### Scenario 1: Show cached data when there's no internet connection

- _Given_ there is no internet connection
- _When_ the app is rendered
- _Then_ cached data will be displayed

#### Scenario 2: Show error when user changes the settings (city, time range)

- _Given_ there is no internet connection
- _When_ the user changes the settings
- _Then_ display an error message

### 5. Data Visualization

#### User Story:

- As a _user_, I would like to be able to _see a chart showing the upcoming events in each city_ so that _I know what events are organized in which city_

#### Scenario 1: Show a chart with the number of upcoming events in each city

- _Given_ the main page is open
- _When_ the app is rendered
- _Then_ show a chart with the number of upcoming events in each city

## How to Run App

## Dependencies

The app is bootstrapped using Create-React-App.

## API Information

The Meet App uses the [Google Calendar API](https://developers.google.com/calendar)
