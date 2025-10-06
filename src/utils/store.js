import { create } from "zustand"
import { combine } from "zustand/middleware"

// creating state using zustand
const useGameStore = create(
  combine(
    { squares: Array(9).fill(null), xIsNext: true }, // state
    (set) => { // state creator function
      return {
        setSquares: (nextSquares) => {
          set(state => ({
            squares: typeof nextSquares === "function"
              ? nextSquares(state.squares)
              : nextSquares
          }))
        },
        setXIsNext: (nextXIsNext) => {
          set(state => ({
            xIsNext: typeof nextXIsNext === "function"
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext
          }))
        }
      }
    })
)

export default useGameStore