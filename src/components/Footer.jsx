import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export const Footer = () => {
    return (
        <>
            <footer className="footer text-white flex flex-col pt-[12px] text-center w-full relative bottom-[-2.5px]">
                <div id="contact" className="contact-details">
                    <p className="Connected bold font-bold mb-[10px] lg:text-[20px] xl:text-2xl">Stay Connected</p>
                    <p className="number-email mb-[8px] lg:text-[17px] font-medium xl:text-[19.5px]"><a href="tel:+918793733783">(+91) 8793733783</a></p>
                    <a href="mailto:qureshizayyan49@gmail.com" className="number-email link-color font-medium lg:text-[17px]  xl:text-[18.5px]">qureshizayyan49@gmail.com</a>
                </div>

                <div className="profile-links mt-[20px] mb-[12px] flex items-center justify-center w-full">
                    <div><a href="https://github.com/QureshiZayyan" target="_blank"><RxGithubLogo className="img github w-[27px] mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-7" /></a></div>
                    <div><a href="https://www.linkedin.com/in/zayyanqureshi/" target="_blank"><FaLinkedinIn className="img linkedin w-[24.5px] mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://twitter.com/qureshizayyan1" target="_blank"><FaXTwitter className="img twitter w-[24.5px] mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://instagram.com/qureshi_zayyan" target="_blank"><SiInstagram className="img twitter w-[24.5px] mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                </div>
            </footer>
        </>
    )
}
