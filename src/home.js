import ramenImages from './assets/ramen.jpg';

const homePage = () => {
    const header = document.createElement('h1');
    header.textContent = 'Kaze\'s Bar';
    const para = document.createElement('p');
    para.textContent = 'Welcome to Kaze\'s Restaurant! ';
    const descPara = document.createElement('p');
    descPara.textContent = 'Our food and service are top notch and will make you crave for more!';
    const ramenImage = document.createElement('img');
    ramenImage.src = ramenImages;
    document.getElementById('content').appendChild(header);
    document.getElementById('content').appendChild(para);
    document.getElementById('content').appendChild(descPara);
    document.getElementById('content').appendChild(ramenImage);
    

}

export{homePage};