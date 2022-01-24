

export default function categories({ categories }){
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(categories => {
                    return (
                    <li >
                        <form>

                    
                       {/* <label> {breeds.name}</label> */}
                       <input type="button" id="html" value={categories.name}></input>
                       
                        </form>
                    </li>
                        
                           
                        
                        
                    
                        
                    )
                })}
              
            </ul>
        </div>

    )
}

export async function getStaticProps() {
    const categories = await fetch('https://api.thecatapi.com/v1/categories').then(r => r.json());

    return {
        props: {
            categories
        }
    }
}