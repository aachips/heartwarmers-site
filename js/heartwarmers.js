/**
 * Inject Header - Injects the basic default header at the top of the page
 * 
 */

function injectHeader() {
  const headerHTML = `
    <header role="banner">
      <div id="header">
        <div id="wordmark">
          <h1>Heartwarmers</h1>
          <h2>Staying Warm this Winter</h2>
        </div>
        <div>
          <img src="assets/heartwarmer-logo.png" alt="Heartwarmers logo." width="125" height="125">
        </div>
      </div>
      <nav role="navigation" class="navbar">
        <input id="nav-box" type="checkbox">
        <label for="nav-box" id="nav-trigger">&equiv; Menu</label>
        <ul>
          <li><a href="index.html">About</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="develop.html">The App</a></li>
          <li class="launch"><a href="/prototype/index.html" target="_blank">Launch Prototype</a></li>
        </ul>
      </nav>
    </header>
  `;
  
  const headerContainer = document.createElement('div');
  headerContainer.innerHTML = headerHTML;
  const header = headerContainer.querySelector('header');
  document.body.insertBefore(header, document.body.firstChild);
}
  
/**
 * includeFooter - Injects a basic Footer at the end of the page with basic information about the project, terms of use, and how to be part of open-source development.
 * 
 */
  
function includeFooter() {
  const footerHTML = 
    `
      <footer class="footer" role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
            <h3>About this Prototype</h3>
            <p>This is an application prototype for Heartwarmers made for WEB125. It is an open blueprint for others to build on. You can find the source code and root folder on Github</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Heartwarmers. Open Source Creative Commons License No Commercial Use. Made by A. A. Chips</p>
        </div>
        <ul class="handles">
            <li><a href="https://discord.gg/AQSNf7CPc5"><img src="assets/icons/discord.png" alt="Discord" width="64" height="64"></a></li>
            <li><a href="https://github.com/aachips/heartwarmers.git"><img src="assets/icons/github-w.png" alt="GitHub" width="64" height="64"></a></li>
            <li><a href="https://ko-fi.com/aachips"><img src="assets/icons/kofi.png" alt="Kickstarter" width="64" height="64"></a></li>
        </ul>
    </footer>`; 

  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = footerHTML;
  const footer = footerContainer.querySelector('footer');
  document.body.appendChild(footer);
}

/* Kickstarter Pledges Section */

function includeKickstarterPledges() {
  const kickstarterHTML = 
    `
      <div class="dark-bg" id="kickstarter">
        <h2>Kickstarter Pledges</h2>
        <p>By making a financial pledge towards this and other projects, you are allowing me to focus my time towards development of Heartwarmers.</p>
        <a href="https://www.kickstarter.com" class="button" id="kickstarter-button"><img src="assets/icons/kickstarter_button_02.png" alt="Click here to support us on Kickstarter." width="280" height="68"></a>
      </div>
    `;

  const kickstarterContainer = document.createElement('div');
  kickstarterContainer.innerHTML = kickstarterHTML;
  const kickstarter = kickstarterContainer.querySelector('#kickstarter');
  const blogSection = document.getElementById('blog');
  if (blogSection) {
    blogSection.insertBefore(kickstarter, blogSection.firstChild);
  }
  if (!blogSection) {
    document.body.appendChild(kickstarter);
  }
}

/* Registration Form */

