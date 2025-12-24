import React from 'react'

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold text-gray-800">{value}</div>
    </div>
  </div>
)

const Personaldetails = ({ personal = {} }) => {
  const { name, username, email, phone } = personal

  return (
    <section className="bg-white rounded-xl shadow-md p-6 sm:p-9 mb-6 max-w-full sm:max-w-md lg:max-w-lg ml-0 sm:ml-5 w-112.5 ">
      <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-4"><span className='text-2xl pb-1'>🪪</span> Personal Information</h1>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="text-sm text-gray-500">Name</div>
          <div className="font-semibold text-gray-800">{ name }</div>
        </div>

        {username && (
          <div>
            <div className="text-sm text-gray-500">Username</div>
            <div className="font-semibold text-gray-800">{username}</div>
          </div>
        )}

        <div>
          <div className="text-sm text-gray-500">📧 Email</div>
          <div className="font-semibold text-gray-800">{email}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">📞 Phone</div>
          <div className="font-semibold text-gray-800">{phone }</div>
        </div>
      </div>
    </section>
  )
}

export default Personaldetails
