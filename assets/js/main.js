$(document).ready(function () {
    var testimonialSlider = $(".testimonialSlider");
    var gallerySlide = $(".gallery-slide");
    var gallerySlide2 = $(".gallery-slide2");

    testimonialSlider.owlCarousel({
        loop: true,
        margin: 24,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 4,
                loop: false,
                autoplay: false
            },
        },
    });

    gallerySlide.owlCarousel({
        center: true,
        loop: true,
        margin: 24,
        nav: false,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            425: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    //Alternate Direction

    gallerySlide2.owlCarousel({
        center: true,
        items: 3,
        rtl: true,
        loop: true,
        margin: 24,
        nav: false,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 7000,
        autoplaySpeed: 7000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            425: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});

// custom site loading loader //

window.addEventListener("load", function () {
    let loader = document.getElementById('siteLoader');
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 2000);
  });

// Asynchronous operations here For AOS initialization //

document.addEventListener("DOMContentLoaded", async function () {
    try {
        await someAsyncTask();
       // AOS initialization //
        AOS.init();
        console.log("AOS initialized successfully!");
    } catch (error) {
        console.error("An error occurred while initializing AOS. Please try again.");
    }
});

// Technology stack section hover area start //

document.addEventListener("DOMContentLoaded", function () {
    const hoverTargetOne = document.querySelectorAll('.hexagon.hover');
    const hoverTargetTwo = document.querySelectorAll('.hexagon.hover-2');
    const hoverTargetThree = document.querySelectorAll('.hexagon.hover-3');
    const hoverTargetFour = document.querySelectorAll('.hexagon.hover-4');
    function addHoverEffect(targets) {
        targets.forEach(hex => {
            hex.classList.add('hover-effect');
        });
    }
    function removeHoverEffect(targets) {
        targets.forEach(hex => {
            hex.classList.remove('hover-effect');
        });
    }
    hoverTargetOne.forEach(hex => {
        hex.addEventListener('mouseover', () => addHoverEffect(hoverTargetOne));
        hex.addEventListener('mouseout', () => removeHoverEffect(hoverTargetOne));
    });
    hoverTargetTwo.forEach(hex => {
        hex.addEventListener('mouseover', () => addHoverEffect(hoverTargetTwo));
        hex.addEventListener('mouseout', () => removeHoverEffect(hoverTargetTwo));
    });
    hoverTargetThree.forEach(hex => {
        hex.addEventListener('mouseover', () => addHoverEffect(hoverTargetThree));
        hex.addEventListener('mouseout', () => removeHoverEffect(hoverTargetThree));
    });
    hoverTargetFour.forEach(hex => {
        hex.addEventListener('mouseover', () => addHoverEffect(hoverTargetFour));
        hex.addEventListener('mouseout', () => removeHoverEffect(hoverTargetFour));
    });
});

// Technology stack section hover area end //

// error page //

// function pageExists(url) {
//   return fetch(url, { method: 'HEAD' })
//   .then(response => response.ok)
//   .catch(() => false);
// }

// document.querySelectorAll('.navbar-nav a').forEach(link => {
//   link.addEventListener('click', async (event) => {
//     const href = event.target.getAttribute('href');
//     const exists = await pageExists(href);

//     if (!exists) {
//         event.preventDefault();
//         window.location.href = '404page.html';
//     }
//   });
// });

// <!-- =============================== Navbar active on click =============================== --> //
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu .menu-item");
    const dropdownItems = document.querySelectorAll(".dropdown .dropdown-item"); // Ensure you have this selector
    const dropdown = document.querySelector(".dropdown"); // Ensure this points to your dropdown container
    const currentPage = window.location.href;

    function updateActiveMenuItems() {
        menuItems.forEach(menuItem => {
            if (menuItem.href === currentPage) {
                menuItem.classList.add('current-menu-item');
            } else {
                menuItem.classList.remove('current-menu-item');
            }
        });
    }

    function checkCurrentPage() {
        let isDropdownActive = false;
        dropdownItems.forEach(item => {
            if (currentPage.includes(item.getAttribute("href"))) {
                isDropdownActive = true;
            }
        });

        if (isDropdownActive) {
            dropdown.classList.add("current-menu-item");
        } else {
            dropdown.classList.remove("current-menu-item");
        }
    }

    const observer = new IntersectionObserver((entries) => {
        let anyItemInView = entries.some(entry => entry.isIntersecting);

        if (anyItemInView) {
            dropdown.classList.add("current-menu-item");
        } else {
            checkCurrentPage();
        }
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    });

    dropdownItems.forEach(item => {
        observer.observe(item);
    });

    updateActiveMenuItems();
    checkCurrentPage();

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function () {
            menuItems.forEach(item => item.classList.remove('current-menu-item'));
            this.classList.add('current-menu-item');
        });
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            dropdown.classList.add('current-menu-item');
            menuItems.forEach(item => item.classList.remove('current-menu-item'));
        });
    });
});

