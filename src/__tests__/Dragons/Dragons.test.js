import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../../features/dragons/Dragons';
import store from '../../app/store';
import { render, screen } from '@testing-library/react';

const DragonsMock = () => (
  <Provider store={store}>
    <Dragons />
  </Provider>
);

describe('Mission component', () => {
  it('should match the snapshot', () => {
    const shot = renderer.create(<DragonsMock />).toJSON();
    expect(shot).toMatchSnapshot();
  });
});
