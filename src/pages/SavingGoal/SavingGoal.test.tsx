import SavingGoal from '.';
import { fireEvent, render } from '@testing-library/react';
import addMonths from 'date-fns/addMonths';
import differenceInMonths from 'date-fns/differenceInMonths';
import { formatCurrency } from '../../functions';

describe('<SavingGoal />', () => {
  it('render the page', () => {
    const component = render(<SavingGoal />);
    expect(component).toMatchSnapshot();
  });
  it('show the correct monthly amount', () => {
    const component = render(<SavingGoal />);

    const { container } = component;

    // money component
    const amount = 50000;
    const inputAmount = component.getByTestId('input-amount');

    fireEvent.keyDown(inputAmount, { key: 5, code: 53, charCode: 53 });
    fireEvent.keyDown(inputAmount, { key: 0, code: 48, charCode: 48 });
    fireEvent.keyDown(inputAmount, { key: 0, code: 48, charCode: 48 });
    fireEvent.keyDown(inputAmount, { key: 0, code: 48, charCode: 48 });
    fireEvent.keyDown(inputAmount, { key: 0, code: 48, charCode: 48 });

    // reachDate component
    const reachDate = addMonths(new Date(), 4);
    const inputReachDate = container.querySelector('input[name="reachDate"]');
    fireEvent.change(inputReachDate, { target: { value: reachDate } });

    const months = differenceInMonths(reachDate, new Date());
    const saving = Number(amount) / Number(months + 1);
    const savingFormated = formatCurrency(saving);
    const result = container.querySelector('#result-formated');

    expect(result).toHaveTextContent(savingFormated);
  });
});
