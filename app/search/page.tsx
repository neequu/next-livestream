import React from 'react'

const page = ({ params }) => {
  return <div>zcx {JSON.stringify(params?.q)}</div>
}

export default page
