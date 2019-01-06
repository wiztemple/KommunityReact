import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../../../pages/HomePage';
import store from '../../../store';

afterEach(cleanup);

describe('HomePage Section  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <HomePage store={store} />
    </Router>);
  });
});
