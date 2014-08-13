
function calculateTotal2(frm){
   var years2 = frm.years2.value
   var rate2  = frm.rate2.value
   var amount2 = frm.amount2.value
   var total2 = 0
  var tmp = Math.pow(1+parseInt(rate2),years2)
   total2 = Math.pow((amount2)*(rate2)*(1+parseInt(rate2)),years2)/tmp

   frm.total2.value = tmp
}

function calculateTotal3(frm){
   var deposits3 = frm.deposits3.value
   var withdraws3 = frm.withdraws3.value
   var rate3  = frm.rate3.value
   var amount3 = frm.amount3.value
   var time3 = 0
   while (amount3 > 3){
    time3 = 1 + parseInt(time3);
    amount3 = parseInt(amount3)+parseInt(amount3)*parseInt(rate3)+parseInt(deposits3)-parseInt(withdraws3);
   }     
    
  years3 = time3/12
  years3 = parseInt(years3)
  months3 = time3%12 
  
  frm.years3.value = years3
  frm.months3.value = months3
}

function calculateTotal4(frm){
   var years4 = frm.years4.value
   var rate4  = frm.rate4.value
   var amount4 = frm.amount4.value
   var total4 = 0
    total4 = amount4 * (1 + parseInt(rate4)*years4)
  frm.total4.value = total4 
}

function calculateTotal5(frm){
   var years5 = frm.years5.value
   var rate5  = frm.rate5.value
   var amount5 = frm.amount5.value
   var total5 = 0
    total5 = amount5/years5
    payment5=parseInt(total5)+parseInt(total5)*(rate5/100)
  frm.payment5.value = payment5 
}

function calculateTotal7(frm){
   var years7 = frm.years7.value
   var rate7  = frm.rate7.value
   var amount7 = frm.amount7.value
   var number7 = frm.number7.value
   var total7 = 0
    total7 = parseInt(amount7)*Math.pow((1 + parseInt(rate7)/number7),(number7*years7))
  frm.total7.value = total7 
}
function calculateTotal6(frm){
   var deposits6 = frm.deposits6.value
   var withdraws6 = frm.withdraws6.value
   var rate6  = frm.rate6.value
   var amount6 = frm.amount6.value
   var total6 = 0
    time6 = 0
  while (amount6 > 6){
    time6 = 1 + parseInt(time6);
    amount6 = parseInt(amount6)+parseInt(amount6)*parseInt(rate6)+parseInt(deposits6)-parseInt(withdraws6);
   }     
    
  years6 = time6/12
  years6 = parseInt(years6)
  months6 = time6%12
  frm.years6.value = years6 
  frm.months6.value = months6
}
