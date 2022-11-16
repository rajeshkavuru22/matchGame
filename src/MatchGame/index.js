import Thumbnail from '../Thumbnail'

import './index.css'

const MatchGame = props => {
  const {
    imagesList,
    randomImageUrl,
    checkImage,
    activeTab,
    renderTabsList,
  } = props

  return (
    <div className="body-container">
      <div className="image-container">
        <img src={randomImageUrl} alt="match" className="image" />
      </div>
      {renderTabsList()}
      <div className="containe">
        <ul className="images-list-container">
          {imagesList.map(
            each =>
              each.category === activeTab && (
                <Thumbnail key={each.id} Item={each} checkImage={checkImage} />
              ),
          )}
        </ul>
      </div>
    </div>
  )
}

export default MatchGame
