import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Question, questionnaireChain } from '@/lib/questionairre'

type State = {
  question: Question
  answers: [string, string][]
  last?: [string, string]
  meta: Record<string, any>
}

const initialState: State = {
  question: questionnaireChain,
  answers: [],
  meta: {}
}

export const questionnaire = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    select(
      state,
      data: PayloadAction<{
        question: Question
        asnwer?: [string, string]
        meta?: Record<string, any>
      }>
    ) {
      state.question = data.payload.question
      if (data.payload.asnwer) {
        state.answers.push(data.payload.asnwer)
        delete state.last
      } else {
        state.last = state.answers.pop()
      }
      if (data.payload.meta) {
        Object.assign(state.meta, data.payload.meta)
      }
    }
  }
})

export const { select } = questionnaire.actions
