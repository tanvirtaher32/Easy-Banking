let depositField = document.getElementById('depositField');
let depositBtn = document.getElementById('deposit-btn');
let balanceShow = document.getElementById('balanceShow');
let withdrawShow = document.getElementById('withdrawShow');
let withdrawField = document.getElementById('withdrawField');
let withdrawBtn = document.getElementById('withdraw-btn');


let balanceShowText;
let balanceShowValue;
depositBtn.addEventListener('click',function(){
    
    //   document.getElementById('depositShow').innerText =  depositField.value;
      let deposit = document.getElementById('depositShow');
      let depositText = deposit.innerText;
      let depositValue = parseFloat(depositText);
      let newDeposit = parseFloat(depositField.value);
      depositValue = depositValue + newDeposit
      document.getElementById('depositShow').innerText = depositValue;
      depositField.value = ''


      balanceShowText = balanceShow.innerText;
      balanceShowValue = parseFloat(balanceShowText);
      balanceShowValue = balanceShowValue + newDeposit;
      document.getElementById('balanceShow').innerText = balanceShowValue;
      
      console.log(balanceShowText);
})

withdrawBtn.addEventListener('click',function(){
    let withdraw = document.getElementById('withdrawShow');
    let withdrawText = withdraw.innerText;
    let withdrawValue = parseFloat( withdrawText);
    let newWithdraw = parseFloat( withdrawField.value);
    withdrawValue = newWithdraw + withdrawValue;
    document.getElementById('withdrawShow').innerText = withdrawValue;
    withdrawField.value = '';

    console.log(newWithdraw);



    balanceShowText = balanceShow.innerText;
    balanceShowValue = parseFloat(balanceShowText);
    balanceShowValue = balanceShowValue - newWithdraw;
    document.getElementById('balanceShow').innerText = balanceShowValue;
    
    console.log(balanceShowText);


})



