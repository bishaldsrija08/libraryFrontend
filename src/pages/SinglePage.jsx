import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"

const SinglePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [singleBook, setSingleBook] = useState({})

  const fetchSingleBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books/" + id)
    setSingleBook(response.data.data)
  }

  const deleteSingle = async ()=>{
    const response = await axios.delete("http://localhost:3000/api/books/" + id)
    if(response.status
      ===200){
        navigate("/")
      }

  }

  useEffect(() => {
    fetchSingleBooks()
  }, [])
  console.log(singleBook)
  return (
    <>
      <Navbar />
<div className="max-w-3xl mx-auto p-6 sm:p-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Book ID: <span className="font-normal">{singleBook.id}</span></h1>
        <h1 className="text-xl text-gray-700">Name: <span className="font-medium">{singleBook.bookName}</span></h1>
        <h1 className="text-xl text-gray-700">Author: <span className="font-medium">{singleBook.bookAuthor}</span></h1>
        <h1 className="text-xl text-gray-700">Genre: <span className="font-medium">{singleBook.bookGenre}</span></h1>
        <h1 className="text-xl text-gray-700">Price: <span className="font-medium">${singleBook.bookPrice}</span></h1>
      
              {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Link
            to={`/edit/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Update
          </Link>
          <button
            onClick={deleteSingle}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Delete
          </button>
          </div>
        </div>
    </div>
    </>
  )
}
export default SinglePage