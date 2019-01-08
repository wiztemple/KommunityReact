import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Card from '../../../components/containers/Cards/Card';
import store from '../../store';
import { questions } from '../../mockData';

afterEach(cleanup);

const questionStore = store(questions);

describe('Card Section  component', () => {
  it('should render without crashing', () => {
    render(
      <Card store={questionStore} />
    );
  });
});
