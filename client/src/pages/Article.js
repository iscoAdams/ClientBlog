import { useParams } from "react-router-dom";
import ArticlesComponent from "../components/ArticlesComponent";
import ArticleContext from "../context/ArticleContext";
const Article = () => {
    const name  = useParams().name;
    // if (!name) return <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">please specify an article</h1>
    const article = ArticleContext.find((article)=> article.name === name)
    const OtherArticles = ArticleContext.filter((article)=> article.name !== name)
    return (
    <>
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">{article.title}</h1>
        {
            article.content.map((paragraph, index) => (
                <p className="mx-auto leading-relaxed text-base mt-6  mb-4">{paragraph}</p>
            ))
        }
        <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">Other articles</h1>
        <div className="flex flex-wrap -m-4">
        <ArticlesComponent articles={OtherArticles} />
        </div>
    </>
)}
export default Article;