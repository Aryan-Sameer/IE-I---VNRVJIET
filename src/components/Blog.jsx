import React from 'react'
import { useEffect } from 'react'
import "../css/blog.css"

const Blog = () => {

    let isContestThere = true

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogs = [
        {
            id: 6,
            image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*d0Px1b9V17s4qa1Guuy0Lw.png",
            title: "SCIENCE AND MEDICINE",
            overview: "Science as we know deals with various fields, let it be agriculture, medicine, new technology used in phones, computer etc. Nowadays science is used everywhere and one of the growing areas of science is medicine.",
            blogLink: "https://medium.com/@riturajswain30/science-and-medicine-00521f1f9d9d",
            author: "Rituraj swain - 21071A0254",
            date: "28-09-2024"
        },
        {
            id: 5,
            image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*rD2EcBAmyRTQCpoWjx00yw.png",
            title: "BIOMEDICAL ENGINEERING: THE ENGINEERING OF LIFE",
            overview: "The commencement of biomedical engineering dates back to the early 1900’s when in Germany the first biomedical engineering program was conducted. Otto Schmitt who is also known as the Father ",
            blogLink: "https://medium.com/@riturajswain30/biomedical-engineering-the-engineering-of-life-866492226a58",
            author: "Rituraj swain - 21071A0254",
            date: "28-09-2024"
        },
        {
            id: 4,
            image: "https://miro.medium.com/v2/resize:fit:456/format:webp/1*sDgkTmzYHXDFOoaYa7mj7Q.png",
            title: "NANOTECHNOLOGY: THE TECHNOLOGY TO STRIVE FOR",
            overview: "We all know that technology and advancement in it is very essential for the betterment of the world and once such technology is Nanotechnology. Nanotechnology is a sub-category of tech",
            blogLink: "https://medium.com/@riturajswain30/nanotechnology-the-technology-to-strive-for-bdd6ec7ef437",
            author: "Rituraj swain - 21071A0254",
            date: "28-09-2024"
        },
        {
            id: 3,
            image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fcXOQGEfx9kOYdOVUB8vJQ.jpeg",
            title: "Unveiling the Myths: “Decoding the Realities of Organic Electronics in the Tech Revolution”",
            overview: "Organic Electronics, is a perfect fusion of technology and Mother Nature- where wires are made of plants, and circuits are as natural as the morning dew. A subject intriguing enough to grab the attention of both f",
            blogLink: "https://medium.com/@REY2815/unveiling-the-myths-decoding-the-realities-of-organic-electronics-in-the-tech-revolution-3a2f316ab88f ",
            author: "R. Shreya - 22071A0250",
            date: "28-09-2024"
        },
        {
            id: 2,
            image: "https://miro.medium.com/v2/resize:fit:602/format:webp/1*r1LBCbSSvN1w9R0W8wNpBA.jpeg",
            title: "GROUND VEHICLE SYSTEMS: “A glimpse into the wheels of innovation”",
            overview: "This one’s for our fellow automobile enthusiasts and technology nerds, so buckle up and get ready to explore the fascinating stories behind the wheels that drive us forward.",
            blogLink: "https://medium.com/@REY2815/ground-vehicle-systems-a-glimpse-into-the-wheels-of-innovation-1c2bef35d95f ",
            author: "R. Shreya - 22071A0250",
            date: "28-09-2024"
        },
        {
            id: 1,
            image: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*ETEW2fT6n7fYnXtC",
            title: "Teaming Up with AI: How Smart Tech is Amplifying Our Abilities",
            overview: "It is a question that sparks both fear and fascination! But what if, instead of taking our jobs, AI could actually make us better at them? Now, that’s definitely a thought to consid",
            blogLink: "https://medium.com/@REY2815/teaming-up-with-ai-how-smart-tech-is-amplifying-our-abilities-bf0f8a274f3d",
            author: "R. Shreya - 22071A0250",
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
                            <div key={item.id} className="blog">
                                <img src={item.image} alt="" />
                                <div className="blogDesc">
                                    <div className="top">
                                        <h3>{item.title.trim()}</h3>
                                        <p>{item.overview.trim()}<a target='_blank' href={item.blogLink}>...Read more</a> </p>
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
