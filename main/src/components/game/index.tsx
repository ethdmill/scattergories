import React from 'react'
import ListGenerator from './listGenerator'
import AcceptableAnswers from '../acceptableAnswers'
import UserInputs from './userInputs'

export default function Game() {
  return(
    <>
      <ListGenerator />
      <AcceptableAnswers />
    </>
  )
}