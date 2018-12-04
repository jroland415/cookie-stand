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
  var thEl = document.createElement('th');
  thEl.textContent = '';
  headerRow.appendChild(thEl);
  for(var i = 0; i < storeHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    headerRow.appendChild(thEl);
  }
  cookieTable.appendChild(headerRow);
};


Cookie.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  var totalSoldStore = 0;
  for(var i = 0; i < storeHours.length - 1; i++) {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

    var numCookies = Math.ceil(numCustomers * this.avgCookie);
    totalSoldStore += numCookies;

    tdEl = document.createElement('td');
    tdEl.textContent = numCookies;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalSoldStore;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};
new Cookie('1st and Pike', 23, 65, 6.3);
new Cookie('SeaTac', 3, 24, 1.2);
new Cookie('Seattle Center', 11, 38, 3.7);
new Cookie('Capitol Hill', 20, 38, 2.3);
new Cookie('Alki', 2, 16, 4.6);

Cookie.renderAllStores = function() {
  for(var i = 0; i < Cookie.allStores.length; i++) {
    Cookie.allStores[i].render();
  }
};

Cookie.renderHeader();
Cookie.renderAllStores();

// calcHourlySales: function() {
//   var hourlySales = [];
//   var totalCookiesSold = 0;
//   for(var i = 0; i < hours.length; i++) {
//     hourlySales[i] = this.calcCookies();
//     totalCookiesSold += hourlySales[i];
//   }
//   hourlySales.push(totalCookiesSold);
//   return hourlySales;
