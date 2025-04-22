
const Contact = () => {    
  return (
    <>
   <div className="flex flex-col items-center justify-center px-6 py-12">
   <div className="max-w-lg w-full">
   <h2 className="text-3xl font-bold text-center text-indigo-700">Contact Us</h2>
   <p className="text-center text-gray-500">We'd love to hear from you!</p>
   <form className="space-y-4 mt-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
        <input type="text" placeholder="Username"
        className="outline-none border-2 border-gray-700 px-5 py-2.5 w-full" />
        <input type="email" placeholder="Your email"
        className="outline-none border-2 border-gray-700 px-5 py-2.5 w-full" />
    </div>
    <div className="w-full">
    <textarea placeholder="Message" className="w-full outline-none border-2 border-gray-700" cols={34} rows={10}></textarea>        
    </div>
    <button className="w-full bg-gradient-to-br from-blue-800 via-gray-900 to-indigo-800 rounded-full px-5 py-2 cursor-pointer">Submit</button>
   </form>
   </div>
 </div>
    </>
  )
}

export default Contact