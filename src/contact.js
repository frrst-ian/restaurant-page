const contactPage = () => {
    const contactTitle = document.createElement('p');
    contactTitle.setAttribute('id', 'contact-title');
    contactTitle.textContent = 'Contact Us';

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');

    const contactContentTitle = document.createElement('p');
    contactContentTitle.setAttribute('id', 'contact-content-title');
    contactContentTitle.textContent = 'General Manager';

    const contactContent = document.createElement('p');
    contactContent.setAttribute('id', 'contact-content');
    ;
    contactContent.innerHTML = '09222555100' + '<br>' + 'delusional@imreal.com'

    const contactSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    contactSVG.setAttribute('id' , 'contact-svg')
    contactSVG.setAttribute('fill', '#000000');
    contactSVG.setAttribute('width', '200');
    contactSVG.setAttribute('height', '200');
    contactSVG.setAttribute('viewBox', '0 0 32 32');
    contactSVG.setAttribute('style', "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;");
    contactSVG.setAttribute('version', '1.1');
    contactSVG.setAttribute('xml:space', 'preserve');
    document.getElementById('content').appendChild(contactSVG)

    contactSVG.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:serif", "http://www.serif.com/");
    contactSVG.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

    const path = document.createElementNS('http://www.w3.org/2000/svg' , 'path');
    path.setAttribute('d' , "M16,2c-7.727,0 -14,6.273 -14,14c0,7.727 6.273,14 14,14c7.727,0 14,-6.273 14,-14c-0,-7.727 -6.273,-14 -14,-14Zm-6.729,10.345l0.15,0.259l6.23,10.792l0.866,0.5c0,0 -0.861,-0.493 -0.861,-0.493l0.15,0.26c0.475,0.824 1.378,1.386 2.555,1.483c0.993,0.082 2.117,-0.184 3.119,-0.763c1.121,-0.647 2.118,-1.223 2.118,-1.223c0.478,-0.276 0.642,-0.887 0.366,-1.366l-2.077,-3.597c-0.276,-0.478 -0.888,-0.642 -1.366,-0.366l-0.866,0.5c0,-0 -3.846,-6.662 -3.846,-6.662c-0,0 0.866,-0.5 0.866,-0.5c0.478,-0.276 0.642,-0.888 0.366,-1.366l-2.077,-3.597c-0.276,-0.479 -0.888,-0.642 -1.366,-0.366c0,-0 -0.997,0.575 -2.118,1.223c-1.002,0.578 -1.795,1.419 -2.22,2.319c-0.505,1.068 -0.469,2.131 0.006,2.955l0.005,0.008Zm8.117,10.058l-6.39,-11.066c-0.177,-0.307 -0.118,-0.702 0.07,-1.1c0.267,-0.566 0.782,-1.079 1.412,-1.442c0,-0 1.252,-0.723 1.252,-0.723c0,-0 1.077,1.865 1.077,1.865c-0,0 -0.866,0.5 -0.866,0.5c-0.478,0.276 -0.642,0.888 -0.366,1.366l4.846,8.394c0.276,0.478 0.888,0.642 1.366,0.366l0.866,-0.5c0,-0 1.077,1.865 1.077,1.865c0,0 -1.252,0.723 -1.252,0.723c-0.63,0.364 -1.331,0.553 -1.955,0.502c-0.43,-0.035 -0.794,-0.176 -0.976,-0.47l-0.161,-0.28Z")
    contactSVG.appendChild(path);

    document.getElementById('content').appendChild(contactTitle);
    document.getElementById('content').appendChild(contactDiv);
    document.getElementById('contact-div').appendChild(contactContentTitle)
    document.getElementById('contact-div').appendChild(contactContent);


}
export { contactPage };