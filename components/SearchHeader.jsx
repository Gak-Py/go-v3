import Image from "next/image"
import { useRouter } from "next/router";
import {useRef} from "react"
import {MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon} from "@heroicons/react/24/solid"
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";


export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-center">
        <Image className='object-contain cusror-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" width={120} height={40} onClick={() => router.push("/")} />

        <form className="flex border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center" action="">
          <input type="text" defaultValue={router.query.term} ref={searchInputRef} className="w-full focus:outline-none" />
          <XMarkIcon onClick={() => (searchInputRef.current.value="")} className='h-7 cursor-pointer text-gray-500 sm:mr-3' />
          <MicrophoneIcon className='h-6 hidden text-blue-500 sm:inline-flex pl-4 mr-3 border-l-2 border-gray-300' />
          <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User classes="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
