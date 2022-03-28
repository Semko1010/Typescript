import {createContext,useState,FunctionComponent, ReactElement} from 'react';
import App from './App';
import FetchMovies from "./FetchMovies"
type IArticle = {
    articles: string;
    setArticles:React.Dispatch<React.SetStateAction<string>>
    
  }
  const ArticleContext = createContext<IArticle>({} as IArticle);

const Context = () =>{
    const [ articles, setArticles ] = useState("fasfsa");

    return(

    <ArticleContext.Provider value={{articles,setArticles}}>
    <FetchMovies/>
    </ArticleContext.Provider>
    )
}

export {ArticleContext}
export default Context