import { useContext, useState } from "react"
import { Context } from "../Context/useContext"

const CreateUserModal = () => {
  const { openModal, setOpenModal, addUser } = useContext(Context)
  const [errors, setErrors] = useState({})

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

    addUser(newUser)
    setOpenModal(false)
    e.target.reset()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Create New User</h2>
            <p className="text-sm text-gray-500">Fill user details below</p>
          </div>
          <button onClick={() => setOpenModal(false)}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

        
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[48%]">
              <input name="name" placeholder="Full Name" className="input" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="w-full md:w-[48%]">
              <input name="username" placeholder="Username" className="input" />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div className="w-full md:w-[48%]">
              <input name="email" placeholder="Email" className="input" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="w-full md:w-[48%]">
              <input name="phone" placeholder="Phone" className="input" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="w-full">
              <input name="website" placeholder="Website" className="input" />
            </div>
          </div>

        
          <h3 className="font-semibold">Address</h3>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[48%]">
              <input name="street" placeholder="Street" className="input" />
            </div>

            <div className="w-full md:w-[48%]">
              <input name="suite" placeholder="Suite" className="input" />
            </div>

            <div className="w-full md:w-[48%]">
              <input name="city" placeholder="City" className="input" />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div className="w-full md:w-[48%]">
              <input name="zipcode" placeholder="Zipcode" className="input" />
            </div>

            <div className="w-full md:w-[48%]">
              <input name="lat" placeholder="Latitude" className="input" />
              {errors.lat && <p className="text-red-500 text-sm">{errors.lat}</p>}
            </div>

            <div className="w-full md:w-[48%]">
              <input name="lng" placeholder="Longitude" className="input" />
              {errors.lng && <p className="text-red-500 text-sm">{errors.lng}</p>}
            </div>
          </div>
          <h3 className="font-semibold">Company</h3>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[48%]">
              <input name="companyName" placeholder="Company Name" className="input" />
            </div>

            <div className="w-full md:w-[48%]">
              <input name="catchPhrase" placeholder="Catch Phrase" className="input" />
            </div>

            <div className="w-full">
              <input name="bs" placeholder="Business Strategy" className="input" />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Add User
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateUserModal
