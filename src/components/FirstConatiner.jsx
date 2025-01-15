import Image from "next/image";
import Img1 from "../public/Images/Hero-image-1.jpg"



export default function FirstContainer(){
    return(
    <div className="relative overflow-x-scroll flex p-4 bg-gray-200 max-h-screen snap-x snap-mandatory">
      
        <div className="flex-shrink-0 w-screen h-[90vh] snap-center relative">
          <Image
            src={Img1}
            alt="Hero Image 1"
            layout="fill"
            objectFit="cover"
            priority={true} 
          />
        </div>

        <div className="flex-shrink-0 w-screen h-[90vh] snap-center relative">
          <Image
            src={Img1}
            alt="Hero Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="flex-shrink-0 w-screen h-[90vh] snap-center relative">
          <Image
            src={Img1}
            alt="Hero Image 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    )
}