import { useCallback } from 'react';
import DatePicker from 'react-datepicker';
import addMonths from 'date-fns/addMonths';

import * as S from '../Container';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  onReachDateChange: (value: Date) => void;
  value: Date;
}

function DateField({ onReachDateChange, value }: Props): JSX.Element {
  const handleChange = useCallback(
    (date) => onReachDateChange(date),
    [onReachDateChange]
  );

  return (
    <S.container>
      <DatePicker
        selected={value}
        onChange={(date) => handleChange(date)}
        minDate={addMonths(new Date(), 0)}
        dateFormat="MMMM"
        showMonthYearPicker
        showFourColumnMonthYearPicker
        name="reachDate"
      />
    </S.container>
  );
}

export default DateField;
