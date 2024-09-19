// add money to the account

// step-1 add an event handler to the add money button inside the from

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
  // prevent page reload after from submit
  event.preventDefault();

  // step-2 get money to added the account
   
  const addMoneyInput = document.getElementById('input-add-money').value;
  console.log(addMoneyInput);


  // get the pin number provide
  const pinNumberInput = document.getElementById('pin-number-input').value;
  console.log(pinNumberInput);


  // step-3 verify pin number
  if (pinNumberInput === '1111'){
    console.log('adding money');

  // step-4 get the current balance
  const balance = document.getElementById('account-balance').innerText;
  console.log(balance);

  // step-5 add addMoneyInput with balance
  const addMoneyNumber = parseFloat(addMoneyInput);
  const balanceNumber = parseFloat(balance);
  const newBalance = addMoneyNumber + balanceNumber;
  console.log(newBalance);

  // step-6 update the balance in a Dom
  document.getElementById('account-balance').innerText = newBalance;


  }
  else{
    alert('please try again')
  }





})