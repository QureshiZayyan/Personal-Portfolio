// import whatsapp from '../assets/whatsapp.png';
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
    return (
        <>
            <footer className="footer text-white flex flex-col pt-[11px] text-center w-full">
                <div id="contact" className="contact-details">
                    <p className="bold font-bold mb-[8px] lg:text-[20px] xl:text-2xl">Stay Connected</p>
                    <p className="number mb-[8px] font-medium xl:text-[18.5px]"><a href="tel:+918793733783">(+91) 8793733783</a></p>
                    <a href="mailto:qureshizayyan49@gmail.com" className="link-color font-medium xl:text-[18.5px]">qureshizayyan49@gmail.com</a>
                </div>
                <div className="profile-links mt-[18px] mb-[12px] flex items-center justify-center w-full">
                    <div><a href="https://github.com/QureshiZayyan" target="_blank"><BsGithub className="github xl:w-[26.5px] mx-[7px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://www.linkedin.com/in/zayyanqureshi/" target="_blank"><FaLinkedinIn className="linkedin xl:w-[26.5px] mx-[7px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://twitter.com/qureshizayyan1" target="_blank"><FaXTwitter className="twitter xl:w-[26.5px] mx-[7px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://instagram.com/qureshi_zayyan" target="_blank"><SiInstagram className="twitter xl:w-[26.5px]  mx-[7px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://wa.me/+918793733783" target="_blank"><FaWhatsapp size={50} className="fixed bottom-8 right-5 h-10 cursor-pointer active:outline-none active:bg-none" /></a></div>
                </div>
            </footer>
        </>
    )
}
