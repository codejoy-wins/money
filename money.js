function moneyGenerator(){
    // i want 1,10,100,1000...
    var money = []
    var start = 1;
    for (var i = 1; i <=18; i++){
        money.push(i-1 + " zeros");
        money.push(start);
        start = start*10;
    }
    console.log(money);
}
moneyGenerator();