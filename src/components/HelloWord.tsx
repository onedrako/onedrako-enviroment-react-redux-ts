import config from '../../config/index'
import React, { useEffect } from 'react'
import { setState } from '../redux/slices/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

const HelloWorld = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.state)

  useEffect(() => {
    dispatch(setState([1]))
  }, [])

  console.log(state)

  return (
    <>
      <h1>Hello World</h1>
      <p>{config.api}</p>
    </>
  )
}

export { HelloWorld }
