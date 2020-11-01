import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const notifyWrong = () => {
  toast.error('Sorry! thats wrong!', { position: toast.POSITION.TOP_LEFT, autoClose: 3000 })
}


export default notifyWrong