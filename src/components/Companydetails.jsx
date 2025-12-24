import React from 'react'
const Companydetails = (props) => {
  {
  const { name, catchPhrase, bs } = props.deatils
console.log(name);
  return (
    <section className="bg-white rounded-xl shadow-md p-6 sm:p-9 mb-6 w-full max-w-full sm:max-w-md md:w-[50%] lg:max-w-lg ml-0 sm:ml-5 grow">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4"><span className='text-2xl pb-1'>🏢</span> Company </h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="text-sm text-gray-500">Companyname</div>
          <div className="font-semibold text-gray-800">{ name }</div>
        </div>

        {name && (
          <div>
            <div className="text-sm text-gray-500">catchPhrase</div>
            <div className="font-semibold text-gray-800">@{catchPhrase}</div>
          </div>
        )}

        <div>
          <div className="text-sm text-gray-500"> Business Strategy</div>
          <div className="font-semibold text-gray-800">{bs }</div>
        </div>

       
      </div>
    </section>
  )
}

}

export default Companydetails
