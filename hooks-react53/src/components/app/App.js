import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Исправлено на BrowserRouter
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../Spinner/Spinner.js";
import Helmet from "react-helmet";
// import ComicsList from "../comicsList/ComicsList";
// import WebPages from "../WebPage/WebPage.js";
// import SingleComic from "../singleComic/SingleComic.js"
// import Page404 from "../Page404/Page404.js";

const WebPages = lazy(() => import('../WebPage/WebPage.js'))
const ComicsList = lazy(() => import('../comicsList/ComicsList.js'))
const SingleComic = lazy(() => import('../singleComic/SingleComic.js'))
const Page404 = lazy(() => import('../Page404/Page404'))
const App = () => {
    return (
            <Router>
                <div className="app">
                    <AppHeader />
                    <main>           
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route path="/" element={<WebPages />} />
                                <Route path="/comics" element={<ComicsList />} />
                                <Route path="/comics/:comicid" element={<SingleComic />} />
                                <Route path="*" element={< Page404 />} />
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </Router>
    );
}

export default App;
