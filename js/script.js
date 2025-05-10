document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize AOS ---
    AOS.init({
        duration: 700, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

    // --- Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Project Data ---
    const projectData = {
        'natura': {
            title: 'Natura.lk',
            subtitle: 'E-commerce Platform',
            description: 'A university group project focused on building a functional e-commerce website. My primary contributions were on the frontend, developing user interfaces, ensuring responsiveness, and integrating Firebase for user authentication.',
            tech: 'HTML, CSS, JavaScript, PHP, Firebase Authentication, MySQL, Figma (for design mockups)',
            role: 'Frontend Developer',
            modules: 'Gained experience in team collaboration using Git, frontend development practices, and integrating third-party authentication services.',
            mainImage: 'img/natura-main.png', 
            githubLink: 'https://github.com/ama-23-ops/Natura.lk_website-UniversityProject.git', 
            liveLink: null, 
            gallery: [
                { img: 'img/natura-feat1.png', caption: 'Homepage Design' }, 
                { img: 'img/natura-feat2.png', caption: 'Collections Page' }, 
                { img: 'img/natura-feat3.png', caption: 'Products Page' },
                { img: 'img/natura-feat4.png', caption: 'Product Details Page' },
                { img: 'img/natura-feat5.png', caption: 'Cart Page' },
                { img: 'img/natura-feat6.png', caption: 'Checkout Page' },
                { img: 'img/natura-feat7.png', caption: 'Payment Details Page' },
                { img: 'img/natura-feat8.png', caption: 'Order Summary Page' },
                { img: 'img/natura-feat9.png', caption: 'Contacts Page' },
                { img: 'img/natura-feat10.png', caption: 'About Us Page' },
                { img: 'img/natura-feat11.png', caption: 'Blog Page' },
                { img: 'img/natura-feat12.png', caption: 'User Login/Signup via Firebase' },
                { img: 'img/natura-feat13.png', caption: 'E-mail verification Page' },
                { img: 'img/natura-feat14.png', caption: 'Customer Profile Page' },
                { img: 'img/natura-feat15.png', caption: 'Whishlist Page' },
                { img: 'img/natura-feat16.png', caption: 'Online Chat Page' },
                { img: 'img/natura-feat17.png', caption: 'Customer Blog Page' },
                { img: 'img/natura-feat18.png', caption: 'Admin Dashboard Page' },   
            ]
        },
        'gallerycafe': {
             title: 'Gallery Cafe Website',
             subtitle: 'Fictional Cafe Site',
             description: 'Developed a fully functional and responsive website for a fictional cafe as an individual university project. Implemented frontend design and basic backend logic using PHP for potential future enhancements (like contact forms). Deployed locally using WAMP server.',
             tech: 'HTML, CSS, JavaScript, PHP, WAMP Server',
             role: 'Sole Developer',
             modules: 'Strengthened core web development skills (HTML, CSS, JS), practiced responsive design implementation across different screen sizes.',
             mainImage: 'img/gallerycafe-main.png', 
             githubLink: 'https://github.com/ama-23-ops/GalleryCafeWebsite-UniversityProject.git',
             liveLink: null,
             gallery: [
                 { img: 'img/gallerycafe-feat1.jpeg', caption: 'Homepage Slide 1' }, 
                 { img: 'img/gallerycafe-feat2.jpeg', caption: 'Homepage Slide 2' }, 
                 { img: 'img/gallerycafe-feat3.jpeg', caption: 'Homepage Slide 3' }, 
                 { img: 'img/gallerycafe-feat4.jpeg', caption: 'Featured Dishes Section' },
                 { img: 'img/gallerycafe-feat5.jpeg', caption: 'About Us Page' },
                 { img: 'img/gallerycafe-feat6.jpeg', caption: 'About Us Page' },
                 { img: 'img/gallerycafe-feat7.jpeg', caption: 'Special Promotions Section' },
                 { img: 'img/gallerycafe-feat8.jpeg', caption: 'Events Section' },
                 { img: 'img/gallerycafe-feat9.jpeg', caption: 'Chef Section' },
                 { img: 'img/gallerycafe-feat10.jpeg', caption: 'Menu Page' },
                 { img: 'img/gallerycafe-feat11.jpeg', caption: 'Menu Page' },
                 { img: 'img/gallerycafe-feat13.jpeg', caption: 'Beverages Section' },
                 { img: 'img/gallerycafe-feat14.jpeg', caption: 'Dessert Section' },
                 { img: 'img/gallerycafe-feat15.jpeg', caption: 'Reservation Page' },
                 { img: 'img/gallerycafe-feat16.jpeg', caption: 'Reservation Page' },
                 { img: 'img/gallerycafe-feat17.jpeg', caption: 'Realtime Availability' },
                 { img: 'img/gallerycafe-feat18.jpeg', caption: 'Reviews Section' },
                 { img: 'img/gallerycafe-feat19.jpeg', caption: 'Login page' },
                 { img: 'img/gallerycafe-feat20.jpeg', caption: 'Cart' },
                 { img: 'img/gallerycafe-feat21.jpeg', caption: 'Customer Profile Page' },
                 { img: 'img/gallerycafe-feat22.jpeg', caption: 'Customer Profile Page' },
                 { img: 'img/gallerycafe-feat23.jpeg', caption: 'Admin Dashboard' },
                 { img: 'img/gallerycafe-feat24.jpeg', caption: 'Footer Section' },
                 { img: 'img/gallerycafe-feat25.jpeg', caption: 'Admin Menu Management' },
                 { img: 'img/gallerycafe-feat26.jpeg', caption: 'Admin Order Management' },
                 { img: 'img/gallerycafe-feat27.jpeg', caption: 'Admin Reservation Management' },
                 { img: 'img/gallerycafe-feat28.jpeg', caption: 'Admin User Management' },
             ]
        },
        'techfix': {
            title: 'TechFix E-commerce Platform',
            subtitle: 'SOA-based E-commerce Backend',
            description: 'An individual university project focused on backend development using Service-Oriented Architecture (SOA) principles. Developed RESTful APIs using Python and Flask for handling products, users, and potentially orders. Utilized Flask-SQLAlchemy for ORM and MySQL database interaction.',
            tech: 'Python, Flask, Flask-SQLAlchemy, MySQL, REST APIs, Postman (for testing)',
            role: 'Sole Developer (Backend Focus)',
            modules: 'Learned about SOA concepts, building REST APIs with Flask, database design and interaction using an ORM, and API testing.',
            mainImage: 'img/techfix-main.png', 
            githubLink: 'https://github.com/ama-23-ops/TechFix-UniversityProject.git', 
            liveLink: null,
            gallery: [
                { img: 'img/techfix-feat1.png', caption: 'Login UI' }, 
                { img: 'img/techfix-feat2.png', caption: 'Inventory UI' }, 
                { img: 'img/techfix-feat3.png', caption: 'Inventory UI' }, 
                { img: 'img/techfix-feat4.png', caption: 'Product UI 1' }, 
                { img: 'img/techfix-feat5.png', caption: 'Product UI 2' }, 
                { img: 'img/techfix-feat6.png', caption: 'Product UI 3' },
                { img: 'img/techfix-feat7.png', caption: 'Dashboard' }, 
                { img: 'img/techfix-feat8.png', caption: 'Supplier List UI' }, 
                { img: 'img/techfix-feat9.png', caption: 'Edit User UI' },
                { img: 'img/techfix-feat10.png', caption: 'Add User UI' }, 
                { img: 'img/techfix-feat11.png', caption: 'Quotations UI' },  
            ]
        },
        'dogapp': {
            title: 'Dog Nutrition Mobile App',
            subtitle: 'Android Mobile App',
            description: 'Developed a native Android application for managing dog nutrition as part of a university project. The app allowed users to potentially track food intake, view nutritional information, and manage profiles for their dogs. Data was stored locally using SQLite.',
            tech: 'Kotlin, SQLite, Android Studio, XML (for layouts)',
            role: 'Sole Developer',
            modules: 'Gained practical experience in native Android development with Kotlin, UI design using XML layouts, and local data persistence using SQLite.',
            mainImage: 'img/dogapp-main.png', 
            githubLink: 'https://github.com/ama-23-ops/DogNutrition-UniversityProject.git', 
            liveLink: null,
            gallery: [
                { img: 'img/dogapp-feat1.png', caption: 'Splash Screen' }, 
                { img: 'img/dogapp-feat2.png', caption: 'Login Screen' }, 
                { img: 'img/dogapp-feat3.png', caption: 'Register Screen' }, 
                { img: 'img/dogapp-feat4.png', caption: 'Main Dashboard Screen' }, 
                { img: 'img/dogapp-feat5.png', caption: 'Products Screen' }, 
                { img: 'img/dogapp-feat6.png', caption: 'Profile Screen' }, 
                { img: 'img/dogapp-feat7.png', caption: 'Cart Screen' }, 
                { img: 'img/dogapp-feat8.png', caption: 'Admin Panel Screen' }, 
            ]
        },
        'project5': {
            title: 'Employee Management System', 
            subtitle: 'Java Swing Application', 
            description: 'A Java Swing application for managing employees, departments, and designations. It provides a user interface for HR administrators and assistants to perform CRUD operations on employee data, manage departments and designations, and handle user authentication.', 
            tech: 'Java, Swing, File I/O', 
            role: 'Backend Developer', 
            modules: 'Developed data models (Employee, Department, Designation), file management logic, and UI components for managing employee data.', 
            mainImage: 'img/employee_management_system_main.png', 
            githubLink: 'https://github.com/ama-23-ops/EmployeeManagementSystem-UniversityProject.git', 
            liveLink: null, 
            gallery: [
                { img: 'img/java-feat1.png', caption: 'Common Login Page' }, 
                { img: 'img/java-feat2.png', caption: 'Admin Dashboard' }, 
                { img: 'img/java-feat3.png', caption: 'HR Manager Department Management' }, 
                { img: 'img/java-feat4.png', caption: 'HR Manager Department Management' }, 
                { img: 'img/java-feat5.png', caption: 'HR Manager Designation Management' }, 
                { img: 'img/java-feat6.png', caption: 'HR Manager Designation Management ' }, 
                { img: 'img/java-feat7.png', caption: 'HR Manager Employee Management' }, 
                { img: 'img/java-feat8.png', caption: 'HR Manager Employee Management' }, 
                { img: 'img/java-feat9.png', caption: 'Search Page' }, 
                { img: 'img/java-feat10.png', caption: 'Search page' },
                { img: 'img/java-feat11.png', caption: 'HR Assistant Employee Management' }, 
            ]
        }
    };


    // --- Modal Population Logic ---
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            const card = event.relatedTarget;
            // Extract info from data-* attributes
            const projectId = card.dataset.projectId;
            const data = projectData[projectId];

            // Get modal elements
            const modalTitle = projectModal.querySelector('#modalProjectTitle');
            const modalSubtitle = projectModal.querySelector('#modalProjectSubtitle');
            const modalImage = projectModal.querySelector('#modalProjectImage');
            const modalDetailsContainer = projectModal.querySelector('#modalProjectDetails');
            const modalGalleryContainer = projectModal.querySelector('#modalProjectGallery');
            const modalLinksContainer = projectModal.querySelector('#modalProjectLinks');


            if (data) {
                // --- Populate Basic Info ---
                modalTitle.textContent = data.title || 'Project Title';
                modalSubtitle.textContent = data.subtitle || 'Project Details';
                modalImage.src = data.mainImage || 'img/default-placeholder.png'; // Fallback image
                modalImage.alt = data.title ? `${data.title} Main Image` : 'Project Image';


                // --- Populate Detail Fields ---
                const fields = ['description', 'tech', 'role', 'modules'];
                fields.forEach(field => {
                    const element = modalDetailsContainer.querySelector(`[data-field="${field}"]`);
                    if (element) {
                        element.innerHTML = data[field] ? data[field].replace(/\n/g, '<br>') : 'N/A'; // Replace newlines with <br> if any
                    }
                });

                // --- Populate Links ---
                 modalLinksContainer.innerHTML = ''; // Clear previous links
                 let linksHTML = '';
                 if(data.githubLink){
                     linksHTML += `<a href="${data.githubLink}" target="_blank" class="btn btn-outline-dark btn-sm"><i class="fab fa-github me-1"></i> GitHub Repo</a>`;
                 }
                 if(data.liveLink){
                     linksHTML += `<a href="${data.liveLink}" target="_blank" class="btn btn-outline-primary btn-sm"><i class="fas fa-external-link-alt me-1"></i> Live Demo</a>`;
                 }
                 if(!linksHTML){ // If no links were added
                     linksHTML = '<span class="text-muted">No external links available for this project.</span>';
                 }
                 modalLinksContainer.innerHTML = linksHTML;


                // --- Populate Gallery ---
                modalGalleryContainer.innerHTML = ''; // Clear previous gallery
                if (data.gallery && data.gallery.length > 0) {
                    data.gallery.forEach(item => {
                        const galleryItemHTML = `
                            <div class="col">
                                <figure class="figure text-center">
                                    <a href="${item.img}" data-bs-toggle="tooltip" title="Click to view larger (opens in new tab)" target="_blank">
                                       <img src="${item.img}" class="figure-img img-fluid rounded mb-1 shadow-sm" alt="${item.caption || data.title + ' screenshot'}">
                                    </a>
                                    <figcaption class="figure-caption">${item.caption || ''}</figcaption>
                                </figure>
                            </div>
                        `;
                        modalGalleryContainer.innerHTML += galleryItemHTML;
                    });
                     // Re-initialize tooltips for the newly added gallery images
                     const tooltipTriggerList = [].slice.call(modalGalleryContainer.querySelectorAll('[data-bs-toggle="tooltip"]'));
                     tooltipTriggerList.map(function (tooltipTriggerEl) {
                         return new bootstrap.Tooltip(tooltipTriggerEl);
                     });
                } else {
                    modalGalleryContainer.innerHTML = '<div class="col"><p class="text-muted">No gallery images available for this project.</p></div>';
                }

            } else {
                // Handle case where project data is not found
                modalTitle.textContent = 'Error';
                modalSubtitle.textContent = 'Project data not found.';
                modalImage.src = 'img/default-placeholder.png';
                 modalGalleryContainer.innerHTML = '<div class="col"><p class="text-danger">Could not load project details.</p></div>';
                 modalLinksContainer.innerHTML = '';
                  const fields = ['description', 'tech', 'role', 'modules'];
                 fields.forEach(field => {
                     const element = modalDetailsContainer.querySelector(`[data-field="${field}"]`);
                     if (element) element.textContent = 'N/A';
                 });
            }
        });

         // Optional: Re-initialize tooltips when modal is fully shown if needed elsewhere
         // projectModal.addEventListener('shown.bs.modal', function () {
         //    // Any code to run after modal is fully visible
         // });
    }


    // --- Navbar Active State on Scroll ---
    // Bootstrap Scrollspy handles this via data attributes on <body>

    // --- Shrink Navbar on Scroll (Optional) ---
    // const navbar = document.getElementById('navbar-main');
    // if (navbar) {
    //     window.onscroll = function() {
    //         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             navbar.classList.add('navbar-shrink'); // You'd need to define .navbar-shrink styles in CSS
    //         } else {
    //             navbar.classList.remove('navbar-shrink');
    //         }
    //     };
    // }


}); // End DOMContentLoaded