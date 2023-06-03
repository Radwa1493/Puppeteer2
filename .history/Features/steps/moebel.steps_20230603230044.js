import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('Features/Login.feature');
defineFeature(feature, test => {
    test('User can\'t login with invalid credincials', ({ given }) => {
        given('Open Url', () => {
console.log(eeeeeeeee')
        });
    });
  });