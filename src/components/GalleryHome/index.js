import {Component} from 'react'



import ImagesList from './ImagesList'

import ImageCard from '../ImageCard'


class GalleryHome extends Component{
    state={imagesList:ImagesList , bannerDetails:ImagesList[0]}

    sendId = (id)=>{
       const index = ImagesList.findIndex((item)=> item.id === id)
        this.setState({bannerDetails:ImagesList[index]})
    }

    render(){
        const {imagesList , bannerDetails} = this.state
        const {imageUrl , imageAltText , id} = bannerDetails
        return <div>
            <img className='w-80 ' src={imageUrl} alt={imageAltText} />
            <h2 className='font-bold m-3'>Nature Photography</h2>
            <p className='m-3 mt-0'>Nature Photography by Madhan</p>
            <ul className='list-none flex flex-row '>
                {imagesList.map((imageDetails)=><ImageCard key={imageDetails.id} details={imageDetails} selectedImage={id} sendId={this.sendId} />)}
            </ul>
        </div>
    }
}

export default GalleryHome