const BlogList= (props) =>{
    const blogs = props.blog;
    const title = props.title;
    const handleDelete = props.handleDelete;
    return(
        <div className ="Bloglist">
            <h2>{title}</h2>
            {
            blogs.map((item)=>(
                <div className="Preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written By: {item.author}</p>
                    <button onClick={()=>{handleDelete(item.id)}}>Delete Button</button>
                </div>
            ))
        }
        </div>
    );
}
export default BlogList;