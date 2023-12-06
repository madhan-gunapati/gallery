import {Component} from 'react'



import ImagesList from './ImagesList'

import ImageCard from '../ImageCard'


class GalleryHome extends Component{
    state={imagesList:ImagesList , bannerDetails:ImagesList[0]}

    

    render(){
        const {imagesList , bannerDetails} = this.state
        const {imageUrl , imageAltText} = bannerDetails
        return <div>
            <img className='w-75 bg-dark' src={imageUrl} alt={imageAltText} />
            <h2 className='underline text-lime-600'>Nature Photography</h2>
            <p>Nature Photography by Madhan</p>
            <ul className='list-decimal'>
                {imagesList.map((imageDetails)=><ImageCard key={imageDetails.id} details={imageDetails} />)}
            </ul>
        </div>
    }
}

export default GalleryHome