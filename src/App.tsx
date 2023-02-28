import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import NotFoundPage from "./pages/not-found-page/not-found-page.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
