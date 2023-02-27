const form = document.querySelector('form');
const createArticle = async (e) => {
    e.preventDefault();
    // const doc = {
    //     title: form.title.value,
    //     body: form.body.value,
        
    // }
    // const doc = {
    //     title: document.querySelector('#title').value,
    //     body: document.querySelector('#body').value
    //  }
    const doc = {
        title: form.title.value,
        body: form.body.value
    }
     
await fetch('http://localhost:3000/Articles', {
    method: "POST",
    body: JSON.stringify(doc),

    
    // headers: {'content-Type': 'application/json' }
})
window.location.replace('/dashport.html');
button.addEventListener('submit', createPost);

// CHAT GPT
// const form = document.querySelector('form');
// const createArticle = async (e) => {
//   e.preventDefault();
//   const doc = {
//     title: document.querySelector('#title').value,
//     body: document.querySelector('#body').value
//   }
//   await fetch('http://localhost:3000/Articles', {
//     method: "POST",
//     body: JSON.stringify(doc),
//     headers: {'content-Type': 'application/json' }
//   })
//   window.location.replace('/dashport.html');
// }
// form.addEventListener('submit', createArticle);
