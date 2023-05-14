import { useEffect, useState } from "react";
import Attraction from "../snippets/Attraction.jsx";
import { useLocation, useSearchParams } from "react-router-dom";
import Search from "../Search.jsx";

export default function Attractions() {
  const [attractions, setattractions] = useState();
  const [search, setSearch] = useState();
  let [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const location = useLocation()
  const currentLocation = location.pathname

  function handleOnSubmit(e) {
    e.preventDefault();
    setSearchParams({ search: search });
  }

  useEffect(() => {
    let apiUrl = "http://127.0.0.1:8000/api-attractions/attractions/";

    if (searchQuery) {
      apiUrl += `?search=${searchQuery}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setattractions(data))
      .catch((error) => console.log(error));
  }, [searchQuery]);

  return (
    <>
      <section className="mb-24 mt-8">
        <div className="mx-auto px-4">
          <h2 className="font-serif font-bold text-black text-3xl text-center">
            Top Attractions <span className="text-orange-500">Attractions</span>
          </h2>
          <p className="text-base font-serif font-normal text-zinc-600 w-2/6 mx-auto text-center mb-8">
            Book these experiences for a close-up look
          </p>
          {currentLocation.startsWith("/attractions") && <Search
            handleOnSubmit={handleOnSubmit}
            search={searchQuery}
            setSearch={setSearch}
          />}
          <div className="grid grid-cols-4 gap-4 mt-12">
            {attractions &&
              attractions.map((attraction) => (
                <Attraction key={attraction.name} details={attraction} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
