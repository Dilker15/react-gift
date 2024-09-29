import { useEffect, useState } from "react";
import axios from 'axios';



export function useImagesGift(nameCategory){
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        const getImages=async()=>{
            try{
                let datas = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_KEY_GIPHY}&q=${nameCategory}&limit=9`);
                setImages(datas.data.data);
                setIsLoading(false)
            }catch(error){
                console.log(error);
            }
           
        }
        getImages();
    },[]);


    return [
        images,isLoading
    ]

}