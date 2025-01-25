// Create the main styles directory structure
export const styleModules = {
  base: import('./base/_index.css'),
  components: import('./components/_index.css'),
  utilities: import('./utilities/_index.css'),
  themes: import('./themes/_index.css')
}; 