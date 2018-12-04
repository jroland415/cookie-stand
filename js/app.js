'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

//renderStore creates h2 and ul elements
//renderSales creates li elements and adds to ul

var firstAndPike = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  renderStore: function() {
    var storeNameElement = document.createElement('h2');
    storeNameElement.textContent = `${this.storeName}`;
    var headElement = document.getElementById('heading');
    headElement.appendChild(storeNameElement);
    var NewUlElement = document.createElement('ul');
    NewUlElement.id = `${this.storeName} list`;
    storeNameElement.appendChild(NewUlElement);
  },
  calcCustomers: function() {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCustomers;
  },
  calcCookies: function() {
    var numCookies = this.calcCustomers() * this.avgCookie;
    return Math.ceil(numCookies);
  },
  calcHourlySales: function() {
    var hourlySales = [];
    var totalCookiesSold = 0;
    for(var i = 0; i < hours.length; i++) {
      hourlySales[i] = this.calcCookies();
      totalCookiesSold += hourlySales[i];
    }
    hourlySales.push(totalCookiesSold);
    return hourlySales;
  },
  renderSales: function() {
    this.renderStore();
    for(var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.calcHourlySales()[i]}`;
      var ulElement = document.getElementById(`${this.storeName} list`);
      ulElement.appendChild(liElement);
    }
  }
};

var seaTac = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  renderStore: function() {
    var storeNameElement = document.createElement('h2');
    storeNameElement.textContent = `${this.storeName}`;
    var headElement = document.getElementById('heading');
    headElement.appendChild(storeNameElement);
    var NewUlElement = document.createElement('ul');
    NewUlElement.id = `${this.storeName} list`;
    storeNameElement.appendChild(NewUlElement);
  },
  calcCustomers: function() {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCustomers;
  },
  calcCookies: function() {
    var numCookies = this.calcCustomers() * this.avgCookie;
    return Math.ceil(numCookies);
  },
  calcHourlySales: function() {
    var hourlySales = [];
    var totalCookiesSold = 0;
    for(var i = 0; i < hours.length; i++) {
      hourlySales[i] = this.calcCookies();
      totalCookiesSold += hourlySales[i];
    }
    hourlySales.push(totalCookiesSold);
    return hourlySales;
  },
  renderSales: function() {
    this.renderStore();
    for(var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.calcHourlySales()[i]}`;
      var ulElement = document.getElementById(`${this.storeName} list`);
      ulElement.appendChild(liElement);
    }
  }
};

var seattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  renderStore: function() {
    var storeNameElement = document.createElement('h2');
    storeNameElement.textContent = `${this.storeName}`;
    var headElement = document.getElementById('heading');
    headElement.appendChild(storeNameElement);
    var NewUlElement = document.createElement('ul');
    NewUlElement.id = `${this.storeName} list`;
    storeNameElement.appendChild(NewUlElement);
  },
  calcCustomers: function() {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCustomers;
  },
  calcCookies: function() {
    var numCookies = this.calcCustomers() * this.avgCookie;
    return Math.ceil(numCookies);
  },
  calcHourlySales: function() {
    var hourlySales = [];
    var totalCookiesSold = 0;
    for(var i = 0; i < hours.length; i++) {
      hourlySales[i] = this.calcCookies();
      totalCookiesSold += hourlySales[i];
    }
    hourlySales.push(totalCookiesSold);
    return hourlySales;
  },
  renderSales: function() {
    this.renderStore();
    for(var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.calcHourlySales()[i]}`;
      var ulElement = document.getElementById(`${this.storeName} list`);
      ulElement.appendChild(liElement);
    }
  }
};

var capitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  renderStore: function() {
    var storeNameElement = document.createElement('h2');
    storeNameElement.textContent = `${this.storeName}`;
    var headElement = document.getElementById('heading');
    headElement.appendChild(storeNameElement);
    var NewUlElement = document.createElement('ul');
    NewUlElement.id = `${this.storeName} list`;
    storeNameElement.appendChild(NewUlElement);
  },
  calcCustomers: function() {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCustomers;
  },
  calcCookies: function() {
    var numCookies = this.calcCustomers() * this.avgCookie;
    return Math.ceil(numCookies);
  },
  calcHourlySales: function() {
    var hourlySales = [];
    var totalCookiesSold = 0;
    for(var i = 0; i < hours.length; i++) {
      hourlySales[i] = this.calcCookies();
      totalCookiesSold += hourlySales[i];
    }
    hourlySales.push(totalCookiesSold);
    return hourlySales;
  },
  renderSales: function() {
    this.renderStore();
    for(var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.calcHourlySales()[i]}`;
      var ulElement = document.getElementById(`${this.storeName} list`);
      ulElement.appendChild(liElement);
    }
  }
};

var alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  renderStore: function() {
    var storeNameElement = document.createElement('h2');
    storeNameElement.textContent = `${this.storeName}`;
    var headElement = document.getElementById('heading');
    headElement.appendChild(storeNameElement);
    var NewUlElement = document.createElement('ul');
    NewUlElement.id = `${this.storeName} list`;
    storeNameElement.appendChild(NewUlElement);
  },
  calcCustomers: function() {
    var numCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCustomers;
  },
  calcCookies: function() {
    var numCookies = this.calcCustomers() * this.avgCookie;
    return Math.ceil(numCookies);
  },
  calcHourlySales: function() {
    var hourlySales = [];
    var totalCookiesSold = 0;
    for(var i = 0; i < hours.length; i++) {
      hourlySales[i] = this.calcCookies();
      totalCookiesSold += hourlySales[i];
    }
    hourlySales.push(totalCookiesSold);
    return hourlySales;
  },
  renderSales: function() {
    this.renderStore();
    for(var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.calcHourlySales()[i]}`;
      var ulElement = document.getElementById(`${this.storeName} list`);
      ulElement.appendChild(liElement);
    }
  }
};

firstAndPike.renderSales();
seaTac.renderSales();
seattleCenter.renderSales();
capitolHill.renderSales();
alki.renderSales();
