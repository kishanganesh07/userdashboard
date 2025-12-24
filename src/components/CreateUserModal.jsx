import { useContext, useState } from "react"
import { Context } from "../Context/useContext"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const CreateUserModal = () => {
  const { openModal, setOpenModal, addUser } = useContext(Context)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)


  if (!openModal) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const name = formData.get("name")?.trim()
    const username = formData.get("username")?.trim()
    const email = formData.get("email")?.trim()
    const phone = formData.get("phone")?.trim()
    const city = formData.get("city")?.trim()
    const lat = formData.get("lat")?.trim()
    const lng = formData.get("lng")?.trim()

    const newErrors = {}

    if (!name) newErrors.name = "Name is required"
    if (!username) newErrors.username = "Username is required"

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format"
    }

    if (!phone) {
      newErrors.phone = "Phone is required"
    } else if (!/^[0-9+\-\s()]+$/.test(phone)) {
      newErrors.phone = "Invalid phone number"
    }

    if (!city) newErrors.city = "City is required"
    if (lat && isNaN(lat)) newErrors.lat = "Latitude must be a number"
    if (lng && isNaN(lng)) newErrors.lng = "Longitude must be a number"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
      phone,
      website: formData.get("website"),
      address: {
        street: formData.get("street"),
        suite: formData.get("suite"),
        city,
        zipcode: formData.get("zipcode"),
        geo: { lat, lng }
      },
      company: {
        name: formData.get("companyName"),
        catchPhrase: formData.get("catchPhrase"),
        bs: formData.get("bs")
      }
    }

   setLoading(true)

    setTimeout(() => {
      addUser(newUser)
      toast.success("User created successfully 🎉")
      setLoading(false)
      setOpenModal(false)
      e.target.reset()
    }, 1200)
  
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 sm:px-6">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b px-4 sm:px-6 py-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-1">Create New User</h2>
            <p className="text-xs sm:text-sm text-gray-500">Fill user details below</p>
          </div>
          <button onClick={() => setOpenModal(false)}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

        
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-[48%]">
              <input name="name" placeholder="Full Name" className="input" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="username" placeholder="Username" className="input" />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="email" placeholder="Email" className="input" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="phone" placeholder="Phone" className="input" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

           
          </div>

        
          <h3 className="font-semibold text-sm sm:text-base">Address</h3>
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-[48%]">
              <input name="street" placeholder="Street" className="input" />
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="suite" placeholder="Suite" className="input" />
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="city" placeholder="City" className="input" />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="zipcode" placeholder="Zipcode" className="input" />
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="lat" placeholder="Latitude" className="input" />
              {errors.lat && <p className="text-red-500 text-sm">{errors.lat}</p>}
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="lng" placeholder="Longitude" className="input" />
              {errors.lng && <p className="text-red-500 text-sm">{errors.lng}</p>}
            </div>
          </div>
          <h3 className="font-semibold">Company</h3>
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-[48%]">
              <input name="companyName" placeholder="Company Name" className="input" />
            </div>

            <div className="w-full sm:w-[48%]">
              <input name="catchPhrase" placeholder="Catch Phrase" className="input" />
            </div>

            <div className="w-full">
              <input name="bs" placeholder="Business Strategy" className="input" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="px-4 py-2 border rounded w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-gray-700 text-white rounded w-full sm:w-auto
                           flex items-center justify-center gap-2
                           transition-all duration-300
                           disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Creating...
                  </>
                ) : (
                  "Add User"
                )}
              </button>

          </div>

        </form>
      </div>
       <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default CreateUserModal
