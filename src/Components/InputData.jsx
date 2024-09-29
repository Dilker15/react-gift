import { useState } from 'react';
import '../styles/form-styles.css';


export function InputData({addCategory}){
    const [description,setDecription]=useState("");

    const sendData=(e)=>{
        e.preventDefault();
        addCategory(description);
        
    }

    const updateDes = (e)=>{
        setDecription(e.target.value);
    }
    return ( <form onSubmit={sendData}>
            <input type="text" name="input-category" id="input-category" className="form-style" placeholder='Enter a Category' onChange={updateDes} />
        </form>);
       


}