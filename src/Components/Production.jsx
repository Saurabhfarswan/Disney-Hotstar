import Disney from './../assets/images/Disney.png';
import marvel from './../assets/images/marvel.png';
import Nationalg from './../assets/images/Nationalg.jpg';

import Pixar from './../assets/images/Pixar.png';
import Starwars from './../assets/images/Starwars.jpg';

import starwarV from './../assets/videos/StarwarsVideo.mp4';
import disneyV from './../assets/videos/disneyvideos.mp4';
import marvelV from './../assets/videos/marvelvideos.mp4';
import nationalGeographicV from './../assets/videos/nationalgeovideos.mp4';
import pixarV from './../assets/videos/pixarvideos.mp4';

function Production() {
    const productionHouseList=[
        {
            id:1,
            image:Disney,
            video:disneyV
        },
        {
            id:2,
            image:Pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:Starwars,
            video:starwarV
        },
        {
            id:5,
            image:Nationalg,
            video:nationalGeographicV
        }
    ];

    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
            {productionHouseList.map((item, index) => (
                <div key={index} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
                    <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50 w-full h-full h-50px-md w-50px-md object-cover border:5px '/> 
                    <img src={item.image} className='z-10 w-full h-full object-cover' alt={`Production House ${item.id}`} /> 
                </div>                                                            ))}
        </div>
    );
}

export default Production;
