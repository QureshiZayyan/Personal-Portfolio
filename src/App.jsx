import './App.css';
import { Header } from './Components/header';
import { About } from './Components/About';
import { Cards } from './Components/Card';
import { Footer } from './Components/Footer';
import image1 from './assets/todos.webp';
import image2 from './assets/news.jpg';
import image3 from './assets/weather.png'
import mslogo from './assets/mslogo.jpeg';
import recipe from './assets/recipee.png';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <section className="project mt-0 mx-[40px] mb-[150px]">
          <h2 className="project-heading w-[10%] font-bold text-[2.1rem] text-white border-b-[1.5px] mb-[20px]">Projects</h2>
          <div className="cards-container grid lg:grid-cols-5 md:grid-cols-2 my-[50px] place-items-center md:gap-y-10 md:mx-28 xl:mx-44 lg:mx-16">
            <Cards name="News Search App" imageurl={image2} link='https://github.com/QureshiZayyan/News-App-React' about='React,Tailwind' />
            <Cards name="Live Weather Search" imageurl={image3} link='https://searchweathers.vercel.app/' />
            <Cards name="Recipe Finder App" imageurl={recipe} link='https://search-recipess.vercel.app/' about='React' />
            <Cards name="ToDo List App" imageurl={image1} link='https://qureshizayyan.github.io/ToDo-List/' about='HTML,CSS,JS' />
            <Cards name="Microsoft UI Clone" imageurl={mslogo} link='https://microsoftuiclone.vercel.app/' about='React,Tailwind' />
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}