// pages scroll why-choose-us right side secton //

document.addEventListener("DOMContentLoaded", function () {
    function initializeTimeline(tabPane) {
        const timelineLine = tabPane.querySelector(".timeline-line");
        const timelineImage = tabPane.querySelector(".timeline-image");
        const timelineContainer = tabPane.querySelector(".my-timeline");

        const containerHeight = tabPane.querySelector(".my-container").offsetHeight;
        const containerCount = tabPane.querySelectorAll(".my-container").length;
        const maxTimelineHeight = containerHeight * containerCount - timelineContainer.clientHeight;

        timelineContainer.addEventListener("scroll", () => {
            const scrollPercentage = Math.min(100, (timelineContainer.scrollTop / maxTimelineHeight) * 100);
            timelineLine.style.height = `${scrollPercentage}%`;
            timelineImage.style.top = `${scrollPercentage}%`;
        });
    }

    const firstTabPane = document.querySelector(".tab-pane.active");
    initializeTimeline(firstTabPane);

    document.querySelectorAll('.nav-tabs .nav-link').forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (event) {
            const activeTabPane = document.querySelector(event.target.getAttribute('data-bs-target'));
            const previousTimelineContainer = document.querySelector('.tab-pane.active .my-timeline');
            if (previousTimelineContainer) {
                const cloneContainer = previousTimelineContainer.cloneNode(true);
                previousTimelineContainer.parentNode.replaceChild(cloneContainer, previousTimelineContainer);
            }
            initializeTimeline(activeTabPane);
        });
    });
});


// apply form upload file //

const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');

uploadArea.addEventListener('click', () => {
    fileInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.backgroundColor = "#e0f7ff";
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.backgroundColor = "#f0f8ff";
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.backgroundColor = "#f0f8ff";
    const files = e.dataTransfer.files;

    if (files.length > 0) {
        handleFileUpload(files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFileUpload(file);
    }
});

function handleFileUpload(file) {
    uploadArea.innerHTML = '';

    const pdfIcon = document.createElement('i');
    pdfIcon.classList.add('pdf-icon');
    pdfIcon.textContent = '';
    uploadArea.appendChild(pdfIcon);

    const fileName = document.createElement('p');
    fileName.classList.add('file-details');
    fileName.textContent = `File: ${file.name}`;
    uploadArea.appendChild(fileName);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.textContent = 'Remove';
    removeButton.style.cursor = 'pointer';
    removeButton.addEventListener('click', () => {
        removeFileReview();
    });
    uploadArea.appendChild(removeButton);
};

function removeFileReview() {
    fileInput.value = '';
    uploadArea.innerHTML = `
                        <img class="upload-icon" src="assets/images/icon/upload-icon.png" alt="Upload Icon">
                        <p>Drop Your Resume here</p>
                    `;
    uploadArea.style.backgroundColor = "#f0f8ff";
};