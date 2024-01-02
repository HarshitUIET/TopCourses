

function Filter(props)  {

   let output = props.output;
   let category = props.category;
   let setCategory = props.setCategory;

    function CategoryHandler(title) {
       setCategory(title);
    }

    return (
        <div className=" w-11/12 flex-wrap flex justify-center space-x-4 gap-y-4 mx-auto py-4 ">
          {output.map((ele)=> {
             return <button onClick={() => CategoryHandler(ele.title)} className= {`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50
             border-2 ${category === ele.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`} key = {ele.id}>{ele.title}</button>
          })}
        </div>
    )
  
}

export default Filter;