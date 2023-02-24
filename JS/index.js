// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

 const container = document.querySelector('.articles');
// const searchForm = document.querySelector('.search');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/Articles';
    // if (term) {
    //     uri += `&q=${term}`;
    // }
    const res = await fetch(uri);
    const posts = await res.json();
    const BlogsContainer = document.querySelector("#Blogs");
    console.log(posts)
    let template = '';
    posts.forEach(post => {
        template += `
        <div class="article_dash">
        <p>${post.title}</p>
        <a href="#">read more</a>
    </div>
        `
    })
    BlogsContainer.innerHTML = template;
}
// searchForm.addEventListener('submit', e => {
//     e.preventDefault();
//     renderPosts(searchForm.term.value.trim())
// })
window.addEventListener('DOMContentLoaded', () => renderPosts());



