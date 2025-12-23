import React from 'react'

const Addressdetails = (props) => {
    const { street, suite, city, zipcode, lat, lng } = props.deatils
  return (
    <div>
       <section className="bg-white rounded-xl shadow-md p-9 mb-6 max-w-md ml-5 h-[full] w-[650px] ">
      <h2 className="text-xl font-bold text-gray-900 mb-4"><span className='text-2xl pb-1'>🏡</span> Address</h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="text-sm text-gray-500">Street</div>
          <div className="font-semibold text-gray-800">{ street }</div>
        </div>

        {street && (
          <div>
            <div className="text-sm text-gray-500">Suite</div>
            <div className="font-semibold text-gray-800">{suite}</div>
          </div>
        )}

        
        <div>
          <div className="text-sm text-gray-500">City</div>
          <div className="font-semibold text-gray-800">{ city }</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Zipcode</div>
          <div className="font-semibold text-gray-800">{ zipcode }</div>

        </div>
        <div className='flex gap-10'>
          <div className="font-semibold text-gray-800">Latitude<span className='className="text-sm text-gray-500"'>{lat}</span></div>
          <div className="font-semibold text-gray-800">Longitude<span className='className="text-sm text-gray-500"'>{lng}</span></div>
        </div>

       
      </div>
    </section>
    </div>
  )
}

export default Addressdetails
