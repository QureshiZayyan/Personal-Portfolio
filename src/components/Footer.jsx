import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export const Footer = () => {
    return (
        <>
            <footer className="footer text-white flex flex-col pt-[12px] text-center w-full relative bottom-[-2.5px]">
                <div id="contact" className="contact-details">
                    <p className="Connected bold font-bold mb-[10px] text-[20.5px]">Stay Connected</p>
                    <p className="number-email mb-[8px] font-medium text-[18px]"><a href="tel:+918793733783">(+91) 8793733783</a></p>
                    <a href="mailto:qureshizayyan49@gmail.com" className="number-email link-color font-medium text-[18px]">qureshizayyan49@gmail.com</a>
                </div>

                <div className="profile-links mt-[20px] mb-[12px] flex items-center justify-center w-full">
                    <div><a href="https://github.com/QureshiZayyan" target="_blank"><RxGithubLogo size={28} className="img mx-[7.5px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://www.linkedin.com/in/zayyanqureshi/" target="_blank"><FaLinkedinIn size={26} className="img linkedin mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://twitter.com/qureshizayyan1" target="_blank"><FaXTwitter size={26} className="img twitter mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                    <div><a href="https://instagram.com/qureshi_zayyan" target="_blank"><SiInstagram size={26} className="img twitter mx-[7.5px] cursor-pointer active:outline-none active:bg-none h-9" /></a></div>
                </div>
            </footer>
        </>
    )
}
