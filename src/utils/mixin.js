export const Naira = '\u20A6';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Mixin = {
  turnToLower(a) {
    for (let i in a) {
      a = {
        ...a,
        [i]: a[i] ? `${a[i]}`.toLowerCase() : null,
      };
    }
    return a;
  },
  formatTime(date) {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();

    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes}${ampm}`;
  },
  formatDate(date) {
    return `${months[new Date(date).getMonth()]} ${new Date(
      date
    ).getDate()}, ${new Date(date).getFullYear()}`;
  },

  capitalize: (string) => string.charAt(0).toUpperCase() + string.slice(1),
  validateName: (value) =>
    /^[a-zA-Z]+ [a-zA-Z]+$/.test(value) && value.length > 5,
  validatePassword: (value) => /^([0-9]|[a-z])+([0-9a-z]+)$/i.test(value),
  validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  validatePhone: (value) => /^\d+$/.test(value) && value.length === 11,
  validateNumbers: (value) => /^\d+$/.test(value),
  validatePlateNumber(value) {
    //   ;
    const start = value.slice(0, 3);
    const end = value.slice(-2);

    const mid = value.slice(3, 6);

    return /^\d+$/.test(mid) && /^[a-z]+$/i.test(start + end);
  },
  formatAmount: (amount) =>
    amount
      ? Naira + parseFloat(parseFloat(amount).toFixed(2)).toLocaleString('en')
      : Naira + '0.00',
};

export default Mixin;
