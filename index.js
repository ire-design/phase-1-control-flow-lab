function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;

  if (distance <= 400){
    message = 'This one is on me!'
  }else if ( distance > 400 && distance <= 2000  ){
    message = 'That will be twenty bucks.'
  }else if ( distance > 2000 && distance <= 2500){
    message = 'I will gladly take your thirty bucks.'
  }else if ( distance > 2500){
    message = 'No can do.'
  }
  return message;
}

scuberGreetingForFeet (199);


function ternaryCheckCity(cityName){
  // Write your code here!
  let message;

  if ( cityName === 'NYC') {
    message = 'Ok, sounds good.' 
  } else {
    message = 'No go.'
  }
  return message;
}
ternaryCheckCity(NYC)



function switchOnCharmFromTip(tip){
  // Write your code here!

  let message;

    if ( tip === 'generous'){
      message = 'Thank you so much.'
    }else if ( tip === 'not as generous'){
      message = 'Thank you.'
    }else {
      message = 'Bye.'
    }

    return message;
}
switchOnCharmFromTip (generous)