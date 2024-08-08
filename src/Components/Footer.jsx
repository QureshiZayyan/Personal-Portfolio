import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';

export const Footer = () => {
    return (
        <>
            <footer className="footer text-white flex flex-col pt-[11px] text-center w-full">
                <div id="contact" className="contact-details">
                    <p className="bold font-bold text-xl mb-[8px] lg:text-xl">Stay Connected</p>
                    <p className="number mb-[8px] font-medium"><a href="tel:+918793733783">(+91) 8793733783</a></p>
                    <a href="mailto:qureshizayyan49@gmail.com" className="link-color font-medium">qureshizayyan49@gmail.com</a>
                </div>

                <div className="profile-links mt-[26px] mb-[20px] flex items-center justify-center w-full">
                    <div><a href="https://github.com/QureshiZayyan" target="_blank"><img src={github} alt="Github" id="Github" className="github w-[30px] mx-[6px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://www.linkedin.com/in/zayyanqureshi/" target="_blank"><img src={linkedin} alt="LinkedIn" id="Linkedin" className="linkedin w-[30px] mx-[6px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://twitter.com/qureshizayyan1" target="_blank"><img src={twitter} alt="Twitter" id="Twitter" className="twitter w-[30px] mx-[6px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://instagram.com/qureshi_zayyan" target="_blank"><img src={instagram} alt="Twitter" id="Twitter" className="twitter w-[30px] mx-[6px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://wa.me/+918793733783" target="_blank"><img src={whatsapp} alt="Instagram" id="Instagram" className="whatsapp fixed bottom-8 right-5 h-10 w-[40px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                </div>
            </footer>
        </>
    )
}
