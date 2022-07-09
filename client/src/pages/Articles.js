import React from "react";
import ArticleContext from "../context/ArticleContext";
import ArticlesComponent from "../components/ArticlesComponent";
const Articles = () => {
    return (
    <>
        <div className="container mx-auto py-4 flex flex-wrap m-4 "> 
            <ArticlesComponent articles={ArticleContext} />
        </div>
    </>
    )}
export default Articles;

/*
  {
                ArticleContext.map((article, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4"> 
                        <Link to={`/Article/${article.name}`}>
                            <img src={article.thumbnail} alt={article.title} className="rounded-lg shadow-lg"/> 
                        </Link>
                        <div className="px-6 py-4"> 
                            <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
                            <p className="text-gray-700 text-base">{article.content}...</p>
                        </div>
                    </div>
                ))
            }
*/ 