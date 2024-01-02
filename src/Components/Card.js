import { useState } from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';


function Card(props) {

       let course = props.course;
       let likedCourses = props.likedCourses;
       let setLikedCourses = props.setLikedCourses;
        
 
        function ClickHandler() {

              if(likedCourses.includes(course.id)) {
                  // unlike karna h
                  setLikedCourses((prev)=> prev.filter((cid) => (course.id !== cid)))
                  toast.warning("like removed");
              }
              else{
                  if(likedCourses.length === 0) {
                     setLikedCourses([course.id]);
                  }
                  else{
                    setLikedCourses((prev)=>[...prev,course.id]);
                  }
                  toast.success("liked SuccessFully");
              }
               


        }

        const description = `${course.description.substr(0,100)}...`;

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            
            <div className='relative' >
                <img src={course.image.url}  />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center'>
            <button onClick={ClickHandler}>
              {likedCourses.includes(course.id)? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
            </button>
            </div>
            </div>
            <div className='p-4'>
                <p className=' text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{description}</p>
            </div>
        </div>
    )
}

export default Card;