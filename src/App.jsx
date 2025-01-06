import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/Aboutme';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { BlogCard } from './components/BlogCard';
import { ProjectCard } from './components/ProjectCard';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import image2 from './assets/news.jpg';
import image3 from './assets/weather.png'
import mslogo from './assets/mslogo.jpeg';
import recipe from './assets/recipe.png';

const MainContent = () => {
  return (
    <>
      <Intro />
      <main>
        <AboutMe />
        <section id='project' className="mt-0 mx-[40px] mb-[150px]">
          <h2 className="project-heading w-[10%] font-bold xl:text-4xl text-[2.1rem] text-white border-b-[1.5px] mb-[20px]">Projects</h2>
          <div className="cards-container grid lg:grid-cols-4 md:grid-cols-2 
        my-[50px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[10vw]">
            <ProjectCard name="News App" imageurl={image2} link='https://searchnewss.vercel.app/' about='React,Tailwind' />
            <ProjectCard name="Live Weather App" imageurl={image3} link='https://searchweathers.vercel.app/' />
            <ProjectCard name="Recipe App" imageurl={recipe} link='https://search-recipess.vercel.app/' about='React' />
            {/* <ProjectCard name="ToDo List App" imageurl={image1} link='https://qureshizayyan.github.io/ToDo-List/' about='HTML,CSS,JS' /> */}
            <ProjectCard name="Microsoft UI" imageurl={mslogo} link='https://microsoftuiclone.vercel.app/' about='React,Tailwind' />
          </div>
        </section>
      </main>
    </>
  )
}

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blogs" element={<BlogCard />} />
          <Route path="/blogpage/:id" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
