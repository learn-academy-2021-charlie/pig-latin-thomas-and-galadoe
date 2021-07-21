import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let pigLatin = ''
    let translatedPigLatin = []
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      }) //creates array that holds all the vowels.
      console.log("vowelsArray:", vowelsArray)

      // your code here!

      // Remember: console.log is your friend :)

 let indexOfVowel = currentWord.indexOf(vowelsArray[0])
userInput.map(currentWord => {})
//rule 1: if it starts with a vowel add way
    if (vowelsArray.includes(currentWord[0])){
      console.log(`${currentWord}way`)
      // console.log(indexOfVowel)
    }
    //rule 3: if it start with qu, move qu to back and add "ay", dont forget "squeal"--> ealsquay where "qu doesnt come first"

else if(!vowelsArray.includes(currentWord[0]) && currentWord[indexOfVowel - 1] == "q"){
  console.log(`${currentWord.slice(indexOfVowel + 1)}${currentWord.slice(0, indexOfVowel)}uay`)
}
//rule 2:one ore more consonants move all consecutive consonents to end, add "Ay"
else if(!vowelsArray.includes(currentWord[0])){
  console.log(`${currentWord.slice(indexOfVowel)}${currentWord.slice(0, indexOfVowel)}ay`)
}

//rule 4: y is treated like a vowel if non are present.
// else if(!vowelsArray.includes(currentWord[0]) && currentWord[indexOfV])



//rule 1: check if starts with vowel add "way"
  // } else if (currentWord[0] === `a` || currentWord[0] === `e` || currentWord[0] === `i` || currentWord[0] === `o` || currentWord[0] === `u`  ){ console.log(`${currentWord}way`) // manually check for vowels
  //   if (vowelsArray.includes(currentWord[0])){
  //     console.log(`${currentWord}way`)
  //     //rule 2: if first consonants cinlude "qu" move both to end add "ay"
  //    }else if (currentWord[0] === 'q' && currentWord[1] === 'u'){
  //       console.log(`${currentWord.slice(2)}${currentWord.slice(0,2)}ay`)
  //     //rule 3: check for consonants, if so move to back and add "ay"
  // }else if(["a", "e", "i", "o", "u"].indexOf()){
  //   var firstcons = currentWord.slice(0, currentWord);
  //   var middle = currentWord.slice(currentWord, currentWord.length)
  //   currentWord = middle + firstcons + "ay"
  //   console.log(currentWord);
  // }
  // //rule 4: y rule
  // else if(currentWord){

  // }

      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render(){
    return(
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by ~your name here~</footer>
      </>
    )
  }
}

export default App
