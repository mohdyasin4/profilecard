
function changeStrokeColor(color) {
    var paths = document.querySelectorAll(".my-certification svg path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute("stroke", color);
    }
}

function changeStrokeColor2(color) {
    var paths = document.querySelectorAll(".my-portfolio svg path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute("stroke", color);
    }
}


function changeStrokeColor3(color) {
    var paths = document.querySelectorAll(".my-social svg path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute("stroke", color);
    }
}


function changeStrokeColor4(color) {
    var paths = document.querySelectorAll(".my-skill svg path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute("stroke", color);
    }
}


function changeStrokeColor5(color) {
    var paths = document.querySelectorAll(".my-resume svg path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute("stroke", color);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var portfolioContainer = document.querySelector('.portfolio-container');

    if(portfolioContainer){
        portfolioContainer.addEventListener('click', function(){
            window.location.href = 'https://mohdyasin.dorik.io/portfolio'; 
        });
    }
});

document.addEventListener('DOMContentLoaded',function(){
    var resumeContainer = document.getElementById('resume-container');

    if (resumeContainer){
        resumeContainer.addEventListener('click',function(){
            var pdfUrl = './resume.pdf';

            var link = document.createElement('a');
            link.href=pdfUrl;
            link.download = 'resume.pdf';
            link.target = '_blank';

            link.click();
        })
    }
})

 const socialContainer = document.querySelector('.social-container');
        const popupContainer = document.querySelector('#popup-container');
        const popupCloseButton = document.querySelector('#popup-close-button');

        // Open the popup smoothly when social-container is clicked
        socialContainer.addEventListener('click', () => {
            popupContainer.style.display = 'block';
            setTimeout(() => {
                popupContainer.style.opacity = '1';
            }, 10);
        });

        // Close the popup smoothly when the close button is clicked
        popupCloseButton.addEventListener('click', () => {
            popupContainer.style.opacity = '0';
            setTimeout(() => {
                popupContainer.style.display = 'none';
            }, 300); // Match the transition duration (0.3s)
        });

        // Close the popup when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === popupContainer) {
                popupContainer.style.opacity = '0';
                setTimeout(() => {
                    popupContainer.style.display = 'none';
                }, 300); // Match the transition duration (0.3s)
            }
        });

        const certificateContainer = document.querySelector('.certificate-container');
        const certificatePopupContainer = document.querySelector('#certificate-popup-container');
        const certificatePopupCloseButton = document.querySelector('#certificate-popup-close-button');
        
        // Open the certificate popup smoothly when certificate-container is clicked
        certificateContainer.addEventListener('click', () => {
            certificatePopupContainer.style.display = 'block';
            setTimeout(() => {
                certificatePopupContainer.style.opacity = '1';
            }, 10);
        });
        
        // Close the certificate popup smoothly when the close button is clicked
        certificatePopupCloseButton.addEventListener('click', () => {
            certificatePopupContainer.style.opacity = '0';
            setTimeout(() => {
                certificatePopupContainer.style.display = 'none';
            }, 300); // Match the transition duration (0.3s)
        });
        
        // Close the certificate popup when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === certificatePopupContainer) {
                certificatePopupContainer.style.opacity = '0';
                setTimeout(() => {
                    certificatePopupContainer.style.display = 'none';
                }, 300); // Match the transition duration (0.3s)
            }
        });
        