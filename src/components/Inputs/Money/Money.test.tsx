import Money from '.';
import { fireEvent, render } from '@testing-library/react';

describe('<Money />', () => {
  it('render de component', () => {
    const component = render(
      <Money onAmountChange={() => null} value={350044} />
    );
    expect(component).toMatchSnapshot();
  });
  it('not allowing string', () => {
    const component = render(<Money onAmountChange={() => null} value={0.0} />);
    const input = component.getByTestId('input-amount');

    fireEvent.change(input, { target: { value: 'string' } });
    expect(input).toHaveValue('0.00');
  });
});
