const chai = require('chai');

const { expect } = chai;

const HotelsService = require('../src/Services/Hotels');

describe('Hotel service test', () => {
  it('can be sum hotels price with dates', async () => {
    const clientType = 'Regular';
    const dates = [
      '2009-03-16T00:00:00-03:00',
      '2009-03-17T00:00:00-03:00',
      '2009-03-18T00:00:00-03:00'
    ];

    const sumPrices = await HotelsService.sumPricesForClientTypeAndDates(
      clientType,
      dates
    );

    expect(sumPrices).to.be.eql([
      {
        name: 'Lakewood',
        classification: 3,
        price: 330.0
      },
      {
        name: 'Bridgewood',
        classification: 4,
        price: 480.0
      },
      {
        name: 'Ridgewood',
        classification: 5,
        price: 660.0
      }
    ]);
  });
  it('can should return hotel with less price', async () => {
    const clientType = 'Regular';
    const dates = [
      '2009-03-16T00:00:00-03:00',
      '2009-03-17T00:00:00-03:00',
      '2009-03-18T00:00:00-03:00'
    ];

    const sumPrices = await HotelsService.sumPricesForClientTypeAndDates(
      clientType,
      dates
    );

    const hotel = HotelsService.getHotelWithLessPrice(sumPrices);
    expect(hotel).to.be.eql({
      name: 'Lakewood',
      classification: 3,
      price: 330.0
    });
  });
});
