const contactPage = ()  => {
    const contactTitle = document.createElement('p');
    contactTitle.setAttribute('id' , 'contact-title');
    contactTitle.textContent= 'Contact Us';

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id','contact-div');

    const contactContentTitle = document.createElement('p');
    contactContentTitle.setAttribute('id' , 'contact-content-title');
    contactContentTitle.textContent = 'General Manager';

    const contactContent =document.createElement('p');
    contactContent.setAttribute('id' , 'contact-content');
;
    contactContent.innerHTML = '09222555100' + '<br>' + 'delusionall@imreal.com'

    document.getElementById('content').appendChild(contactTitle);
    document.getElementById('content').appendChild(contactDiv);
    document.getElementById('contact-div').appendChild(contactContentTitle)
    document.getElementById('contact-div').appendChild(contactContent);


}
export{contactPage};