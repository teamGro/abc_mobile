function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  let m = today.getMonth() - birthDate.getMonth();
  const d = today.getDay() - birthDate.getDay();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  if (age === 0) {
    m = 12 + m;
    if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
      m -= 1;
    }
  }

  return age || m;
}

export default getAge;
