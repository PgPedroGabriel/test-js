const ArgvHelper = require('./Helpers/argv');
const HotelsService = require('./Services/Hotels');

const run = async () => {
  const argv = process.argv.splice(2);

  if (argv === null || argv[0].length === 0) {
    throw new Error('Incorrect arguments to execute the program');
  }

  const parsedData = ArgvHelper.parse(argv[0]);

  const sumHotels = await HotelsService.sumPricesForClientTypeAndDates(
    parsedData.clientType,
    parsedData.dates
  );

  const hotel = HotelsService.getHotelWithLessPrice(sumHotels);

  if (!process.env.ISTEST) {
    console.info(hotel.name);
  }

  return hotel.name;
};

if (process.env.ISTEST) {
  module.exports = { run };
} else {
  run();
}
