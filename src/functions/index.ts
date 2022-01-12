export const formatCurrency = (value: number): string => {
  return (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
