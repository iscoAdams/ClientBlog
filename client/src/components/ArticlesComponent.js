import { Link } from "react-router-dom";
const ArticlesComponent = ({ articles }) => {
    return (
        <>
            {
                articles.map((articles, index) => (
                    <div  className="  md:w-1/2 p-4  "> 
                        <div className="h-full border-2 mb-4 rounded-lg border-gray-200 border-opacity-60 overflow-hidden ">
                            <img src={articles.thumbnail} alt={articles.title} className="lg:h-48 md:h=36 w-full object-cover object-center"/> 
                        <div className="p-6">
                            <h3 className="title-font text-lg font-bold mb-3 text-gray-900">{articles.title}</h3>
                        <div className="">
                            <p className="leading-relax mb-3 text-gray-500 text-sm">{articles.content[0].substring(0,110)}...</p>
                            <div className="flex items-center flex-wrap">
                                <Link key={index} className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" to={`/Article/${articles.name}`}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
                ))
            }
        </>
    )
}
export default ArticlesComponent;