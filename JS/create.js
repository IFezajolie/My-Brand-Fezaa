const postBlog = async () => {
    const postBlogForm = document.getElementById("myForm");
    const title=postBlogForm.elements.Title.value ;
    const body=postBlogForm.elements.Body.value ;
    // const image=postBlogForm.elements.URLim.value; 
    const response = await fetch("http://localhost:3000/Articles", {
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

