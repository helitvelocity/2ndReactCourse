import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    // localhost:3000/
    // my-page.com/
    
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="/newmeetup" element={<NewMeetupPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
