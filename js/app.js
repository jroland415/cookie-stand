'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var cookieTable = document.getElementById('cookie-table');
Cookie.allStores = [];

function Cookie(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  Cookie.allStores.push(this);
}

Cookie.renderHeader = function() {
  var headerRow = document.createElement('tr');
  for(var i = 0; i < storeHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    headerRow.appendChild(thEl);
  }
  cookieTable.appendChild(headerRow);
}
Cookie.renderHeader();

Cookie.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
}
// new Cookie('1st and Pike', 23, 65, 6.3);

// firstAndPike
//   storeName: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,

// calcCustomers: function() {
//   var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   return numCustomers;
// },
// calcCookies: function() {
//   var numCookies = this.calcCustomers() * this.avgCookie;
//   return Math.ceil(numCookies);

// calcHourlySales: function() {
//   var hourlySales = [];
//   var totalCookiesSold = 0;
//   for(var i = 0; i < hours.length; i++) {
//     hourlySales[i] = this.calcCookies();
//     totalCookiesSold += hourlySales[i];
//   }
//   hourlySales.push(totalCookiesSold);
//   return hourlySales;


// seaTac
//   storeName: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,

//   calcCustomers: function() {
//     var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return numCustomers;
//   },
//   calcCookies: function() {
//     var numCookies = this.calcCustomers() * this.avgCookie;
//     return Math.ceil(numCookies);
//   },
//   calcHourlySales: function() {
//     var hourlySales = [];
//     var totalCookiesSold = 0;
//     for(var i = 0; i < hours.length; i++) {
//       hourlySales[i] = this.calcCookies();
//       totalCookiesSold += hourlySales[i];
//     }
//     hourlySales.push(totalCookiesSold);
//     return hourlySales;
//   },
  

// seattleCenter 
//   storeName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,

//   calcCustomers: function() {
//     var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return numCustomers;
//   },
//   calcCookies: function() {
//     var numCookies = this.calcCustomers() * this.avgCookie;
//     return Math.ceil(numCookies);
//   },
//   calcHourlySales: function() {
//     var hourlySales = [];
//     var totalCookiesSold = 0;
//     for(var i = 0; i < hours.length; i++) {
//       hourlySales[i] = this.calcCookies();
//       totalCookiesSold += hourlySales[i];
//     }
//     hourlySales.push(totalCookiesSold);
//     return hourlySales;
//   }

// capitolHill
//   storeName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,

//   calcCustomers: function() {
//     var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return numCustomers;
//   },
//   calcCookies: function() {
//     var numCookies = this.calcCustomers() * this.avgCookie;
//     return Math.ceil(numCookies);
//   },
//   calcHourlySales: function() {
//     var hourlySales = [];
//     var totalCookiesSold = 0;
//     for(var i = 0; i < hours.length; i++) {
//       hourlySales[i] = this.calcCookies();
//       totalCookiesSold += hourlySales[i];
//     }
//     hourlySales.push(totalCookiesSold);
//     return hourlySales;
//   },

// alki
//   storeName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,

//   calcCustomers: function() {
//     var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return numCustomers;
//   },
//   calcCookies: function() {
//     var numCookies = this.calcCustomers() * this.avgCookie;
//     return Math.ceil(numCookies);
//   },
//   calcHourlySales: function() {
//     var hourlySales = [];
//     var totalCookiesSold = 0;
//     for(var i = 0; i < hours.length; i++) {
//       hourlySales[i] = this.calcCookies();
//       totalCookiesSold += hourlySales[i];
//     }
//     hourlySales.push(totalCookiesSold);
//     return hourlySales;
//   },

// firstAndPike.renderSales();
// seaTac.renderSales();
// seattleCenter.renderSales();
// capitolHill.renderSales();
// alki.renderSales();
