import { useContext, FunctionComponent, ReactElement, useState } from "react";
import {ArticleContext} from "./Context";

const Fetch:FunctionComponent = ():ReactElement => {
	 const {articles, setArticles} = useContext(ArticleContext)
	
	const test = () =>{
		setArticles("hallo")
	}
	
	
	return <div>
		<h1>{articles}</h1>
		<button onClick={test}>Klick</button>
	</div>;
};

export default Fetch;
