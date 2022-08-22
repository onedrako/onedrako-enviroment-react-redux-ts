import { combineReducers } from 'redux'

import stateSlice from '@redux/slices/stateSlice'

const rootReducer = combineReducers({
  state: stateSlice
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
