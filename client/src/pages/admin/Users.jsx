import React from 'react'

const Users = () => {
  return (
    <>
    <div className="lg:ml-64 paddingPracent">
      <table className='w-full border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border px-4 py-2'>Id</th>
            <th  className='border px-4 py-2'>Username</th>
            <th  className='border px-4 py-2'>Email</th>
            <th  className='border px-4 py-2'>Role</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td className='border px-4 py-2'>1</td>
            <td className='border px-4 py-2'>Izzatbek</td>
            <td className='border px-4 py-2'>admin@gmail.com</td>
            <td className='border px-4 py-2'>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Users