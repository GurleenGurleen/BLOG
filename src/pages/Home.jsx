import img from '../img/random.jpg'
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () =>{

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
        }
      ];

    return(
        <div className='home'>
            <div className='posts'>
                {DummyBlogs.map(post=>(
                    <div className='post' key={post.id}>
                        <div className='postImage'>
                          <img src={post.image} alt='img'/>
                        </div>
                        <div className='content'>
                          <Link className='link' to={`/post/${post.id}`}>
                            <h1> {post.title} </h1>
                          </Link>
                          <p>{post.description}</p>
                          <button>Read More</button>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;