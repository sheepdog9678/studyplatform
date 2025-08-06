export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2); // 0부터 시작하므로 +1
  const day = `0${date.getDate()}`.slice(-2);
  return `${year}.${month}.${day}`;
};
