// Write your code here.
import './index.css'

const BannersCard = props => {
  const {bannerCardItem} = props

  const {id, headerText, description, className} = bannerCardItem
  const arr = ['banners-card', className]

  return (
    <li className={arr.join(' ')}>
      <h1 className="main-heading">{headerText}</h1>
      <p className="description">{description}</p>
      <div id={id}>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannersCard
