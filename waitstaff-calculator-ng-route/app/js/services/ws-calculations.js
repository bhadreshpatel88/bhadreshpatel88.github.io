app.factory('wsTipTotal', function(){
    var wsTipTotal = {};

    wsTipTotal.data = {
      price:    0,
      tax:      0,
      tip:      0,

      subTotal: 0,
      tipCalc:  0,
      totalCalc:0,

      tipTotal: 0,
      mealCount:0,
      avgTip:   0
    };

    wsTipTotal.doCalc = function(data){
      wsTipTotal.data.subTotal  = data.price * (1 + data.tax / 100);
      wsTipTotal.data.tipCalc   = wsTipTotal.data.subTotal * (data.tip / 100);
      wsTipTotal.data.totalCalc = wsTipTotal.data.subTotal + wsTipTotal.data.tipCalc;

      wsTipTotal.data.tipTotal += wsTipTotal.data.tipCalc;
      wsTipTotal.data.mealCount++;
      wsTipTotal.data.avgTip    = wsTipTotal.data.tipTotal / wsTipTotal.data.mealCount;
    };

    wsTipTotal.reset = function(){
      return wsTipTotal.data = {};
    };

    return wsTipTotal;
  })