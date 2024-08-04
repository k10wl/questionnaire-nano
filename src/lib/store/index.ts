import { configureStore } from '@reduxjs/toolkit'

import { questionnaire } from './questionnaire'

export const store = configureStore({
  reducer: {
    questionnaire: questionnaire.reducer
  },
  middleware: (d) => d({ serializableCheck: false })
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
