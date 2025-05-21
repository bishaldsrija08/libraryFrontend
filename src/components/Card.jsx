import { Link } from "react-router-dom"

const Card = ({singleBook}) => {
  console.log(singleBook)
  return (
<>
<Link to={`/single/${singleBook.id}`}>
<div className="flex px-3 py-3">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{singleBook.bookName}</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
        perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Genre: {singleBook.bookGenre}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Author: {singleBook.bookAuthor}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Price: {singleBook.bookPrice}</span>
    </div>
  </div>
</div>
</Link>
</>
  )
}

export default Card
