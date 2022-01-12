export const formatCurrency = (value: number) => {
  return (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
