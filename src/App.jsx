import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { BlogCard } from './components/BlogCard';
import { ProjectCard } from './components/ProjectCard';
import { BlogPage } from './components/BlogPage';
import { Footer } from './components/Footer'
import image2 from './assets/news.jpg';
import image3 from './assets/weather.png'
import ecom from './assets/e-commerce.jpg'
import { lazy, Suspense } from 'react';
import { DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";

const Skills = lazy(() => import('./components/Skills'))
const MainContent = () => {

  let react = <DiReact color='#58C4DC' className='inline' size={32} />
  let tailwind = <RiTailwindCssFill color='#00BCFF' className='inline' size={32} />
  let firebase = <SiFirebase color='#FFC400' className='inline' size={25} />

  return (
    <>
      <Intro />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Skills />
        </Suspense>
        <section id='project' className="mb-[150px] mx-[40px]">
          <h2 className="project-heading w-[150px] font-bold xl:text-4xl pb-1 text-[37px] text-white border-b-[1.5px] mb-[20px]">Projects</h2>
          <div className="grid 
        my-[50px] xl:grid-cols-3 place-items-center md:gap-y-11 md:mx-[10vw] xl:mx-28 lg:mx-[4vw]" id='project-card-container'>
            <ProjectCard name="News App" imageurl={image2}
              TechStack={<>{react}{tailwind}</>} liveLink={'http://searchnewss.vercel.app/'} GithubLink={'https://github.com/QureshiZayyan/News-App'} />
            <ProjectCard name="Weather App" imageurl={image3} liveLink='https://searchweathers.vercel.app/' GithubLink={'https://github.com/QureshiZayyan/Weather-App'} TechStack={<>{react}{tailwind}</>} />
            <ProjectCard name="E-Commerce" imageurl={ecom} liveLink='https://e-commerceee.vercel.app/' GithubLink={'https://github.com/QureshiZayyan/E-Commerce'} TechStack={<>{react}{firebase}{tailwind}</>} />
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
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
