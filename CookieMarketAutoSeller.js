// ==UserScript==
// @name         Cookie Auto Stonks Auto Seller
// @namespace    http://thebladeroden.com/
// @version      1.0
// @description  Cookie Auto Stonks Auto Seller
// @author       TheBladeRoden
// @match        https://orteil.dashnet.org/cookieclicker/
// @homepageURL  https://github.com/thebladeroden/Cookie-Stonks
// @supportURL   https://github.com/thebladeroden/Cookie-Stonks/issues
// @updateURL    https://raw.githubusercontent.com/suicidejerk/Cookie-Stonks/master/cookieStonks.user.js
// @icon         https://raw.githubusercontent.com/suicidejerk/Cookie-Stonks/main/cookieDollar.png
// @license      MIT
// @grant        none
// @include 		https://orteil.dashnet.org/cookieclicker/*
// ==/UserScript==

var stockMarket = Game.Objects['Bank'].minigame;

let i = 0;
while (i < 10) {
  task(i);
   i++;
}

function task(i) {
  setTimeout(function() {	
      let sm = Game.Objects['Bank'].minigame;
    	console.log('Is this working at all?');
      for(let i = 0; i < 16/*sm.goodsById.length*/; i++) {
        console.log(sm.goodsById[i].icon);
        }
    }, 5000 * i);
}

/*function task(i) {
  setTimeout(function() {
    //var id = 0;
   // console.log(i);
    for(var id = 0; id < 16/*M.goodsById.length*///; id++){
      //let id = iG;
     // let mySymbol = getMySymbol(id);
      //let me=M.goodsById[id];
     // console.log('Is this working at all?' + id + iG);
      
     // console.log('me: '+me.name+' id: '+id+' iG: '+iG);
  //  }
    //console.log('Updating prices!');
 // }, 5000 * i);
//}*/

/*function getMySymbol(id) {	
  	console.log('Here its working');
  	let me=M.goodsById[id];
    console.log('Heres where it breaks');
  	let mySymbol = me.symbol;
    return mySymbol(id);
}*/




/*function getMyID(id) {
    return id;
}


function getCurrentValue(id, value) {
  
}


/*const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*Use like so*/

/*async function timeSensitiveAction(){ //must be async func
  //do something here
  await sleep(5000) //wait 5 seconds
  console.log('Is sleeping working?');
  //continue on...
}

timeSensitiveAction();


/* will test later


function getMyID(id, bankLevel) {
    return id;
}

function getCurrentValue(id, value, bankLevel) {
	//console.log('The id for getCurrentValue is') + id;
    let restingValue = getRestingValue(id, bankLevel);
    let currentValue = (((parseFloat(value.replace('$', '')) / restingValue * 100).toFixed(2))* restingValue)/100;
		//console.log('The current value is ' + value + ' and ' + currentValue);
    return currentValue;
}

for(var iG = 0; iG < M.goodsById.length; iG++) {
  var good = M.goodsById[iG];
  var conf = IdleTrading.config.goods[iG];
  var price = Math.round(100 * M.getGoodPrice(good)) / 100;
  var stock = good.stock;

  if (IdleTrading.config.autoSell && conf.sellThresh != -1) {
    if (price >= conf.sellThresh && stock > 0) {
      M.sellGood(iG, 10000);
      if (good.stock != stock) {
        Game.Notify('Selling ' + good.name, 'The price was ' + price + '$ per unit', goodIcons[iG], false);
      }
    }
  }
  if (IdleTrading.config.autoBuy && conf.buyThresh != -1) {
    if (price <= conf.buyThresh) {
      M.buyGood(iG, 10000);
      if (good.stock != stock) {
        Game.Notify('Buying ' + good.name, 'The price was ' + price + '$ per unit', goodIcons[iG], false);
      }
    }
  }
  if(price < conf.minPrice) conf.minPrice = price;
  if(price > conf.maxPrice) conf.maxPrice = price;
}

M.tradeTooltip=function(id,n)
		{
			return function(){
				var me=M.goodsById[id];
				var icon=me.icon||[0,0];
				var val=M.getGoodPrice(me)
				var cost=Game.cookiesPsRawHighest*val;
				var buyOrSell=n>0;
				var overhead=1;
				var stock=me.stock;
				var maxStock=M.getGoodMaxStock(me);
				if (buyOrSell) overhead*=1+0.01*(20*Math.pow(0.95,M.brokers));
				cost*=overhead;
				if (n==10000) n=Math.floor(Game.cookies/cost);
				else if (n==-10000) n=me.stock;
				n=Math.abs(n);
				if (buyOrSell) n=Math.min(n,maxStock-stock);
				if (!buyOrSell) n=Math.min(n,stock);
        
        */
