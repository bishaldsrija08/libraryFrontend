import axios from "axios"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"

const HomePage = () => {
  const [books,setBooks]= useState([])

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books")
    setBooks(response.data.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])
  console.log(books)
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
      {
        books.map((book)=>{
          return(
        <Card singleBook={book} key={book.id}/>
          )
        })
      }
      </div>

    </>
  )
}
export default HomePage