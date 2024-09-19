document.getElementById('btn-login').addEventListener('click', function(event){
  event.preventDefault();
  console.log('add btn click');


  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
})