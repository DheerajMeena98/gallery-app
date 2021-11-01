import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateGalleryImage, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText, id} = eachItem

  const highlightThumbnail = isActive ? 'thumbnail-opacity-full' : ''
  const OnChangeGalleryImage = () => {
    const indexOfEachItem = id
    updateGalleryImage(indexOfEachItem)
  }
  return (
    <li className={`every-thumbnail-list ${highlightThumbnail}`}>
      <button className="every-thumbnail-button" type="button">
        {' '}
        <img
          src={thumbnailUrl}
          className="each-thumbnail-image"
          alt={thumbnailAltText}
          onClick={OnChangeGalleryImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
