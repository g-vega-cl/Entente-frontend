const getRandomFlag = () =>{
  const random = Math.random();
  if(random < .15){
    return(
    <>
     🇷🇺
    </>
    )
  }
  if(random < .3){
    return(
    <>
     🇫🇷
    </>
    )
  }
  if(random < .45){
    return(
    <>
     🇪🇸 
    </>
    )
  }
  if(random < .6){
    return(
    <>
     🇬🇧 
    </>
    )
  }
  if(random < .75){
    return(
    <>
     🇩🇪 
    </>
    )
  }
  if(random < 1){
    return(
    <>
     🇮🇹 
    </>
    )
  }
  
}

export default getRandomFlag;