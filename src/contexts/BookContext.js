import { createContext, useContext, useState} from "react"

const BooksContext = createContext()


export function useBooks(){
    return useContext(BooksContext)
}

export function BookProvider({children}) {

    const [books, setBooks] = useState(null)
    const [loading, setLoading] = useState(false)
    const [keyWords, setKeyWords] = useState("")

    const fetchBooks = async () => {
        setLoading(true)
        try{
            const res = await fetch(`http://openlibrary.org/search.json?title=${keyWords}`)
            const data = await res.json() 
            const {docs} = data 
            if(docs) {
                const bookList = docs.slice(50).map( e =>{
                    const {author_name,title,type,language,publish_year,key,isbn} = e
                    return {author_name,title,type,language,publish_year,key,isbn}
                })
                setBooks(bookList)
            }
        }catch (error){
            console.log(error);
            setLoading(false)
        }
        setLoading(false)
    }

    async function handleSearch() {
       await fetchBooks()
    } 

    function handleChange(e){
        let searchStr = e.target.value
        setKeyWords(searchStr.replace(/\s+/g, '+'))
    }

    return ( 
        <BooksContext.Provider value={{handleChange, handleSearch, loading, books}}>
            {children}
        </BooksContext.Provider>
    )
}