/* eslint-disable global-require */
const chai = require('chai');

const { expect } = chai;

describe('Integration test', () => {
  beforeEach(() => {
    if (require.cache[require.resolve('../src/index.js')])
      delete require.cache[require.resolve('../src/index.js')];
  });

  it('input is Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), should return Lakewood', async () => {
    process.argv[2] =
      'Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)';
    const index = require('../src/index');

    expect(await index.run()).to.equal('Lakewood');
  });
  it('input Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun), should return Bridgewood', async () => {
    process.argv[2] = 'Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)';
    const index = require('../src/index');

    expect(await index.run()).to.equal('Bridgewood');
  });
  it('input is Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat), should return Ridgewood', async () => {
    process.argv[2] =
      'Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)';
    const index = require('../src/index');
    expect(await index.run()).to.equal('Ridgewood');
  });
});
