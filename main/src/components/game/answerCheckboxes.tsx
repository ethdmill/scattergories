import React from 'react'

//TODO: render checkboxes to the right of each input field, set state that determines points, clear with a new round

export default function AnswerCheckboxes() {
  const GoodAnswerCheckbox = () => {
    const [goodAnswer, setGoodAnswer] = React.useState<boolean>(false)
  
    const handleGoodAnswer = () => { 
      setGoodAnswer(true)
    }
  
    return (
      <input type="checkbox" className="ml-2 mr-1" id="goodAnswer" onChange={() => handleGoodAnswer()}></input>
      
    )
  }
  
  const BadAnswerCheckbox = () => {
    const [badAnswer, setBadAnswer] = React.useState<boolean>(false)
  
    const handleBadAnswer = () => { 
      setBadAnswer(true)
    }
    return (
      <input type="checkbox" className="ml-1 mr-2" id="badAnswer" onChange={() => handleBadAnswer()}></input>
    )
  }

  return (
    <>
      <GoodAnswerCheckbox />
      <BadAnswerCheckbox />
    </>
  )
}