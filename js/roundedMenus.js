// Desktop Version JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Get all icons and special icons for each row
    const firstRowIcons = document.querySelectorAll('.dt-iconsSet:not(.dt-second-row):not(.dt-third-row) .dt-icon');
    const secondRowIcons = document.querySelectorAll('.dt-second-row .dt-icon');
    const thirdRowIcons = document.querySelectorAll('.dt-third-row .dt-icon');
    const turquoiseIcon = document.querySelector('.dt-turquoise-icon');
    const violetIcon = document.querySelector('.dt-violet-icon');
    const yellowIcon = document.querySelector('.dt-yellow-icon');
    const orangeIcon = document.querySelector('.dt-orange-icon');
    
    const firstIconsSet = document.querySelector('.dt-iconsSet:not(.dt-second-row):not(.dt-third-row)');
    const secondIconsSet = document.querySelector('.dt-second-row');
    const thirdIconsSet = document.querySelector('.dt-third-row');

    // Variables for managing timeouts
    let secondRowTimeout;
    let lastHoveredIcon = null;

    // Function to hide text for all icons in a row
    function hideAllTextInRow(rowIcons) {
        rowIcons.forEach(icon => {
            const container = icon.querySelector('.dt-icon-container');
            container.querySelector('h2').style.opacity = '0';
            container.querySelector('p').style.opacity = '0';
            container.querySelector('h2').style.visibility = 'hidden';
            container.querySelector('p').style.visibility = 'hidden';
        });
    }

    // Function to show text for specific icon
    function showIconText(icon) {
        const container = icon.querySelector('.dt-icon-container');
        container.querySelector('h2').style.opacity = '1';
        container.querySelector('p').style.opacity = '1';
        container.querySelector('h2').style.visibility = 'visible';
        container.querySelector('p').style.visibility = 'visible';
    }

    // Function to set default state for first row
    function setFirstRowDefaultState() {
        yellowIcon.classList.add('dt-active');
        hideAllTextInRow(firstRowIcons);
        showIconText(yellowIcon);
        firstRowIcons.forEach(icon => {
            if (icon !== yellowIcon) icon.classList.remove('dt-active');
        });
    }

    // Function to set default state for second row
    function setSecondRowDefaultState() {
        orangeIcon.classList.add('dt-active');
        hideAllTextInRow(secondRowIcons);
        showIconText(orangeIcon);
        secondRowIcons.forEach(icon => {
            if (icon !== orangeIcon) icon.classList.remove('dt-active');
        });
    }

    // Function to set default state for third row without animation
    function setThirdRowDefaultStateNoAnimation() {
        turquoiseIcon.classList.add('dt-active');
        violetIcon.classList.add('dt-active');
        showIconText(turquoiseIcon);
        showIconText(violetIcon);
        
        // Remove animation
        turquoiseIcon.querySelector('.dt-iconBg').style.transition = 'none';
        turquoiseIcon.querySelector('.dt-icon-container').style.transition = 'none';
        violetIcon.querySelector('.dt-iconBg').style.transition = 'none';
        violetIcon.querySelector('.dt-icon-container').style.transition = 'none';
        
        // Restore animation after small delay
        setTimeout(() => {
            turquoiseIcon.querySelector('.dt-iconBg').style.transition = '';
            turquoiseIcon.querySelector('.dt-icon-container').style.transition = '';
            violetIcon.querySelector('.dt-icon-container').style.transition = '';
            violetIcon.querySelector('.dt-icon-container').style.transition = '';
        }, 50);
    }

    // Event handlers for first row
    firstRowIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            if (this === yellowIcon) {
                setFirstRowDefaultState();
                return;
            }
            hideAllTextInRow(firstRowIcons);
            this.classList.add('dt-active');
            yellowIcon.classList.remove('dt-active');
            firstRowIcons.forEach(i => {
                if (i !== this && i !== yellowIcon) i.classList.remove('dt-active');
            });
            showIconText(this);
        });

        icon.addEventListener('mouseleave', function() {
            if (this === yellowIcon && this.classList.contains('dt-active')) {
                return;
            }
            
            this.classList.remove('dt-active');
            hideAllTextInRow([this]);
            
            if (this !== yellowIcon) {
                yellowIcon.classList.add('dt-active');
                showIconText(yellowIcon);
            }
        });
    });

    // Event handlers for second row
    secondRowIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            // Clear previous timeout
            clearTimeout(secondRowTimeout);

            // If transitioning from another icon
            if (lastHoveredIcon && lastHoveredIcon !== this) {
                // First remove active class from previous icon
                lastHoveredIcon.classList.remove('dt-active');
                
                // Add active class to new icon
                this.classList.add('dt-active');
                
                // Show text for new icon
                showIconText(this);
            } else {
                // If this is first hover
                hideAllTextInRow(secondRowIcons);
                this.classList.add('dt-active');
                secondRowIcons.forEach(i => {
                    if (i !== this) i.classList.remove('dt-active');
                });
                showIconText(this);
            }
            
            lastHoveredIcon = this;
        });

        icon.addEventListener('mouseleave', function() {
            // Set timeout
            secondRowTimeout = setTimeout(() => {
                this.classList.remove('dt-active');
                hideAllTextInRow([this]);
                
                orangeIcon.classList.add('dt-active');
                showIconText(orangeIcon);
                lastHoveredIcon = null;
            }, 200);
        });
    });

    // Event handlers for third row
    thirdRowIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function() {
            if (this === turquoiseIcon || this === violetIcon) {
                return;
            }

            if (index === 1) {
                turquoiseIcon.classList.remove('dt-active');
                hideAllTextInRow([turquoiseIcon]);
                this.classList.add('dt-active');
                showIconText(this);
            }
            else if (index === 3) {
                violetIcon.classList.remove('dt-active');
                hideAllTextInRow([violetIcon]);
                this.classList.add('dt-active');
                showIconText(this);
            }
        });

        if (index === 1 || index === 3) {
            icon.addEventListener('mouseleave', function() {
                this.classList.remove('dt-active');
                hideAllTextInRow([this]);

                if (index === 1) {
                    turquoiseIcon.classList.add('dt-active');
                    showIconText(turquoiseIcon);
                } else if (index === 3) {
                    violetIcon.classList.add('dt-active');
                    showIconText(violetIcon);
                }
            });
        }
    });

    // Set initial states for all rows
    setFirstRowDefaultState();
    setSecondRowDefaultState();
    setThirdRowDefaultStateNoAnimation();
});

