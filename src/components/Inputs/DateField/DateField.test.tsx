import DateField from '.';
import { fireEvent, render } from '@testing-library/react';

describe('<DateField />', () => {
  it('render de component', () => {
    const component = render(
      <DateField onReachDateChange={() => null} value={new Date()} />
    );

    expect(component).toMatchSnapshot();
  });
  it('change the month', () => {
    const { container } = render(
      <DateField onReachDateChange={() => null} value={new Date()} />
    );
    const input = container.querySelector('input[name="reachDate"]');

    fireEvent.change(input, { target: { value: 'September' } });
    expect(input).toHaveValue('September');
  });
});
