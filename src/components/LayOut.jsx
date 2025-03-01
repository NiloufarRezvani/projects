import './styles/LayOut.module.css' 

function LayOut({children}) {
  return (
    <div className="flex flex-col justify-center m-auto">{children}</div>
  )
}

export default LayOut