const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            return squares[a]
        }
    }

    return null
}

const calculateTurns = (squares) => {
    return squares.filter(sq => !sq).length
}

const calculateStatus = (winner, turns, player) => {
    if (!winner && !turns) return "Draw"
    if(winner) return `The winner is ${winner}`
    return `it's ${player}'s turn`
}

export {
    calculateWinner,
    calculateTurns,
    calculateStatus,
}