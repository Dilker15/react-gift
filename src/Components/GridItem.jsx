import { useState, useEffect } from "react";
import axios from "axios";
import {useImagesGift} from '../Hooks/useImagesGift'

export function GridItem({ nameCategory }) {
    const [images,isLoading] = useImagesGift(nameCategory)

    console.log(images);

    return (<>
         {images.map((item)=>{         
            return <div>
                    <p>{item.title}</p>
                    <img key={item.id} src={item.images.fixed_height.url} alt={item.title} />
                    </div>
     
         }
         )}
         
    </>)
}