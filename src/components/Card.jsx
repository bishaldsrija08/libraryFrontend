import { Link } from "react-router-dom"

const Card = ({singleBook}) => {
  console.log(singleBook)
  return (
<>
<Link to={`/single/${singleBook.id}`}>
    <div className="flex justify-center px-4 py-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl text-gray-800 mb-2">{singleBook.bookName}</div>
        </div>
        <div className="px-6 py-4 space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-2">
          <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
            Genre: {singleBook.bookGenre}
          </span>
          <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
            Author: {singleBook.bookAuthor}
          </span>
          <span className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold">
            Price: ${singleBook.bookPrice}
          </span>
        </div>
      </div>
    </div>
</Link>
</>
  )
}

export default Card
