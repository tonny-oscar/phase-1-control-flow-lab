function scuberGreetingForFeet(feet){
  let message
  if(feet <= 400){
    message = 'This one is on me!'
  }else if(feet>400 && feet<=2000){
    message = 'That will be twenty bucks.';
  }else if(feet>2000 && feet <=2500){
    message = 'I will gladly take your thirty bucks.';
  }else if(feet>2500){
    message = 'No can do.';
  }
  return message;
}
function ternaryCheckCity(city){
  return city==="NYC"? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  if(tip==='generous'){
    return 'Thank you so much.';
  }else if(tip==='not as generous'){
    return 'Thank you.';
  }else{
    return 'Bye.';
  }
}