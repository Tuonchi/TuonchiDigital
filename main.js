// Simple and universal theme toggle
    (function() {
      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = document.getElementById('themeIcon');
      const body = document.body;

      // Load saved theme
      const savedTheme = localStorage.getItem('theme') || 'light';
      body.setAttribute('data-theme', savedTheme);
      themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

      // Toggle theme function
      function toggleTheme() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      }

      // Add click event
      themeToggle.addEventListener('click', toggleTheme);
    })();

    // Simple and universal mobile menu toggle
    (function() {
      const mobileToggle = document.getElementById('mobileToggle');
      const navLinks = document.getElementById('navLinks');

      function toggleMenu() {
        const isActive = mobileToggle.classList.contains('active');
        
        if (isActive) {
          mobileToggle.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          mobileToggle.classList.add('active');
          navLinks.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }

      // Add click event
      mobileToggle.addEventListener('click', toggleMenu);

      // Close menu when clicking on a link
      const navLinksItems = navLinks.querySelectorAll('a');
      navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
          mobileToggle.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
          mobileToggle.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    })();

    // Navbar scroll effect
    (function() {
      const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    })();

    // Scroll animations
    (function() {
      const animateElements = document.querySelectorAll('.animate');
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      });

      animateElements.forEach(function(el) {
        observer.observe(el);
      });
    })();

    // Active navigation highlighting
    (function() {
      const sections = document.querySelectorAll('section');
      const navLinksItems = document.querySelectorAll('.nav-links a');

      window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(function(section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
          }
        });

        navLinksItems.forEach(function(link) {
          link.classList.remove('active');
          if (current && link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });
      });
    })();

    // Smooth scroll for anchor links
    (function() {
      const anchors = document.querySelectorAll('a[href^="#"]');
      
      anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          
          if (target) {
            const navbar = document.querySelector('.navbar');
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    })();
