const aboutPage = ()  => {
    const header = document.createElement('h1');
    header.textContent= 'About Us';

    document.getElementById('content').appendChild(header);

}

export{aboutPage};