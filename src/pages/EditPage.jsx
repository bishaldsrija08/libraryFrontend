import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const EditPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [book, setBook] = useState([])

    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3000/api/books/" + id)
        setBook(response.data.data)
    }

    useEffect(() => {
        fetchBook()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book, //agadi j jasto xa testai xoddey vaneko
            [name]: value
        })
    }

    const updateBook = (e) => {
        e.preventDefault();
        axios
            .patch('http://localhost:3000/api/books/' + id, book)
            .then(() => {
                alert("Book Edited Successfully!")
                navigate("/")
            })
            .catch((err) => {
                console.error('Error editing book:', err);
            });
    };

    return (
        <>
            <Navbar />
            <div className="max-w-xl mx-auto p-6 sm:p-8">
                <form onSubmit={updateBook} className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Edit Book</h2>
                    <div>
                        <label className="block text-gray-700 mb-1">Book Name</label>
                        <input
                            onChange={handleChange}
                            value={book.bookName}
                            type="text"
                            name="bookName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Author</label>
                        <input
                            onChange={handleChange}
                            value={book.bookAuthor}
                            type="text"
                            name="bookAuthor"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Genre</label>
                        <input
                            onChange={handleChange}
                            value={book.bookGenre}
                            type="text"
                            name="bookGenre"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Price ($)</label>
                        <input
                            onChange={handleChange}
                            value={book.bookPrice}
                            type="number"
                            name="bookPrice"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Edit Book
                    </button>
                </form>
            </div>
        </>
    )
}
export default EditPage