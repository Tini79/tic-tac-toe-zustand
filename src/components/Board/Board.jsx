import Square from "./Square"
import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import "@assets/board.css"
import { calculateStatus, calculateTurns, calculateWinner } from "@utils/helper"

// creating state using zustand
const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
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

const Board = () => {
  const squares = useGameStore(({ squares }) => squares)
  const xIsNext = useGameStore(({ xIsNext }) => xIsNext)
  const setSquares = useGameStore(({ setSquares }) => setSquares)
  const setXIsNext = useGameStore(({ setXIsNext }) => setXIsNext)
  const player = xIsNext ? "X" : "O"
  const winner = calculateWinner(squares)
  const turns = calculateTurns(squares)
  const status = calculateStatus(winner, turns, player)

  const handleClickCell = (idx) => {
    if (squares[idx] || winner) return // TODO: nanti bisa kasih animasi nih kalau misal ada winner
    const nextSquares = squares.slice()

    nextSquares[idx] = player
    setSquares(nextSquares)
    console.log(xIsNext, '1');

    setXIsNext(!xIsNext)
    console.log(xIsNext, '2');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-container">
        {/* 1. bikin array dari angka */}
        {/* {Array.from({ length: 9 }, (_, idx) => (
        <div key={idx} style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Square value={idx + 1} />
        </div>
      ))} */}

        {/* 2. mulai pakai zustand state */}
        {squares.map((square, idx) => (
          <div key={idx} className="board-container__inner">
            <Square value={square} onSquareClick={() => handleClickCell(idx)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Board