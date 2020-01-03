const chai = require('chai');

const { expect } = chai;

const ArgvHelper = require('../src/Helpers/argv');

describe('Argv helper test', () => {
  it('the input Regular: 16Mar2009(mon) can extract the user type', async () => {
    const result = ArgvHelper.parse('Regular: 16Mar2009(mon)');
    expect(result.clientType).to.be.equals('Regular');
  });
  it('the input Regular: 16Mar2009(mon) can extract the date on string format (YYYY-MM-DDTHH:mm:SS-03:00)', async () => {
    const result = ArgvHelper.parse('Regular: 16Mar2009(mon)');
    expect(result.dates[0]).to.be.equals('2009-03-16T00:00:00-03:00');
  });
  it('the input Regular: 16Mar2009(mon) can be transformed in a object', async () => {
    const result = ArgvHelper.parse('Regular: 16Mar2009(mon)');
    expect(result).to.be.eql({
      clientType: 'Regular',
      dates: ['2009-03-16T00:00:00-03:00']
    });
  });
});
