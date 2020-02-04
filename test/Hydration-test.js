const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const User = require('../src/User');

describe('Hydration', function() {
  let hydration;

  beforeEach(function() {
    hydration = new Hydration(1, '2019/06/15', 37);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should calculate the average fluid ounces consumed daily for all time', function(){
    let user = new User({id:1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]});
    user.logHydration(1, "2019/06/15", 37);
    user.logHydration(1, "2019/08/15", 75)
    user.logHydration(1, "2019/03/15", 75)
    expect(hydration.calculateAvgHydration(user)).to.equal(62);
  });

  it('should find how many ounces were consumed on a given day', function(){
    let user = new User({id:1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]});
    user.logHydration(1, "2019/06/15", 37);
    user.logHydration(1, "2019/08/15", 75)
    user.logHydration(1, "2019/03/15", 42)
    expect(hydration.findDailyHydration(user, "2019/08/15")).to.equal(75);
  });

  it('find How many fluid ounces of water consumed each day over the course of a week (7 days)', function(){
    let user = new User({id:1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]});
    user.logHydration(1, "2019/06/15", 37);
    user.logHydration(1, "2019/06/16", 75)
    user.logHydration(1, "2019/06/17", 42)
    user.logHydration(1, "2018/06/18", 42)
    user.logHydration(1, "2019/06/19", 42)
    user.logHydration(1, "2019/06/20", 42)
    user.logHydration(1, "2019/06/21", 42)
    user.logHydration(1, "2019/06/22", 42)
    user.logHydration(1, "2019/06/23", 42)
    user.logHydration(1, "2019/06/24", 42)
    user.logHydration(1, "2019/06/25", 42)
    user.logHydration(1, "2019/06/26", 42)

    hydration.findWeeklyHydration(user, "2019/06/25")
    // expect(hydration.findDailyHydration(user, "2019/08/15")).to.equal(75);
  });

});
