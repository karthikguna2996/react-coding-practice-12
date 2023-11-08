import './index.css'

const ThumbnailItem = props => {
  const {active, thumbnailDetails, updateThumbNailDetails} = props
  const {id, thumbnailUrl} = thumbnailDetails
  const update = () => {
    updateThumbNailDetails(id)
  }

  const ott = active ? '' : 'opacity'

  return (
    <li>
      <button type="button" onClick={update}>
        <img src={thumbnailUrl} alt="thumbnailAltText" className={ott} />
      </button>
    </li>
  )
}

export default ThumbnailItem
