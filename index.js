function wakeDog(dogName, dogBreed) {
    return (`Wake ${dogName} the ${dogBreed}`);
}


function leashDog(dogName, dogBreed){
return (`Leash ${dogName} the ${dogBreed}`);


}


function walkToPark(dogName, dogBreed){
    return(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed){
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }


  function walkHome(dogName, dogBreed){
      return (`Walk home with ${dogName} the ${dogBreed}`)

  }

  function unleashDog(a, b){

return (`Unleash ${a} the ${b}`);

  }

  var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome,unleashDog]


  function exerciseDog(a,b){
      return routine.map(fn => fn(a,b))
  }