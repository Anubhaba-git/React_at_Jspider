import React from 'react'

const Child = ({data}) => {
    data()
  return (
    <div>
     child
    </div>
  )
}

export default React.memo(Child)






