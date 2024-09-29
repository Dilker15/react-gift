import { useState } from "react";
import { InputData } from "./Components/InputData";
import { GridData } from "./Components/GridData";


export function App(){
    const [category,setCategory] = useState([]);

    const updateCategory = (newCategory)=>{
        setCategory([...category,newCategory]);
        console.log("Se ejecuto el update en el enviar");

    }
    return <>
        <InputData addCategory={updateCategory}/>
        <GridData listCategories={category}/>

    </>
}