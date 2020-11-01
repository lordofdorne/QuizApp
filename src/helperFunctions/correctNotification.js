import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const notifyCorrect = () => {
  toast.success('Sucess! thats correct!', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
}


export default notifyCorrect