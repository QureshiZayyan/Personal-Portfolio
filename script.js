var typed = new Typed('#element', {
    strings: ['Technology Enthusiast', 'Programmer', 'Software Developer'],
    typeSpeed: 45,
    // loop: true,
});

const Links = (id, url) => id.addEventListener('click', () => window.open(url, '_blank'));

Links(linkedin, "https://www.linkedin.com/in/zayyanqureshi/");
Links(github, "https://github.com/QureshiZayyan");
Links(twitter, "https://twitter.com/qureshizayyan1");
Links(instagram, "https://www.instagram.com/qureshi_zayyan/");
Links(todo, "https://qureshizayyan.github.io/ToDo-List/");
Links(fb, "https://github.com/QureshiZayyan/Facebook-login-Page");
Links(msclone, "https://qureshizayyan.github.io/Microsoft-Website-Clone-Responsive-/");
Links(weather, "https://qureshizayyan.github.io/Weather-App/#");