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
window.location.replace('/dashport.html');
button.addEventListener('submit', createPost);
}
