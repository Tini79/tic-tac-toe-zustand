import Square from "./Square"

const Board = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px',
            width: 'calc(3 * 3rem)',
            height: 'calc(3 * 3rem)',
            border: '1px solid #999',
            padding: '4px',
        }}>
            {Array.from({ length: 9 }, (_, idx) => (
                <div key={idx} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Square value={idx + 1} />
                </div>
            ))}
        </div>
    )
}

export default Board