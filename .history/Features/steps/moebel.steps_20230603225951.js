import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('Features\Login.feature');
defineFeature(feature, test => {
    test('Entering a correct password', ({ given, when, then }) => {
  
    });
  });