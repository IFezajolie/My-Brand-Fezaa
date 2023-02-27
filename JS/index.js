

 const container = document.querySelector('.articles');
// const searchForm = document.querySelector('.search');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/Articles';

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
window.addEventListener('DOMContentLoaded', () => renderPosts());



