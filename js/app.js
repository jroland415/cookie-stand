'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var cookieTable = document.getElementById('cookie-table');
Cookie.allStores = [];
var cookieForm = document.getElementById('new-location-form');

function Cookie(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalSoldStore = 0;
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
  tdEl.id = 'store-name';
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < storeHours.length - 1; i++) {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

    var numCookies = Math.ceil(numCustomers * this.avgCookie);
    this.totalSoldStore += numCookies;

    tdEl = document.createElement('td');
    tdEl.textContent = numCookies;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.id = 'total-per-store';
  tdEl.textContent = this.totalSoldStore;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};

Cookie.addNewLocation = function(event) {
  event.preventDefault();

  var newLocation = event.target.locationName.value;
  var newMin = event.target.minPerHour.value;
  var newMax = event.target.maxPerHour.value;
  var newAvg = event.target.avgCook.value;
  var newCookieStand = new Cookie(newLocation, newMin, newMax, newAvg);

  cookieTable.textContent = '';
  Cookie.renderHeader();
  Cookie.renderAllStores();
};

var firstAndPike = new Cookie('1st and Pike', 23, 65, 6.3);
var seaTac = new Cookie('SeaTac', 3, 24, 1.2);
var seattleCenter = new Cookie('Seattle Center', 11, 38, 3.7);
var capitolHill = new Cookie('Capitol Hill', 20, 38, 2.3);
var alki = new Cookie('Alki', 2, 16, 4.6);

Cookie.renderAllStores = function() {
  for(var i = 0; i < Cookie.allStores.length; i++) {
    Cookie.allStores[i].render();
  }
};

Cookie.renderHeader();
Cookie.renderAllStores();

cookieForm.addEventListener('submit', Cookie.addNewLocation);
