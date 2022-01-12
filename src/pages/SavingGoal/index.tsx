import { useState, useCallback } from 'react';
import addMonths from 'date-fns/addMonths';
import differenceInMonths from 'date-fns/differenceInMonths';

import { formatCurrency } from '../../functions';
import * as S from './styles';
import {
  container as Container,
  button as Button,
  H1,
} from '../../styles/global';
import Card from '../../components/Card';
import house from '../../assets/icons/buy-a-house.svg';
import Money from '../../components/Inputs/Money';
import DateField from '../../components/Inputs/DateField';

function SavingGoal(): JSX.Element {
  const [amount, setAmount] = useState(0);
  const [reachDate, setReachDate] = useState<Date>(addMonths(new Date(), 1));
  const handleAmountChange = useCallback((amount): void => {
    setAmount(amount);
  }, []);

  const handleReachDateChange = useCallback((reachDate): void => {
    setReachDate(reachDate);
  }, []);

  const months = differenceInMonths(reachDate, new Date());
  const saving = Number(amount) / Number(months + 1);
  const savingFormated = formatCurrency(saving);

  return (
    <Container>
      <H1>
        Lets plan your <strong>saving goal</strong>
      </H1>

      <Card>
        <S.goal>
          <img src={house} alt="House goal" />
          <div>
            <h2>Buy a house</h2>
            <span>Saving goal</span>
          </div>
        </S.goal>

        <S.inputs>
          <S.singleInput>
            <label>Total amount</label>
            <Money onAmountChange={handleAmountChange} value={amount} />
          </S.singleInput>
          <S.singleInput>
            <label>Reach goal by</label>
            <DateField
              onReachDateChange={handleReachDateChange}
              value={reachDate}
            />
          </S.singleInput>
        </S.inputs>

        <S.monthlyAmount>
          <S.amount>
            <h3>Monthly amount</h3>
            <span id="result-formated">{savingFormated}</span>
          </S.amount>
          <S.result>
            You’re planning <strong>{months + 1} monthly deposits</strong> to
            reach your <strong>{formatCurrency(amount)}</strong> goal by{' '}
            <strong>
              {reachDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </strong>
            .
          </S.result>
        </S.monthlyAmount>

        <Button>
          <button>Confirm</button>
        </Button>
      </Card>
    </Container>
  );
}

export default SavingGoal;
