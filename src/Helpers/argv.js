/*
  this function should return a structured object
  input sample: Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)
  return sample:
   {
     clientType: 'Regular',
     dates: [
       '2009-03-16T00:00:00-03:00',
       '2009-03-17T00:00:00-03:00',
       '2009-03-18T00:00:00-03:00'
     ]
   }
*/

const DateHelper = require('./date');

const parse = input => {
  if (input === null || typeof input !== 'string') {
    throw new Error('You are sending incorrect type of input');
  }

  input = input.replace(/ /g, '');

  const splited = input.split(':');

  if (splited.length === 1) {
    throw new Error('You are sending incorrect type of input');
  }

  const clientType = splited[0];

  const stringDates = splited[1];

  const datesSplited = stringDates.split(',');
  const dates = [];

  datesSplited.forEach(dateString => {
    dates.push(DateHelper.parseDate(dateString));
  });

  return {
    clientType,
    dates
  };
};

module.exports = {
  parse
};
