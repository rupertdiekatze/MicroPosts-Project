// Import the http library
import { EasyHTTP } from './http';
import { UI } from './ui';

// Instanciate a new instances
const http = new EasyHTTP();
const ui = new UI();

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}
