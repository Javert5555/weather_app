import dayImage from '../../assets/day.jpg'
import dayCloudImage from '../../assets/day_cloud.jpg'
import daySnowyImage from '../../assets/day_snowy.jpg'
import dayFogImage from '../../assets/day_fog.jpg'
import nightImage from '../../assets/night.jpg'
import nightCloudImage from '../../assets/night_cloud.jpg'
import nightSnowyImage from '../../assets/night_snowy.jpg'
import rainImage from '../../assets/rainy.jpg'
import thunderStormImage from '../../assets/thunderstorm.jpg'
import nightFogImage from '../../assets/night_fog.jpg'
import dustImage from '../../assets/dust.jpg'

const changeBgImage = (currConditionCode, isDay, setBgImg) => {
    if (currConditionCode < 300) {
        setBgImg(`url(${thunderStormImage})`)
    } else if (currConditionCode >= 300 && currConditionCode < 600) {
        setBgImg(`url(${rainImage})`)
        root.style.setProperty('--inactive-color', '#121212')
    } else if (currConditionCode >= 600 && currConditionCode < 700) {
        setBgImg(isDay ? `url(${daySnowyImage})` : `url(${nightSnowyImage})`)
        root.style.setProperty('--inactive-color', isDay ? '#121212' : '#fff')
    } else if (currConditionCode >= 700 && currConditionCode < 751) {
        setBgImg(isDay ? `url(${dayFogImage})` : `url(${nightFogImage})`)
    } else if (currConditionCode >= 751 && currConditionCode < 800) {
        setBgImg(`url(${dustImage})`)
    } else if (currConditionCode === 800) {
        setBgImg(isDay ? `url(${dayImage})` : `url(${nightImage})`)
    } else {
        setBgImg(isDay ? `url(${dayCloudImage})` : `url(${nightCloudImage})`)
    }
}

export default changeBgImage