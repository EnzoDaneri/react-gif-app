

     export const getGifs = async ( category ) => {
        //encodeUri reemplaza los espacios por %20 entre otras cosas. 
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category )}&limit=10&api_key=Nmipx3kri7m8A5UIS9gDcH47QMw0Llyh` ;
    
        const resp = await fetch( url );
        const { data } = await resp.json();
         
        const gifs = data.map( img => {
    
             return {
                 id: img.id,
                 title: img.title,
                 url: img.images?.downsized_medium.url
             }
        });
    
        return gifs;
      
    
      }
    