// Mobile Version JavaScript
const mobileMenu = {
    icons: document.querySelectorAll('.mb-roundedIcons .mb-iconsSet .mb-icon'),
    activeIcon: null,
    lastTapTime: 0,
    isScrolling: false,
    scrollTimeout: null,

    init() {
        // Activate first icon on load
        if (this.icons.length > 0) {
            this.activateIcon(this.icons[0]);
        }

        // Add touch and click event listeners
        this.icons.forEach(icon => {
            icon.addEventListener('touchstart', this.handleTouchStart.bind(this));
            icon.addEventListener('touchend', this.handleTouchEnd.bind(this));
            icon.addEventListener('click', this.handleClick.bind(this));
        });

        // Add scroll event listener
        window.addEventListener('scroll', this.handleScroll.bind(this));
    },

    handleTouchStart(event) {
        this.lastTapTime = Date.now();
        this.isScrolling = false;
    },

    handleTouchEnd(event) {
        const currentTime = Date.now();
        const tapDuration = currentTime - this.lastTapTime;

        if (tapDuration < 200 && !this.isScrolling) {
            const icon = event.currentTarget;
            this.activateIcon(icon);
        }
    },

    handleClick(event) {
        const icon = event.currentTarget;
        this.activateIcon(icon);
    },

    handleScroll() {
        this.isScrolling = true;
        clearTimeout(this.scrollTimeout);
        
        this.scrollTimeout = setTimeout(() => {
            this.isScrolling = false;
        }, 150);
    },

    activateIcon(icon) {
        if (this.isScrolling) return;

        // Remove active class from all icons
        this.icons.forEach(i => i.classList.remove('mb-active'));

        // Add active class to clicked icon
        icon.classList.add('mb-active');
        this.activeIcon = icon;
    }
};

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    mobileMenu.init();
});
