import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"

const SinglePage = ()=>{
    const {id} = useParams()
const [singleBook,setSingleBook]= useState({})

  const fetchSingleBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books/"+id)
    setSingleBook(response.data.data)
  }

  useEffect(() => {
    fetchSingleBooks()
  }, [])
  console.log(singleBook)
    return(
        <>
        <Navbar/>
        <h1>{singleBook.id}</h1>
        <h1>{singleBook.bookName}</h1>
        <h1>{singleBook.bookAuthor}</h1>
        <h1>{singleBook.bookGenre}</h1>
        <h1>{singleBook.bookPrice}</h1>
        </>
    )
}
export default SinglePage