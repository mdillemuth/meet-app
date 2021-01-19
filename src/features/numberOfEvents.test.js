import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import React from 'react';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, (test) => {
  test("When the user hasn't specified a number, 24 is the default number", ({
    given,
    when,
    then,
  }) => {
    given('the main page is open', () => {});

    let AppWrapper;
    when('the app is rendered', () => {
      AppWrapper = mount(<App />);
    });

    then('the app will display 24 events', () => {
      AppWrapper.update();
      // We can only expect 2 events, which is the number of events in mockData
      expect(AppWrapper.find('.Event')).toHaveLength(2);
      // When online, the app will display the number of events in the App's state below
      expect(AppWrapper.state('numberOfEvents')).toBe('24');
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the list of upcoming events is displayed', () => {
      AppWrapper = mount(<App />);
    });

    when(
      'the user enters a number into the `number of events` input box',
      () => {
        const eventObject = { target: { value: '1' } };
        AppWrapper.find('.number').simulate('change', eventObject);
      }
    );

    then('the user will see the number of events they specified', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('1');
    });
  });
});
