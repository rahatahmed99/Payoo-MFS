// cash out to the account

// step-1 add an event handler to the cash out  button inside the from

document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
  // prevent page reload after from submit
  event.preventDefault();

  // step-2 get money to added the account
   
  const cashOutInput = document.getElementById('input-cash-out').value;
  console.log(cashOutInput);


  // get the pin number provide
  const pinNumberInput = document.getElementById('cash-out-pin').value;
  console.log(pinNumberInput);


  // step-3 verify pin number
  if (pinNumberInput === '1111'){
    console.log('cash out');

  // step-4 get the current balance
  const balance = document.getElementById('account-balance').innerText;
  console.log(balance);

  // step-5 add addMoneyInput with balance
  const cashOutNumber = parseFloat(cashOutInput);
  const balanceNumber = parseFloat(balance);
  const newBalance =  balanceNumber - cashOutNumber ;
  console.log(newBalance);

  // step-6 update the balance in a Dom
  document.getElementById('account-balance').innerText = newBalance;


  }
  else{
    alert('please try again')
  }

})