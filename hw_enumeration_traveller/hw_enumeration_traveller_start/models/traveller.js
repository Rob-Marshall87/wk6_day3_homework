const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let journeys = this.journeys;
  const startLocations = journeys.map((journey) => {
    return journey.startLocation
  });
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  let journeys = this.journeys;
  const endLocations = journeys.map((journey) => {
    return journey.endLocation
  });
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeys = this.journeys;
  journeysArray = journeys.filter( (journey) => {
    return journey.transport == transport;
  });
  return journeysArray;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys;
  const journeysArray = journeys.filter( (journey) => {
    return journey.distance > minDistance;
  });
  return journeysArray
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeys = this.journeys;
  const journeysDistance = journeys.map( (journey) => {
    return journey.distance;
  });

  const totalDistance = journeysDistance.reduce( (total, sum) => {
    return (total + sum);
  });
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const journeys = this.journeys;

const distinct = (value, index, self) => {
  return self.indexOf(value) === index;
};

const journeysTransportModes = journeys.map( (journey) => {
  return journey.transport;
});
// console.log(journeysTransportModes);
const uniqueTransport = journeysTransportModes.filter(distinct);
// console.log(uniqueTransport);
return uniqueTransport;
};

module.exports = Traveller;
