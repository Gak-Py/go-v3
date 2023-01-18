export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] text-gray-600 text-sm whitespace-nowrap p-6">
      <p>
        Copyright &copy; {new Date().getFullYear()} GO
      </p>
    </footer>
  )
}
