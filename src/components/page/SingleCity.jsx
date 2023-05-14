import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function SingleCity() {
    const params = useParams()
    const [city, setCity] = useState()

    const id = params.id
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api-cities/cities/${id}/`)
        .then(response => response.json())
        .then(data => setCity(data))
        .catch(error => console.log(error))
    }, [id])

    return (
        <>
      {city && (
         <section>
          <div className="mt-8 mb-24 mx-4">
            <h1 className="text-black font-serif text-5xl font-bold mb-8">
              Explore <span className="text-orange-500">{city.name}</span>
            </h1>
          <div className="grid grid-cols-4 gap-2 mb-8">
          <img src={city.copertina} className="w-72 h-72" />
                {city.city_images.map(image => <img key={image.id} src={image.image} className="w-72 h-72" />)}
            </div>
            <h2 className="text-black font-serif text-5xl font-bold mb-4">
              About <span className="text-orange-500">{city.name}</span>
            </h2>
            <p className="text-base font-serif font-normal text-zinc-600 mb-4">{city.description}</p>
            <div className="flex flex-row gap-2">
              <div className="basis-1/4">
              <h3 className="text-black font-serif text-5xl font-bold mb-4">
            Essential <span className="text-orange-500">{city.name}</span> Do
            </h3>
            <p className="text-base font-serif font-normal text-zinc-600 mb-10">Places to see, ways to wander, and signature experiences.</p>
              </div>
              <div className="basis-3/4">
                <div className="flex flex-nowrap gap-2">
                {city.city_attractions.map(attraction => 
                <div key={attraction.key} className="py-5">
                  <img src={attraction.copertina} className="w-48 h-48" />
                  <div className="body py-3">
                    <h5>{attraction.name}</h5>
                </div>
                </div>
                )}
                </div>
              </div>
            </div>
          </div>
         </section>
 )}
        </>
    )
}
