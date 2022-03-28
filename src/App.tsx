import {createContext,useState,FunctionComponent, ReactElement} from 'react';
import FetchMovies from "./FetchMovies"
import './App.css';

type IArticle = {
  articles: string;
  setArticles:React.Dispatch<React.SetStateAction<string>>
  
}
const ArticleContext = createContext<IArticle>({} as IArticle);

 const App:FunctionComponent=()=>{
  const [ articles, setArticles ] = useState("");

  console.log();
  
  return (
    <ArticleContext.Provider value={{articles,setArticles}}>
    
      
    <FetchMovies/>
    
  
    </ArticleContext.Provider>
  )
}

export {ArticleContext}
export default App;
