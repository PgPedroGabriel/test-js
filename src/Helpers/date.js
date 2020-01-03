const moment = require('moment');

const WEEKEND_DAYS = ['Sat', 'Sun'];

const isWeekend = date => {
  return WEEKEND_DAYS.includes(moment(date).format('ddd'));
};

const isValidFormat = string => {
  return moment(string, 'DDMMMYYYY(ddd)').isValid();
};

// Function to parse a date in format DDMMMYYYY(ddd) 16Mar2009(mon)
const parseDate = string => {
  if (!isValidFormat(string)) {
    throw new Error(
      `the string ${string} has a invalid date format, use something like this: 16Mar2009(mon)`
    );
  }

  return moment(string, 'DDMMMYYYY(ddd)').format();
};

module.exports = {
  parseDate,
  isValidFormat,
  isWeekend
};
