import { useState } from "react";
import Card from "./Card";

function Cards(props) {

   let courses = props.courses;
   let category = props.category;
    
  const [likedCourses,setLikedCourses] = useState([]);
  
  
    const getDetails = () => {
        if(category === "All") {
          let details = [];
      
          Object.values(courses).forEach((firstArr) => {
            firstArr.forEach((finalEle) => {
              details.push(finalEle);
            });
          });
          console.log(courses);
          console.log(category);
          return details;
        }
        else {
          return courses[category];
        }
    };
     
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
           getDetails().map((course) =>{
           return <Card course={course} key = {course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        })
        }
       
      </div>
    )
  }
  

export default Cards;