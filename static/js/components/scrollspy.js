function initScrollspy() {
  const scrollspyNav = document.querySelector('.scrollspy-nav');
  if (!scrollspyNav) return;
  
  const links = scrollspyNav.querySelectorAll('a');
  const sections = Array.from(links).map(link => 
      document.querySelector(link.getAttribute('href'))
  ).filter(section => section !== null);
  
  if (sections.length === 0) return;
  
  const updateActiveSection = () => {
      const scrollPos = window.scrollY + 100;
      
      let activeSection = sections;
      sections.forEach(section => {
          if (section.offsetTop <= scrollPos) {
              activeSection = section;
          }
      });
      
      // Update active state
      links.forEach(link => link.classList.remove('active'));
      const activeLink = scrollspyNav.querySelector(`a[href="#${activeSection.id}"]`);
      if (activeLink) {
          activeLink.classList.add('active');
      }
  };
  
  // Throttle scroll event
  let ticking = false;
  const handleScroll = () => {
      if (!ticking) {
          requestAnimationFrame(() => {
              updateActiveSection();
              ticking = false;
          });
          ticking = true;
      }
  };
  
  window.addEventListener('scroll', handleScroll);
  updateActiveSection(); // Initial call
}

window.addEventListener('DOMContentLoaded', initScrollspy);