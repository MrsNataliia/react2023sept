import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {CharactersPage, EpisodesPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayouts/>, children:[
            {
                index: true, element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            },
            {
                path: 'characters/:ids', element: <CharactersPage/>
            }
        ]
    }

])


export {
    router
}