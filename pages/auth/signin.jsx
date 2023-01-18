import Header from "../../components/Header"
import { getProviders, signIn, signOut } from "next-auth/react"

export default function signin({providers}) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map(provider =>(
          <div key={provider.name} className="flex flex-col items-center">
            <img className="w-52 object-cover mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" alt="google logo" width={250} />
            <p className="text-sm italic my-10 text-center">This website is created for learning purposes</p>
            <button className=" bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  )
} 

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}