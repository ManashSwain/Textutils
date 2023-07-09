import React from 'react'

export default function Alert(props) {
  return (
    <>
       <div style={ {height : "65px"}}>
       { props.alert && <div className="alert alert-warning" role="alert">
       {props.alert.msg}
       </div>}
       </div>
       </>
  )
}
