const chai = require('chai');

const { expect } = chai;

const DateHelper = require('../src/Helpers/date');

describe('Date helper test', () => {
  it('the input 16Mar2009(mon) can be parsed', () => {
    const date = DateHelper.parseDate('16Mar2009(mon)');

    expect(date).to.be.equals('2009-03-16T00:00:00-03:00');
  });
  it('the input xxMar2009(mxo) neds to throw a exception', () => {
    const date = 'xxMar2009(mxo)';

    expect(() => DateHelper.parseDate(date)).to.be.throw(
      `the string ${date} has a invalid date format, use something like this: 16Mar2009(mon)`
    );
  });
  it('the input 16Mar2009(mon) is not a weekend', () => {
    const date = DateHelper.parseDate('16Mar2009(mon)');

    expect(DateHelper.isWeekend(date)).to.be.equals(false);
  });

  it('the input 21Mar2009(sat) is a weekend', () => {
    const date = DateHelper.parseDate('21Mar2009(sat)');

    expect(DateHelper.isWeekend(date)).to.be.equals(true);
  });
});
