/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to (with or without #)
 * @param {number} offset - Optional offset from the top (default: 80 for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
  const element = document.getElementById(id);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

/**
 * Get the currently active section based on scroll position
 * @param {Array<string>} sectionIds - Array of section IDs to check
 * @returns {string} - The ID of the active section
 */
export const getActiveSection = (sectionIds) => {
  const scrollPosition = window.scrollY + 100;
  
  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return id;
      }
    }
  }
  
  return sectionIds[0];
};
