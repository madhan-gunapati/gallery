const ImageCard = (props)=>{
   
const {details , sendId , selectedImage} = props

const {thumbnailUrl , thumbnailAltText , id } = details
return <li className={` m-8 w-auto ${selectedImage === id ? null :'opacity-50'}` }>
    <img   src={thumbnailUrl} alt={thumbnailAltText} onClick={()=>{sendId(id)}} />

</li>
}

export default ImageCard