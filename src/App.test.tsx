import { App } from './App';
import { render } from '@testing-library/react';

describe('App', () => {
  describe('using testing library', () => {
    it('returns the text', () => {
      const component = render(<App />);

      expect(component).toMatchSnapshot();
    });
  });
});
