import './App.css';
import { Cards } from './Components/Card';
import { About } from './Components/About';
import { Header } from './Components/header';
import { Footer } from './Components/Footer';
import image1 from './assets/todos.webp';
import image2 from './assets/news.jpg';
import image3 from './assets/weather.png'
import image4 from './assets/developer.png';
import image5 from './assets/recipee.png';

export const App = () => {
  return (
    <>
      <Header imageurl={image4} />
      <main>
        <About />
        <section className="project mt-0 mx-[40px] mb-[150px]">
          <h2 className="project-heading w-[10%] font-bold text-[2.1rem] text-white border-b-[1.5px] mb-[20px]">Projects</h2>
          <div className="cards-container grid lg:grid-cols-4 md:grid-cols-2 my-[50px] place-items-center md:gap-y-10 md:mx-28 xl:mx-44 lg:mx-32">
            <Cards name="News Search App" imageurl={image2} link='https://qureshizayyan.github.io/News-Web-App/' />
            <Cards name="Live Weather Search App" imageurl={image3} link='https://qureshizayyan.github.io/Weather-App/#' />
            <Cards name="Recipe Finder App" imageurl={image5} link='https://qureshizayyan.github.io/Recipe-Finder-App/' />
            <Cards name="ToDo List App" imageurl={image1} link='https://qureshizayyan.github.io/ToDo-List/' />
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}