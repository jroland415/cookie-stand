'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var firstAndPike = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  numCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
}

var seaTac = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  numCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
}

var seattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  numCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
}

var capitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  numCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
}

var alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  numCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
}