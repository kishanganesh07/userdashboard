import { useContext, useState } from "react"
import { Context } from "../Context/useContext"

const CreateUserModal = () => {
  const { openModal, setOpenModal, addUser } = useContext(Context)

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    geo: "",
    company: ""
  })

  if (!openModal) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser({
      id: Date.now(),
      name: form.name,
      username: form.username,
      email: form.email,
      phone: form.phone,
      address: { city: form.address },
      geo: form.geo,
      company: { name: form.company }
    })
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold">Create New User</h2>
            <p className="text-sm text-gray-500">Fill user details below</p>
          </div>
          <button
            onClick={() => setOpenModal(false)}
            className="text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-10 space-y-4 h-full p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                name="username"
                onChange={handleChange}
                placeholder="john123"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="john@email.com"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                name="phone"
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                name="address"
                onChange={handleChange}
                placeholder="Hyderabad"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Geo Location
              </label>
              <input
                name="geo"
                onChange={handleChange}
                placeholder="17.3850, 78.4867"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                name="company"
                onChange={handleChange}
                placeholder="Company Name"
                className="mt-1 w-full rounded-md border px-3 py-2 "
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t mt-15">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-blue-700"
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
