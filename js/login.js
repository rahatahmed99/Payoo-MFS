document.getElementById('btn-login').addEventListener('click', function(event){
  event.preventDefault();
 


  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
 


  // this is temporery
  if(phoneNumber === '01825068975' && pinNumber === '0000' ){
    console.log('You are log in');
    window.location.href = '/home.html';
  }
  else{
    alert('wrong phone number or pin');
  }



})