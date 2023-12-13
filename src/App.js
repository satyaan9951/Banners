import './App.css'
<<<<<<< HEAD

=======
>>>>>>> 0d37a95af6f7bc6fc32d161b23deecc104a48c5f
import BannerCardItem from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="main-container">
    <ul className="banner-container">
      {bannerCardsList.map(eachBanner => (
        <BannerCardItem bannerDetails={eachBanner} key={eachBanner.id} />
      ))}
    </ul>
  </div>
)

export default App
