
const homePage = () => {
  const header = document.createElement('h1');
  header.textContent = 'North Wind';

  const para = document.createElement('p');
  para.textContent = "Elegance on Every Plate.";

  const hoursOpen = document.createElement('p');
  hoursOpen.textContent = 'OPEN 24/7';

  const locationTitle = document.createElement('p');
  locationTitle.textContent = 'LOCATION:';

  const location = document.createElement('p');
  location.textContent = 'St. 123, Albay, Philippines';


  document.getElementById('content').appendChild(header);
  document.getElementById('content').appendChild(para);
  document.getElementById('content').appendChild(hoursOpen);
  document.getElementById('content').appendChild(locationTitle);
  document.getElementById('content').appendChild(location);

  para.setAttribute('id', 'para');
  hoursOpen.setAttribute('id', 'desc-para');
  location.setAttribute('id','location-text');
  locationTitle.setAttribute('id', 'location-title');

  //SVG 
//   <?xml version="1.0" encoding="UTF-8"?>
// <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
// <svg fill="#000000" width="800px" height="800px" viewBox="0 0 15 15" id="restaurant-noodle" xmlns="http://www.w3.org/2000/svg">
//   <path d="M4.457,11.9892,1,8V7H14V8l-3.4961,3.9891ZM3.9882,2.5a.5.5,0,0,0-1,0v.5671l-1.7969.3675a.25.25,0,1,0,.094.4911l1.7029-.2776v.5662l-1.75.0357a.25.25,0,0,0,0,.5l1.75.0357V5.998h1Zm9.5,1.5-7.5.2625V2.9951l7.594-1.0737a.5.5,0,0,0-.1881-.9822L5.9792,2.4555a.4963.4963,0,0,0-.991.0445v.2276l-.493.1009V3.18l.493-.08V4.2974l-.493.01v.4608L13.4882,5a.5.5,0,0,0,0-1ZM10,13H5v.5757h5Z"/>
// </svg>
const logoSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
logoSVG.setAttribute('width' , '800');
logoSVG.setAttribute('height' , '800');
logoSVG.setAttribute('viewBox' ,'0 0 15 15');
logoSVG.setAttribute('id','logo');
document.getElementById('content').appendChild(logoSVG);

const path = document.createElementNS('http://www.w3.org/2000/svg' ,'path');
path.setAttribute("d" , "M4.457,11.9892,1,8V7H14V8l-3.4961,3.9891ZM3.9882,2.5a.5.5,0,0,0-1,0v.5671l-1.7969.3675a.25.25,0,1,0,.094.4911l1.7029-.2776v.5662l-1.75.0357a.25.25,0,0,0,0,.5l1.75.0357V5.998h1Zm9.5,1.5-7.5.2625V2.9951l7.594-1.0737a.5.5,0,0,0-.1881-.9822L5.9792,2.4555a.4963.4963,0,0,0-.991.0445v.2276l-.493.1009V3.18l.493-.08V4.2974l-.493.01v.4608L13.4882,5a.5.5,0,0,0,0-1ZM10,13H5v.5757h5Z"
)
logoSVG.appendChild(path);

}

export { homePage };