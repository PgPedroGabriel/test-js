const chai = require('chai');

const { expect } = chai;

const HotelsRepository = require('../src/Repositories/Hotels');

describe('Repositories test', () => {
  it('Hotel repositories needs to return a length of 3 hotels', async () => {
    const hotels = await HotelsRepository.getHotels();

    expect(hotels.length).to.equal(3);
  });
});
