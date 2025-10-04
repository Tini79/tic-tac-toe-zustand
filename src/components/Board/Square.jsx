const Square = ({ value, onSquareClick }) => {
	return (
		<button style={{
			padding: '8px',
			backgroundColor: '#fff',
			color: '#000',
			border: '1px solid #999',
			outline: 0,
			fontSize: '1rem',
			fontWeight: 'bold',
			width: '100%',
			height: '100%',
		}}
			onClick={onSquareClick}>{value}</button>
	)
}

export default Square