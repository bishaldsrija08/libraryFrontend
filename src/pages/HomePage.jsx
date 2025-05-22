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
          <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">BookNest 📚</h1>
        <p className="text-sm mt-2">Find your next favorite book here</p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Welcome to BookNest</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Discover a world of knowledge and imagination. Browse through genres and authors you love.
        </p>
      </section>

      {/* Featured Books */}
      <section className="px-4 py-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Featured Books</h3>
            <div className="flex flex-wrap">
      {
        books.map((book)=>{
          return(
        <Card singleBook={book} key={book.id}/>
          )
        })
      }
      </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} BookNest. All rights reserved.</p>
      </footer>
    </div>
      

    </>
  )
}
export default HomePage