import './index.css'

const ScoreCard = props => {
  const {score, PlayAgain} = props

  const playAgain = () => {
    PlayAgain()
  }

  return (
    <div className="container">
      <div className="score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <h1 className="heading">YOUR SCORE</h1>
        <p className="result">{score}</p>
        <button className="btn" type="button" onClick={playAgain}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="timer"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