document.addEventListener('DOMContentLoaded', () => {
  const regFormHtml = `
    <h2 class="center">Register a location</h2>
    <form action="php/registration-form-handler.php" id="register-location-form" method="post">
      <fieldset>
        <legend>Section 1: Location Information</legend>
        <label for="business-name">Business/Organization Name: <input type="text" name="business-name" id="business-name"></label>
        <label for="location-type">Type of Location: <select name="location-type" id="location-type">
          <option value="Business">Business</option>
          <option value="Non-Profit">Non-Profit</option>
          <option value="Government Organization">Government Organization</option>
          <option value="Religious Institution">Religious Institution</option>
          <option value="Community Center">Community Center</option>
          <option value="Other">Other (please specify)</option>
        </select></label>
        <label for="address">Address: <input type="text" name="address" id="address"></label>
        <label for="phone">Phone Number: <input type="text" name="phone" id="phone"></label>
        <label for="website">Website: <input type="text" name="website" id="website"></label>
        <label for="contact-person">Contact Person (if applicable): <input type="text" id="contact-person" name="contact-person"></label>
        <label for="contact-email">Contact Person's Email: <input type="text" name="contact-email" id="contact-email"></label>
      </fieldset>     
      <fieldset class="free-offerings">
        <legend>Free Offerings</legend>         
          <label class="checklist-item" for="restrooms">
            Restrooms
            <input type="checkbox" name="free-offerings" value="Restrooms" id="restrooms">
          </label>         
          <label class="checklist-item" for="indoor-seating">
            Indoor Seating
            <input type="checkbox" name="free-offerings" value="Indoor Seating" id="indoor-seating">
          </label>     
          <label class="checklist-item" for="hot-water">
            Hot Water/Coffee
            <input type="checkbox" name="free-offerings" id="hot-water" value="Hot Water/Coffee">
          </label>         
          <label class="checklist-item" for="phone-charging">
            Phone Charging Outlets
            <input type="checkbox" name="free-offerings" value="Phone Charging Outlets" id="phone-charging">
          </label>         
          <label class="checklist-item" for="wifi">
            Wifi
            <input type="checkbox" name="free-offerings" value="Wifi" id="wifi">
          </label>         
          <label class="checklist-item" for="free-meals">
            Free Meals / Free/Pay-It-Forward Meals
            <input type="checkbox" name="free-offerings" value="Free/Pay-It-Forward Meals" id="free-meals">
          </label>         
          <label class="checklist-item" for="showers">
            Showers
            <input type="checkbox" name="free-offerings" value="Showers" id="showers">
          </label>         
          <label class="checklist-item" for="laundry">
            Laundry Facilities
            <input type="checkbox" name="free-offerings" value="Laundry Facilities" id="laundry">
          </label>         
          <label class="checklist-item" for="water">
            Potable Water
            <input type="checkbox" name="free-offerings" value="Potable Water" id="water">
          </label>         
          <label class="checklist-item" for="personal-hygiene">
            Personal Hygiene Products
            <input type="checkbox" name="free-offerings" value="Personal Hygiene Products" id="personal-hygiene">
          </label>         
          <label class="checklist-item" for="warm-clothing">
            Warm Clothing
            <input type="checkbox" name="free-offerings" value="Warm Clothing" id="warm-clothing">
          </label>         
          <label class="checklist-item" for="blankets">
            Blankets/Sleeping Bags
            <input type="checkbox" name="free-offerings" value="Blankets/Sleeping Bags" id="blankets">
          </label>         
          <label class="checklist-item" for="pet-food-supplies">
            Pet Food/Supplies
            <input type="checkbox" name="free-offerings" value="Pet Food/Supplies" id="pet-food-supplies">
          </label>     
          <label class="checklist-item" for="transportation-vouchers">
            Transportation Vouchers
            <input type="checkbox" name="free-offerings" value="Transportation Vouchers" id="transportation-vouchers">
          </label>         
          <label class="checklist-item" for="haircuts">
            Haircuts
            <input type="checkbox" name="free-offerings" value="Haircuts" id="haircuts">
          </label>         
          <label class="checklist-item" for="job-training">
            Job Training/Placement Services
            <input type="checkbox" name="free-offerings" value="Job Training/Placement Services" id="job-training">
          </label>         
          <label class="checklist-item" for="legal-aid">
            Legal Aid
            <input type="checkbox" name="free-offerings" value="Legal Aid" id="legal-aid">
          </label>          
          <label class="checklist-item" for="mha">
            Mental Health/Addiction Counseling
            <input type="checkbox" name="free-offerings" value="Mental Health/Addiction Counseling" id="mha">
          </label>         
          <label class="checklist-item" for="other">
            Other (please specify)
            <input type="checkbox" name="free-offerings" value="Other" id="other">
          </label>         
          <label class="checklist-item" for="other-txt">
            Other (please specify)
            <input type="text" name="other" id="other-txt">
          </label>
        </fieldset>       
        <fieldset>
          <legend>Hours of Operation for Free Offerings</legend>
          <label for="hours">Hours of Operation for Free Offerings:</label>
          <input type="text" name="hours" id="hours">
        </fieldset>       
        <fieldset>
          <legend>Additional Information</legend>
          <label for="restrictions">Any Restrictions or Requirements for Accessing Services:
            <input type="text" name="restrictions" id="restrictions">
          </label>         
          <label for="comments">Additional Comments or Information:
            <input type="text" name="comments" id="comments">
          </label>
        </fieldset>       
        <fieldset>
          <legend>Submitter Information</legend>
          <label for="submitter-name">Your Name:<input type="text" name="submitter-name" id="submitter-name"></label>         
          <label for="submitter-email">Your Email:<input type="text" name="submitter-email" id="submitter-email"></label>         
          <label for="submitter-relationship">Your Relationship to the Location:<select name="submitter-relationship" id="submitter-relationship">
            <option value="">Select one</option>
            <option value="Owner/Manager">Owner/Manager</option>
            <option value="Employee">Employee</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Community Member">Community Member</option>
            <option value="Other">Other (please specify)</option>
          </select>
        </fieldset>
      <input type="submit" class="button" value="Submit Location">
    </form>
  `;

  const emailPdfForm = `
    <h2>Email PDF</h2>
    <form id="email-pdf-form" action="php/email-pdf-handler.php" method="post">
      <label for="name">Name: <input type="text" id="name" name="name"></label>
      <label for="email">Email: <input type="email" id="email" name="email"></label>
      <label for="location">Location: <input type="text" id="location" name="location"></label>
      <label for="interest">What is your interest in the project?</label>
      <textarea cols="75" rows="10" id="interest" name="interest"></textarea>
      <input type="submit" class="button" value="Email Advocacy Guide PDF">
    </form>
  `;


  const regFormContainer = document.querySelector('#register-form-container');
  const emailPdfContainer = document.querySelector('#email-pdf-container');
  regFormContainer.innerHTML = regFormHtml;
  emailPdfContainer.innerHTML = emailPdfForm;
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const modals = document.querySelectorAll('.modal');

  /* make modals hidden by default on page */
  modals.forEach((modal) => {
    modal.style.display = 'none';
  });

  /* For each modal button, add a click event listener that toggles the modal when clicked */

  function toggleModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    const backdrop = modal.closest('.modal-backdrop');
    const shouldShow = modalContent.style.display === 'none';

    modalContent.style.display = shouldShow ? 'block' : 'none';
    modal.style.display = shouldShow ? 'block' : 'none';
    backdrop.style.display = shouldShow ? 'block' : 'none';
  }

  document.querySelectorAll('.modal-button').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(modalId).closest('.modal');
      toggleModal(modal);
    });
  });



  const closeModalButton = document.createElement('button');
  closeModalButton.className = 'close-button';
  closeModalButton.innerHTML = '&times;';
  closeModalButton.addEventListener('click', () => {
    toggleModal(modal);
  });

  modalContent.appendChild(closeModalButton);
});




  modalBackdrops.forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        toggleModal(modals);
      }
    });
  }); 
  




