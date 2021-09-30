import months from './months';

function transformDate(date) {
  const day = date[0];
  let month = date[1];
  for (let i = 0; i < months.length; i += 1) {
    if (month === months[i]) {
      month = i;
      break;
    }
  }
  const year = date[2];

  // return `${year}.${month}.${day}`;
  return new Date(year, month, day);
}

export default transformDate;
