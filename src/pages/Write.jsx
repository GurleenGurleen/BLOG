import React, {useState} from 'react';
import './Write.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const Write = () =>{
    const [value, setValue] = useState('');
    
    return(
        <div className="write">
            <div className="writeContent">
                <input className='title' placeholder='Title'/>
                <div className='editConatiner'>
                    <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
                </div>
            </div>
            <div className="writeMenu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display: 'none'}}  type='file' id='file' name='' />
                    <label className='file' htmlFor='file'>Upload Image</label>
                    <div className='buttons'>
                        <button className='saveBtn'>Save as Draft</button>
                        <button className='updBtn'>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>

                    <div className='cat'>
                    <input type='radio' name='cat' value='art' id='art' />
                    <label htmlFor='art'>Art</label>
                    </div>

                    <div className='cat'>
                    <input type='radio' name='cat' value='science' id='art' />
                    <label htmlFor='art'>Science</label>
                    </div>

                    <div className='cat'>
                    <input type='radio' name='cat' value='technology' id='art' />
                    <label htmlFor='art'>Technology</label>
                    </div>

                    <div className='cat'>
                    <input type='radio' name='cat' value='cinema' id='art' />
                    <label htmlFor='art'>Cinema</label>
                    </div >

                    <div className='cat'>
                    <input type='radio' name='cat' value='design' id='art' />
                    <label htmlFor='art'>Design</label>
                    </div>
                    
                    <div className='cat'>
                    <input type='radio' name='cat' value='food' id='art' />
                    <label htmlFor='art'>Food</label>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Write;