const postBlog = async () => {
    const postBlogForm = document.getElementById("myBlog");
    const title=postBlogForm.elements.title.value ;
    const body=postBlogForm.elements.body.value ;
    // const image=postBlogForm.elements.URLim.value; 
    const response = await fetch("http://localhost:3000/Blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
    postBlogForm.reset();
    alert("Your blog has been added successfully")
   
  };

