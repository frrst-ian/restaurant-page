const menuPage = () => {

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    const createDishTitle = (titleText) => {
        const div = document.createElement('div');
        div.classList.add('maindish-title');
        const title = document.createElement('p');
        title.textContent = titleText;
        div.appendChild(title);
        return div;
    }

    const div1 = createDishTitle('Sushi');
    const div2 = createDishTitle('Ramen');
    const div3 = createDishTitle('Sashimi');
    
    menuContainer.appendChild(div1);
    menuContainer.appendChild(div2);
    menuContainer.appendChild(div3);

    document.getElementById('content').appendChild(menuContainer);


};

export { menuPage }