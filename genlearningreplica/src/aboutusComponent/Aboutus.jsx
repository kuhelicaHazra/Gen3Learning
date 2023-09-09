import './aboutus.css';

export default function Aboutus(props) {

    return (
        <div className='textabout'>
            <div className='about'> {props.aboutus}</div>
            <div className='boldname'>Membership</div>
            <div className='boldname'>Group Tutoring</div>
            <div className='boldname'>Group Tutoring</div>
        </div>
    )
}