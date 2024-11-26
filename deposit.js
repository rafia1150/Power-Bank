

//step 1: add EventLishtener to deposit button

document.getElementById('btn_depositNow').addEventListener('click',function(){

// step 2: get the deposit amount from the deposit field
//For input field to use.value to get the input value

const depositField=document.getElementById('depositNow_field')
const newDepositAmountString= depositField.value
const newDepositAmount=parseFloat(newDepositAmountString);
console.log(newDepositAmount);

//step 3:get the current deposit value
const depositTotal=document.getElementById('deposit_total')
const previousDepositTotalString=depositTotal.innerText
const previousDeposit=parseFloat(previousDepositTotalString)
console.log(previousDeposit);

//step 4: add number set to total deposit

const currentDepositAmount = newDepositAmount + previousDeposit;
//set the deposit  total
depositTotal.innerText=currentDepositAmount;

//step 5:get balance total value

const balanceTotal =document.getElementById('balance_total');
const previousBalanceTotalString=balanceTotal.innerText;
const previousTotalBalance=parseFloat(previousBalanceTotalString);
console.log(previousTotalBalance);

//step 6:calculate current total balance

const currentTotalBalance=previousTotalBalance + newDepositAmount;

balanceTotal.innerText = currentTotalBalance;

//step 7: clear the deposit field

 depositField.value="";


})



//step 1: add EventLishtener to withdraw button

document.getElementById('btn_WithdrawNow').addEventListener('click',function(){

    // step 2: get the deposit amount from the withdraw field
    //For input field to use.value to get the input value
    
    const WithdrawField=document.getElementById('WithdrawNow_field')
    const newWithdrawAmountString= WithdrawField.value
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
    
    //step 3:get the current Withdraw value

    const WithdrawTotal=document.getElementById('withdraw_total')
    const previousWithdrawString=WithdrawTotal.innerText
    const previousWithdraw=parseFloat(previousWithdrawString)
    console.log(previousWithdraw);
    
    //step 4: add number set to total withdraw
    
    const currentWithdrawAmount = newWithdrawAmount + previousWithdraw;
    //set the withdraw  total
    WithdrawTotal.innerText=currentWithdrawAmount;
    
    //step 5:get balance total value
    
    const balanceTotal =document.getElementById('balance_total');
    const previousBalanceTotalString=balanceTotal.innerText;
    const previousTotalBalance=parseFloat(previousBalanceTotalString);
    console.log(previousTotalBalance);
    
    //step 6:calculate current total balance
    
    const currentTotalBalance=previousTotalBalance - newWithdrawAmount;
    
    balanceTotal.innerText = currentTotalBalance;
    
    //step 7: clear the deposit field
    
    WithdrawField.value="";
    
     
    })