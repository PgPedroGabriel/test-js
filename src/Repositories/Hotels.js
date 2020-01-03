const getHotels = () => {
  return new Promise(resolve => {
    resolve([
      {
        name: 'Lakewood',
        classification: 3,
        regular_business_day: 110.0,
        rewards_business_day: 80.0,
        regular_weekend_day: 90.0,
        rewards_weekend_day: 80.0
      },
      {
        name: 'Bridgewood',
        classification: 4,
        regular_business_day: 160.0,
        rewards_business_day: 110.0,
        regular_weekend_day: 60.0,
        rewards_weekend_day: 50.0
      },
      {
        name: 'Ridgewood',
        classification: 5,
        regular_business_day: 220.0,
        rewards_business_day: 100.0,
        regular_weekend_day: 150.0,
        rewards_weekend_day: 40.0
      }
    ]);
  });
};

module.exports = {
  getHotels
};
