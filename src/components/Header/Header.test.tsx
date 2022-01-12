import { Header } from '.';
import { render } from '@testing-library/react';

describe('<Logo />', () => {
  it('use the correct logo', () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
