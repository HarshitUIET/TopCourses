import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import { filterData, apiUrl } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from "./Components/Spinner";

const App = () => {

   const [courses,setCourses] = useState(null); 
   const [loading,setLoading] = useState(true);
   const [category,setCategory] = useState(filterData[0].title);

   const getData = async () => {
    try {
      const res = await fetch(apiUrl);
      const finalData = await res.json();
      setCourses(finalData.data);
    } catch (error) {
       toast.error("Something wrong");
    }
     setLoading(false);
  }

  useEffect(() => {
       getData();
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-bgDark2 ">
      <div>
        <Navbar></Navbar>
      </div>
      

     <div className="bg-bgDark2">
     
      <div>
      <Filter category={category} setCategory={setCategory} output={filterData}></Filter>
      </div>
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
        loading ? <Spinner/> : <Cards category={category} courses={courses}/> 
        }
      </div>
     </div>

    </div>
  )
};

export default App;
