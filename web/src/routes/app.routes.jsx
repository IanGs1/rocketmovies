import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Movie } from '../pages/Movie';
import { NewMovie } from '../pages/NewMovie';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>

            <Route path='/:movie_id' element={<Movie />}/>

            <Route path='/new' element={<NewMovie />}/>

            <Route path='/profile' element={<Profile />}/>
        </Routes>
    )
}