function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    sign: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  // Store the 'wisdom' in an array
  let Wisdom = []
  
  // Iterate over the object
  for(let obj in collectiveWisdom) {
    let Idx = generateRandomNumber(collectiveWisdom[obj].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(obj) {
      case 'sign':
        Wisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'fortuneOutput':
        Wisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'advice':
        Wisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        Wisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = Wisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);
