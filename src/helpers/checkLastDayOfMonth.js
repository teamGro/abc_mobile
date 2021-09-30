import months from './months';

function checkLastDayOfMonth(year, month, day) {
  let monthNum = month;
  for (let i = 0; i < months.length; i += 1) {
    if (month === months[i]) {
      monthNum = i;
      break;
    }
  }

  const date = new Date(year, monthNum + 1, 0);
  if (day > date.getDate()) {
    return {
      status: false,
      lastDay: date.getDate(),
    };
  }

  return {
    status: true,
  };
}

export default checkLastDayOfMonth;
