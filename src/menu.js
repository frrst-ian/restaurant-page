const menuPage = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.classList.add('maindish-div');
    div2.classList.add('maindish-div');
    div3.classList.add('maindish-div');

 


    document.getElementById('content').appendChild(menuContainer);
    document.getElementById('menu-container').appendChild(div1);
    document.getElementById('menu-container').appendChild(div2);
    document.getElementById('menu-container').appendChild(div3);






};

export { menuPage }