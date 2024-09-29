import { GridItem } from "./GridItem";
import '../styles/grilla-styles.css';

export function GridData({listCategories}){

    
    return (<>
        <div className="grilla">
            {listCategories.map(item => {
               
               return <GridItem nameCategory={item}/>


            })}
        </div>
        </>
    );

}