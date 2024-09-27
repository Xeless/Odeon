// Movie.jsx
import { moviesData } from '../composants/FilmData'; // Assure-toi que le chemin est correct
import MovieCarousel from '../composants/MovieCarousel';

const Movie = () => {
  return (
    <div className="flex-col min-h-screen text-start flex">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original//mKOBdgaEFguADkJhfFslY7TYxIh.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-start h-full w-full px-5 ">
          <img
            alt="Logo"
            loading="lazy"
            src="https://image.tmdb.org/t/p/original/sNFpFbAeAuPX7qIvoVnf3M30SSz.png"
            className="w-96"
          />
          <button className="text-white font-bold bg-backgroundticket p-3 px-8 mx-10 rounded-xl mt-5 flex justify-between gap-3">
            <img src="../../public/uploads/icon-ticket.svg" alt="Icon" width="25" height="25" />
            Réservez maintenant
          </button>
        </div>
      </div>


      <MovieCarousel title="À l'affiche au cinéma" movies={moviesData.nowShowing} />

      <MovieCarousel title="Films populaires" movies={moviesData.popular} />
    </div>
  );
};

export default Movie;
