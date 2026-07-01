const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl text-center p-2">This is Contact page</h1>

            <form >
                <input type="text" placeholder="Enter name" className="p-2 m-2 border" name="name"/>
                <input type="email" placeholder="Enter email" className="p-2 m-2 border" name="email"/>
                <button className="p-2 m-2 border bg-gray-200 rounded-sm">Submit</button>
            </form>
        </div> 
    );
} 

export default Contact;