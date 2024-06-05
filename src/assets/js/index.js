// Include Lightbox 
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js';

// Initialize the lightbox for cards gallery
const lightbox1 = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#cards',
  // Elements within gallery (slides)
  children: 'a',
  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('/assets/js/photoswipe.esm.js')
});
lightbox1.init();

// Initialize the lightbox for hairpieces gallery
const lightbox2 = new PhotoSwipeLightbox({
  gallery: '#hairpieces',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js')
});
lightbox2.init();
