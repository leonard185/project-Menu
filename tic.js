let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

const checkWin = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return board[a];
        }
    }
    if (!board.includes('')) {
        gameActive = false;
        return 'T';
    }
    return null;
};

const playerMove = (index) => {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;

    const winner = checkWin();
    if (winner) {
        const result = winner === 'T' ? 'It\'s a Tie!' : `Player ${winner} wins!`;
        document.getElementById('result').innerText = result;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};
