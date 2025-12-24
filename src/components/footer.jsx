const Footer = () => {
  return (
   <footer className="mt-10 w-full border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-4 text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">UserApp</span>. All rights reserved.
        </p>
        <div className="flex space-x-4 text-gray-600">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-google text-lg"></i>
          </a>
     <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition"
          >
            <i className="fab fa-youtube text-lg"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm">Contact Us</p>

      </div>
    </footer>
    
  )
}

export default Footer
