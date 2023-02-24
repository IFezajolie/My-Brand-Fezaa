const form = document.querySelector('form');
const createArticle = async (e) => {
    e.preventDefault();
    const doc = {
        title: form.title.value,
        body: form.body.value,
        
    }
await fetch('http://localhost:3000/Articles', {
    method: "POST",
    body: JSON.stringify(doc),

    
    // headers: {'content-Type': 'application/json' }
})
const article = document.createElement('div');
const container = document.querySelector('article_section_container')
  article.classList.add('article_section_one');
  article.innerHTML = `
    <h2>${title}</h2>
    <p>${body}</p>
  `;

  // Add new article to article section
  container.appendChild('article_section_one');
window.location.replace('/dashport.html');
button.addEventListener('submit', createPost);
}
