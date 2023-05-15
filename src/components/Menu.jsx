import React from "react";
import './Menu.css'
import img from '../img/random.jpg'

const Menu = () =>{

    const DummyBlogs = [
        {
          id: 1,
          image: img,
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum"
        },
        {
          id: 2,
          image: img,
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum."
        },
        {
          id: 3,
          image: img,
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum. Nulla at mauris id nulla mattis pharetra a vel ipsum."
        },
        {
          id: 4,
          image: img,
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris id nulla mattis pharetra a vel ipsum."
        },
     
      ];

    return(
        <div className="menu">
            <h1>Other posts you may like</h1>
            {DummyBlogs.map(post=>(
                <div className="Menupost" key={post.id}>
                    <img src={post.image} alt='girl' />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
           
        </div>
    )
}

export default Menu