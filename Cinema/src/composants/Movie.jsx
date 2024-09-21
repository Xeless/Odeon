import StarRating from './StarRating'

const Movie = () => {
return (
    <div className='flex flex-col items-center text-center mt-20'>
    <img src='https://image.noelshack.com/fichiers/2024/38/5/1726833341-test.jpg' alt=''></img>
    <h1 className='text-white mt-9'>Jujutsu Kaizen</h1>
    <span className='text-white mt-3'>l'auteur</span>
    <StarRating />
    </div>
);

};

export default Movie;