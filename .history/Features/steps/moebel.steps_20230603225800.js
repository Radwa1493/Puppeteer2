import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('Features/*.feature');
defineFeature(feature, test => {
    test('Entering a correct password', ({ given, when, then }) => {
  
    });
  });