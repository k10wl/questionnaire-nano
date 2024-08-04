import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Question, questionnaireChain } from '@/lib/questionairre'

type State = {
  question: Question
  answers: [string, string][]
  last?: [string, string]
}

const initialState: State = { question: questionnaireChain, answers: [] }

export const questionnaire = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    select(
      state,
      data: PayloadAction<{
        question: Question
        asnwer?: [string, string]
      }>
    ) {
      state.question = data.payload.question
      if (data.payload.asnwer) {
        state.answers.push(data.payload.asnwer)
        delete state.last
      } else {
        state.last = state.answers.pop()
      }
    }
  }
})

export const { select } = questionnaire.actions
