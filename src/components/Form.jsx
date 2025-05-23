import React from 'react'

const Form = () => {
    return (
        <>
            <div className="max-w-xl mx-auto p-6 sm:p-8">
                <form className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Create New Book</h2>

                    <div>
                        <label className="block text-gray-700 mb-1">Book Name</label>
                        <input
                            type="text"
                            name="bookName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Author</label>
                        <input
                            type="text"
                            name="bookAuthor"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Genre</label>
                        <input
                            type="text"
                            name="bookGenre"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Price ($)</label>
                        <input
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
                        Create Book
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form