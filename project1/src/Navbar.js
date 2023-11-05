const Navbar= () =>{
    return(
        <nav className ="NavBar">
            <h1>Nav Bar Area Here</h1>
            <div className ="links">
                <a href = "/">Home</a>
                <a href = "/create">New Blog</a>
            </div>
        </nav>
    );
}
/*
in case of inline changing
style={{
    color : "white",
    backgroundColor: "red",
    borderRadius: "9px"
}}*/
export default Navbar;