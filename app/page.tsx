import Card from "@/components/Card"
import UserProfile from "@/components/UserProfile"
import Link from "next/link"

const ORDER = ['popular', 'latest']
const CAETGORY = ['backgrounds', 'nature', 'animals', 'places']
const LIMIT = 20

type ResponseData = {
  total: number
  totalHits: number
  hits: {
    id: number
    tags: string
    views: number
    downloads: number
    collections: number
    likes: number
    comments: number
    user: string
    userImageURL: string
    pageURL: string
    largeImageURL: string
  }[]
}


async function getData(url: string) {
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: ResponseData = await res.json()
  return data.hits
}


export default async function Home() {
  const URL = `https://pixabay.com/api?key=${process.env.PIXABAY_API_KEY}&orientation=horizontal&category=${CAETGORY.join(',')}&order=${ORDER[Math.floor(Math.random() * ORDER.length)]}&per_page=${LIMIT}`
  const data = await getData(URL)

  const photo = data[Math.floor(Math.random() * data.length)]
  const bgImage = photo?.largeImageURL

  return (
    <div className={`text-white h-screen overflow-hidden flex justify-center items-center p-8 bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage})` }}>
      <Card />
      <div className="fixed top-0 w-full px-3 py-2 md:px-4 2xl:px-5 2xl:py-3 flex justify-between text-sm font-medium">
        <Link href={photo.pageURL} target="_blank" rel="noopener noreferrer" className="hover-duration">Pixabay</Link>
        {/* <div className="flex items-center space-x-2 text-xs sm:text-sm">
          <i className="fa-solid fa-tags"></i>
          <p className="max-w-[250px] sm:max-w-full truncate">{photo.tags}</p>
        </div> */}
        <UserProfile />
      </div>
      <div className="fixed bottom-0 w-full px-3 py-2 md:px-4 2xl:px-5 2xl:py-3 flex justify-between items-center text-sm font-medium">
        <Link className="max-w-[200px] sm:max-w-full truncate text-xs sm:text-sm hover-duration" href={photo.userImageURL} target="_blank" rel="noopener noreferrer">
          Photo by {photo.user}
        </Link>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center justify-center">
            <i className="fa-solid fa-eye w-5 h-6 flex justify-center items-center text-base"></i>
            <p className="text-xs text-center">{photo.views}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fa-solid fa-heart w-5 h-6 flex justify-center items-center text-base"></i>
            <p className="text-xs text-center">{photo.likes}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fa-solid fa-comment-dots w-5 h-6 flex justify-center items-center text-base"></i>
            <p className="text-xs text-center">{photo.comments}</p>
          </div>
        </div>
      </div>
    </div>
  )
}