/* Dynamically create Blog Post section */
async function createBlogPostSection(containerId, jsonDataUrl) {
  const blogPostsContainer = document.getElementById(containerId);
  const response = await fetch(jsonDataUrl);
  const data = await response.json();

  if (Array.isArray(data.posts)) {
    const blogCardContainer = document.createElement('div');
    blogCardContainer.className = 'blog-card-container';

    const cardSection = document.createElement('div');
    cardSection.className = 'card-section';

    data.posts.forEach((post) => {
      const blogPostCard = document.createElement('a');
      blogPostCard.href = `single.html?id=${post.id}`; 
      blogPostCard.id = `${post.id}`;
      blogPostCard.className = 'blog-card';
      blogPostCard.innerHTML = `
        <img src="${post.preview.thumbnail}" alt="${post.preview?.altText}">
        <h3>${post.title}</h3>
      `;
      cardSection.appendChild(blogPostCard);
    });

    blogCardContainer.appendChild(cardSection);
    blogPostsContainer.appendChild(blogCardContainer);
    // want overflow hidden on blogPostsContainer and blogCardContainer to be long
  }
}

/* Open Single Blog Post */
function renderPost(postId) {
  fetch('js/blog-posts.json')
    .then((response) => response.json())
    .then((data) => {
      const post = data.posts.find(post => post.id === postId);
      if (!post) {
        console.error(`Post not found with ID ${postId}`);
        return;
      }
      
      const markdownFilePath = `markdown/${post.content}`;
      fetch(markdownFilePath)
        .then((response) => response.text())
        .then((markdownContent) => {
          const htmlContent = marked.parse(markdownContent);
          const postHtml = `
            <div class="post-container">
              <h1 class="post-title">${post.title}</h1>
              <img src="${post.preview.thumbnail}" alt="${post.title}" width="325" height="325" class="post-image">
              <p class="post-description">${post.blurb}</p>
              <p class="post-tags">Tags: ${post.preview.tags.join(', ')}</p>
              ${htmlContent}
            </div>
            `;

          const postElement = document.getElementById('post-content');
          postElement.innerHTML = postHtml;
        })
        .catch((error) => {
          console.error(`Error fetching Markdown content: ${error}`);
        });
    })
    .catch((error) => {
      console.error(`Error fetching post data: ${error}`);
    });
}

/* Carousel */
 const blogPostsContainer = document.getElementById('blog-post-section');
 const carouselControls = document.createElement('div');
 carouselControls.classList.add('carousel-controls');
 blogPostsContainer.appendChild(carouselControls);
 
 const prevButton = document.createElement('button');
 prevButton.classList.add('prev');
 prevButton.innerHTML = '&#8592;';
 carouselControls.appendChild(prevButton);
 
 const nextButton = document.createElement('button');
 nextButton.classList.add('next');
 nextButton.innerHTML = '&#8594;';
 carouselControls.appendChild(nextButton);
 
 // Add event listeners to the buttons
 
 nextButton.addEventListener('click', () => {
   goToSlide('next');
 });
 
 prevButton.addEventListener('click', () => {
   goToSlide('prev');
 }); 
 
  // Add the carousel functionality
 let currentSlide = 0;
 const slideWidth = blogPostsContainer.children[0].offsetWidth + 20;
 function goToSlide(direction) {
   const cardSection = blogPostsContainer.querySelector('.card-section');
   const cardWidth = cardSection.children[0].offsetWidth;
   const numCards = cardSection.children.length;
   const containerWidth = numCards * cardWidth;
   cardSection.style.width = `${containerWidth}px`;
   if (direction === 'next') {
    currentSlide = (currentSlide + 1) % numCards;
  } else {
    currentSlide = (currentSlide - 1 + numCards) % numCards;
  }

   const newOffset = -currentSlide * cardWidth;
   console.log('Current Slide:', currentSlide);
  console.log('New Offset:', newOffset);

   cardSection.style.transform = `translateX(${newOffset}px)`;
 }
