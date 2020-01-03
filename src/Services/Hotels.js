const HotelsRepository = require('../Repositories/Hotels');
const DateHelper = require('../Helpers/date');

const sumPricesForClientTypeAndDates = async (clientType, dates) => {
  const hotels = await HotelsRepository.getHotels();

  clientType = clientType.toLowerCase();

  return hotels.reduce((current, hotel) => {
    let price = 0;

    const { name, classification } = hotel;

    dates.forEach(date => {
      const dayType = DateHelper.isWeekend(date) ? 'weekend' : 'business';
      price += hotel[`${clientType}_${dayType}_day`];
    });

    current.push({
      name,
      classification,
      price
    });

    return current;
  }, []);
};

const getHotelWithLessPrice = hotels => {
  return hotels.reduce((current, hotel) => {
    if (current === null) {
      current = hotel;
    }

    if (hotel.price < current.price) {
      current = hotel;
    }

    if (
      hotel.price === current.price &&
      hotel.classification > current.classification
    ) {
      current = hotel;
    }

    return current;
  }, null);
};

module.exports = {
  sumPricesForClientTypeAndDates,
  getHotelWithLessPrice
};
