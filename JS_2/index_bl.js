

const Blogscontainer = document.querySelector('.Blogs');
// const searchForm = document.querySelector('.search');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/Blogs';

    const res = await fetch(uri);
    const posts = await res.json();
    const BlogsContainer = document.querySelector("#Blogs");
    console.log(posts)
    let template = '';
    posts.forEach(post => {
        template += `
        <div class="article_section_one">
        <p>${post.title}</p>
        <a href="#">See pricing</a>
    </div>
        `
    })
    BlogsContainer.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', () => renderPosts());



