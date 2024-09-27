import React from 'react'
import "../css/blog.css"

const Blog = () => {

    let isContestThere = true

    const blogs = [
        {
            image: "http://placehold.it/300x250",
            title: "this is the blog title 1",
            author: "author name - roll number",
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. THIS 'RED MORE' BUTTON LINK TO THE WORD DOC OF THE BLOG ---------->",
            blogLink: "",
            date: "28-09-2024"
        },
        {
            image: "http://placehold.it/300x250",
            title: "this is the blog title 2",
            author: "author name - roll number",
            overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus explicabo sint, numquam nemo exercitationem adipisci doloribus. Laborum, psum dolor sit amet consectetur adipisicing elit. Natus explicabo sint, numquam nemo exercitationem adipisci doloribus. Laborum, labore natus.",
            blogLink: "",
            date: "28-09-2024"
        },
    ]

    return (
        <main>
            {isContestThere && <div className="contest">
                <div className="contestInfo">
                    <h1>WELCOME TO BLOG WRITING CONTEST</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, quas.</p>
                    <button>Upload your blog</button>
                </div>
            </div>}
            <div className='canvas'>
                <div className="blogList">
                    {blogs.map((item) => {
                        return (
                            <div key={item.title} className="blog">
                                <img src={item.image} alt="" />
                                <div className="blogDesc">
                                    <div className="top">
                                        <h3>{item.title.trim()}</h3>
                                        <p>{item.overview.trim()}<a href={item.blogLink}>...Read more</a> </p>
                                    </div>
                                    <div className="blogFooter">
                                        <hr style={{ margin: "0" }} />
                                        <div className="authorDetail">
                                            <span>{item.author.toLocaleUpperCase().trim()}</span>
                                            <small>{item.date}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Blog
