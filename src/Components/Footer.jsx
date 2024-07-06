export const Footer = () => {
    return (
        <>
            <footer className="bg-bcg text-white flex flex-col pt-[11px] text-center w-full">
                <div className="contact-details">
                    <p className="bold font-bold text-[1.4rem] mb-[8px]">Stay Connected</p>
                    <p className="number mb-[8px]"><a href="tel:+918793733783">(+91) 8793733783</a></p>
                    <a href="mailto:qureshizayyan49@gmail.com" className="link-color">qureshizayyan49@gmail.com</a>
                </div>

                <div className="profile-links my-[26px] flex items-center justify-center w-full">
                    <div><a href="https://github.com/QureshiZayyan" target="_blank"><img src="src\assets\github.png" alt="Github" id="Github" className="github w-[30px] mx-[5px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://www.linkedin.com/in/zayyanqureshi/" target="_blank"><img src="src\assets\linkedin.png" alt="LinkedIn" id="Linkedin" className="linkedin w-[30px] mx-[5px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://twitter.com/qureshizayyan1" target="_blank"><img src="src\assets\twitter.png" alt="Twitter" id="Twitter" className="twitter w-[30px] mx-[5px] cursor-pointer active:outline-none active:bg-none" /></a></div>
                    <div><a href="https://www.instagram.com/qureshi_zayyan/" target="_blank"><img src="src\assets\instagram.png" alt="Instagram" id="Instagram" className="instagram w-[30px] mx-[5px]  cursor-pointer active:outline-none active:bg-none" /></a></div>
                </div>
            </footer>
        </>
    )
}
