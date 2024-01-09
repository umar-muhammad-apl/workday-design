export function openSidebar() {
    if (typeof document !== 'undefined') {
        console.log('close-sidebar')
      document.body.style.overflow = 'hidden';
      document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
    }
  }
  
  export function closeSidebar() {
    if (typeof document !== 'undefined') {
        console.log('close-sidebar')
      document.documentElement.style.removeProperty('--SideNavigation-slideIn');
      document.body.style.removeProperty('overflow');
    }
  }
  
  export function toggleSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const slideIn = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--SideNavigation-slideIn');
        console.log('--SideNavigation-slideIn', slideIn)
      if (slideIn) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }
  }