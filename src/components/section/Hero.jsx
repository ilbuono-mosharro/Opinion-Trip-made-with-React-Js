import { useState } from "react";
import HeroImage from "../../assets/Hero.svg";
import { useNavigate } from "react-router-dom";
import Search from "../Search";

export default function Hero() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  function handleOnSubmit() {
    navigate(`/attractions/?search=${search}`);
  }

  return (
    <>
      <section className="py-2 mt-10 mb-24">
        <div className="py-5 px-4">
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="basis-2/5">
              <div className="flex flex-col">
                <h1 className="text-black font-serif text-5xl font-bold mb-4">
                  Get started your exciting{" "}
                  <span className="text-orange-500">journey</span> with us.
                </h1>
                <p className="text-base font-serif font-normal text-zinc-600 mb-10 w-3/4">
                  A Team of experienced tourism professionals will provide you
                  with the best advice and tips for your desire place.
                </p>
                <a className="border-2 border-orange-500 py-3 px-6 text-orange-500 font-serif font-normal text-base rounded w-fit">
                  Discover Now
                </a>
              </div>
            </div>
            <div className="basis-auto">
              <div className="w-96 h-auto">
                <img src={HeroImage} />
              </div>
            </div>
          </div>
          <div className="py-5 mx-auto max-w-3xl">
            <Search
              handleOnSubmit={handleOnSubmit}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </section>
    </>
  );
}
