import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
<<<<<<< HEAD
=======

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
>>>>>>> 0d37a95af6f7bc6fc32d161b23deecc104a48c5f
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

<<<<<<< HEAD
   
=======
export default BannerCardItem
>>>>>>> 0d37a95af6f7bc6fc32d161b23deecc104a48c5f
