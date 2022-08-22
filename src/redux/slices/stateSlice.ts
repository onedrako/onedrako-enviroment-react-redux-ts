// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export const fetchData = createAsyncThunk(
//   'state/fetchState',
//   async (_, { dispatch }) => {
//     // dispatch(setLoading(true))

//     // dispatch(setLoading(false))
//   }
// )

type StateTypes = {
  state: any[]
}

// state
const initialState: StateTypes = {
  state: []
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setState: (state: any, action: PayloadAction<any[]>) => {
      state.state = action.payload
    }
  }
})

export const { setState } = stateSlice.actions

export default stateSlice.reducer
