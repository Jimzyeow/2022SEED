import useFetch
 from "../useFetch";
 import { Link } from "react-router-dom";
const ViewCategories = () => {
    const { data: categorylist, isPending, error } = useFetch('http://localhost:8000/categories');

    return ( <div className="view-categories">
        <h2>Categories:</h2>
        
        {categorylist && 
            categorylist.map((category) =>(
                <Link to={`${category.id}/products/`}>
                <div className="row-categories" key={category.id}>
                    <h2>{category.name}</h2>
                </div>
                </Link>
            ))
            }
    </div> );
}
 
export default ViewCategories;