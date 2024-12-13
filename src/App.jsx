import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/header';
import { About } from './Components/About';
import { Cards } from './Components/Card';
import { Footer } from './Components/Footer';
import { Blog } from './Components/Blog';
import { Navbar } from './Components/Navbar';
import image2 from './assets/news.jpg';
import image3 from './assets/weather.png'
import mslogo from './assets/mslogo.jpeg';
import recipe from './assets/recipe.png';
import { BlogCard } from './Components/BlogCard';
import BlogPage from './Components/BlogPage';

const MainContent = () => {
  return (
    <main>
      <Header />
      <About />
      <section className="project mt-0 mx-[40px] mb-[150px]">
        <h2 className="project-heading w-[10%] font-bold xl:text-4xl text-[2.1rem] text-white border-b-[1.5px] mb-[20px]">Projects</h2>
        <div className="cards-container grid lg:grid-cols-4 md:grid-cols-2 my-[50px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[10vw]">
          <Cards name="News App" imageurl={image2} link='https://searchnewss.vercel.app/' about='React,Tailwind' />
          <Cards name="Live Weather App" imageurl={image3} link='https://searchweathers.vercel.app/' />
          <Cards name="Recipe App" imageurl={recipe} link='https://search-recipess.vercel.app/' about='React' />
          {/* <Cards name="ToDo List App" imageurl={image1} link='https://qureshizayyan.github.io/ToDo-List/' about='HTML,CSS,JS' /> */}
          <Cards name="Microsoft UI" imageurl={mslogo} link='https://microsoftuiclone.vercel.app/' about='React,Tailwind' />
        </div>
      </section>
    </main >
  )
}

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogpage" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}