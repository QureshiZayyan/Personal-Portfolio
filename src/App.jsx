import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
// import { Skills } from './components/Skills';
import { BlogCard } from './components/BlogCard';
import { ProjectCard } from './components/ProjectCard';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer'
import { Resume } from './components/Resume';
import image2 from './assets/news.jpg';
import image3 from './assets/weather.png'
import mslogo from './assets/mslogo.jpeg';
import recipe from './assets/recipe.png';
import { lazy, Suspense } from 'react';

const Skills = lazy(() => import('./components/Skills'))
const MainContent = () => {

  return (
    <>
      <Intro />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Skills />
        </Suspense>
        <section id='project' className="mb-[150px] mx-[40px]">
          {/* <p className='text-center text-white font-semibold flex items-center justify-center flex-col'>worked with <img width={180} height={20} src={tsa} alt="" /></p> */}
          <h2 className="project-heading w-[15%] font-bold xl:text-4xl pb-1 text-[37px] text-white border-b-[1.5px] mb-[20px]">Projects</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 
        my-[50px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[4vw]">
            <ProjectCard name="News App" imageurl={image2} about='Get the latest news from around the world, all in one place. Delivers real-time updates, breaking headlines, and personalized stories'
              TechStack={'React | Tailwind'} liveLink={'http://searchnewss.vercel.app/'} GithubLink={'https://github.com/QureshiZayyan/News-App'} />
            <ProjectCard name="Weather App" imageurl={image3} liveLink='https://searchweathers.vercel.app/' GithubLink={'https://github.com/QureshiZayyan/Weather-App'} about={'Get accurate, real-time weather updates, hourly forecasts, and severe weather alerts—right at your fingertips'} TechStack='React,Tailwind' />
            <ProjectCard name="Recipe App" imageurl={recipe} liveLink='https://search-recipess.vercel.app/' GithubLink={'https://github.com/QureshiZayyan/Recipe-Search-App'} TechStack={'React'} about={`brings thousands of delicious recipes to your fingertips. Whether you're a beginner or a seasoned chef`} />
            {/* <ProjectCard name="ToDo List App" imageurl={image1} link='https://qureshizayyan.github.io/ToDo-List/' about='HTML,CSS,JS' /> */}
            {/* <ProjectCard name="Microsoft UI" imageurl={mslogo} link='https://microsoftuiclone.vercel.app/' about='React,Tailwind' /> */}
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
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
