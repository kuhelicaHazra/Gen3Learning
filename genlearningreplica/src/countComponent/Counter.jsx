import Toast from 'react-bootstrap/Toast';
import './count.css'

export default function Counter(props){

    return(
        <>
            <Toast bg='dark'>
            <Toast.Header className = "mytoast" closeButton={false}>{props.heads}</Toast.Header>
              <Toast.Body className='dark text-white toastbody'>{props.datas}</Toast.Body>
            </Toast>
            
        </>
    )
}