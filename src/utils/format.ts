export const formatCurrency = (value: number): string => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatLargeNumber = (value: number): string => {
  if (value >= 1_000_000_000_000) {
    return `US$ ${(value / 1_000_000_000_000).toFixed(2)} T`;
  }

  if (value >= 1_000_000_000) {
    return `US$ ${(value / 1_000_000_000).toFixed(2)} B`;
  }

  if (value >= 1_000_000) {
    return `US$ ${(value / 1_000_000).toFixed(2)} M`;
  }

  return formatCurrency(value);
};