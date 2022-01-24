import Head from 'next/head';
import React from 'react';
import breeds from '../../breeds';

const allBreeds = 'https://api.thecatapi.com/v1/breeds';

export async function getServerSideProps({ query }){
    const {id}  = query;
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${id}&api_key'+ {process.env.APIKEY}`);
    const data = await res.json();
    return{ 
        props: { 
           breed: data[0]
        }
    }
}


export default function selectedBreed({ breed }){


    
    console.log('data',breed);
    return(
        <div className="container">
            <Head>
                <title>Selected</title>
            </Head>

            <main>
                <h1 className="title"> Selected Breed: {breed.name}</h1>
                <p> {breed.description}</p>
                <span>
                    <img src={breed.photoUrl}></img>
                </span>
                
                
            </main>

        </div>
    )

}

