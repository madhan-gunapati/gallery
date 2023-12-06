const ImageCard = (props)=>{
   
const {details} = props

const {thumbnailUrl , thumbnailAltText} = details
return <li >
    <img className="bg-dark" src={thumbnailUrl} alt={thumbnailAltText} />

</li>
}

export default ImageCard