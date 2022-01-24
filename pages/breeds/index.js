import React from "react";
import  { getServerSideProps } from "../cat-search/[id]";


export default function breeds({ breeds }){
   
    async function eventChange() {
       
        console.log("data: ",data)
        
    }
    async function parseIn(event) {
        let query;
        query =  event.req.value;

        let data = getServerSideProps(query)
        
    }
    return (
        <div>
            <h1>Breeds</h1>
            
            <ul>
            <form>
                       <select onChange={() => {
                           parseIn(breeds.name)
                       }}>
                      
                        
                {breeds.map(breeds => {
                    return (
                        <option  id="html" name="breedName"  value={breeds.name} > {breeds.name}</option>
                      
                    
                       
                           
                       
                       
                   
                        
                           
                        
                        
                    
                        
                    )

                })}
                </select> 
                </form>
            </ul>
        </div>

    )
}


export async function getStaticProps() {
    const breeds = await fetch('https://api.thecatapi.com/v1/breeds').then(r => r.json());
    
    return {
        props: {
            
            breeds
        }
    }
}
export async function handler(req, res){
         
    const selected = req.body.breedName;

    getServerSideProps(selected);


    


}