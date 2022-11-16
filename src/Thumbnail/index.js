import './index.css'

const Thumbnail = props => {
  const {Item, checkImage} = props
  const {thumbnailUrl, imageUrl} = Item

  const onClicked = () => {
    checkImage(imageUrl)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClicked}>
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
