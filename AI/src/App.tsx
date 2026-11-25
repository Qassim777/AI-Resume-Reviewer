
function App() {
return ( <>
  

    <div className="flex h-screen flex-col items-center justify-center gap-4">
    <h1 className=" text-black-700 text-3xl">Please attach your CV</h1>

    <input className="w-28 text-transparent file:mr-0 file:cursor-pointer file:rounded file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:hover:bg-blue-700" type="file"  accept=".pdf" ></input>
    <h1 className=" text-black-700 text-3xl">Write job description</h1>
    <textarea  className="border-3 rounded-md border-black bg-gray-600 w-[50%] h-[30%]"></textarea>
    </div>
   

    </>)
}

export default App
