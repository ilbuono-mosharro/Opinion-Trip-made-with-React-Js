import { useEffect, useState } from "react";
import City from "../snippets/City.jsx";

export default function Cities() {
  const [cities, setCities] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api-cities/cities/")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="mb-24 mt-8">
        <div className="mx-auto px-4 mb-24">
          <h2 className="font-serif font-bold text-black text-3xl text-center">
            Where to go, <span className="text-orange-500">right now</span>
          </h2>
          <p className="text-base font-serif font-normal text-zinc-600 w-2/6 mx-auto text-center">
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
          <div className="grid grid-cols-4 gap-4 mt-12">
            {cities &&
              cities.map((city) => <City key={city.name} details={city} />)}
          </div>
        </div>
      </section>
    </>
  );
}
