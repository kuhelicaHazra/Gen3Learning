import './App.css';
import Program from './programsComponent/Program';
import Aboutus from './aboutusComponent/Aboutus';
import Testimonial from './testimonialsComponent/Testimonial';
import Teams from './teamsComponent/Teams';
import Pricing from './pricingComponent/Pricing';
import Footer from './footerComponent/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEx from './navbarComponent/NavbarEx'
import data from './config/applicationConfig.json';
import HeaderComp from './headerComponent/HeaderComp';
import Counter from './countComponent/Counter';

function App() {
  return (
  <Container>
    <Row>
      <NavbarEx/>
    </Row>
  <Row>
    <Col>
    <HeaderComp/>
    </Col>
  </Row>
  <Row>
    <Col>
    <Counter datas={data.students} heads={'Students'}/>
    </Col>
    <Col>
    <Counter datas={data.years} heads={'Years'}/>
    </Col>
    <Col>
    <Counter datas={data.courses} heads={'Courses'}/>
    </Col>
  </Row>
  <Row>
    <Col>
    <div className='information'>
    {data.info}
    </div>
    </Col>
  </Row>
  <Row>
    <Col className='program-title'>
     <div className='horizental-line'></div> Programs <div className='horizental-line'></div>
     </Col>
  </Row>
  <Row>
    <Col>
    <Program data={data.program01} head={data.programOne}/>
    </Col>
    <Col> <Program data={data.program02} head={data.programTwo}/></Col>
    <Col> <Program data={data.program03} head={data.programThree}/></Col>
  </Row>
  <Row>
    <Col>
    <span className='view-more-program'>...View all programs</span>
    </Col>
  </Row>
  <Row>
    <Col>
    <div className='information'>
    {data.info2}
    </div>
    </Col>
  </Row>
  <Row>
    <Col className='program-title'>
     <div className='horizental-line'></div> About Us <div className='horizental-line'></div>
     </Col>
  </Row>
  <Row>
    <Col>
    <Aboutus aboutus={data.aboutus}/>
     </Col>
     <Col>
     <div className='imagesection'>
     {data && data.imgobj.map((item,index)=>{
        return <img alt={'img'+index} className='smallimg' src={item}></img>
      })}
     </div>
     <div className='targetaud'>Our Target Audience</div>
     </Col>
  </Row>
  <Row>
  <Col>
    <div className='information'>
    {data.info3}
    </div>
    </Col>
  </Row>
  <Row>
    <Col className='program-title'>
     <div className='horizental-line'></div> Testimonials <div className='horizental-line'></div>
     </Col>
  </Row>
  <Row>
    <Col>
    <div className='studentstalk'>What our students say about us?</div>
    </Col>
    <Col>
    <Testimonial/>
    </Col>
  </Row>
  <Row>
  <Col>
    <div className='information'>
    {data.info5}
    </div>
    </Col>
  </Row>
  <Row>
    <Col className='program-title'>
     <div className='horizental-line'></div> Meet Our Team <div className='horizental-line'></div>
     </Col>
  </Row>
  <Row>
  <Col>
    <Teams/>
    </Col>
  </Row>
  <Row>
  <Col>
    <div className='information'>
    {data.info4}
    </div>
    </Col>
  </Row>
  <Row>
    <Col className='program-title'>
     <div className='horizental-line'></div> Pricing <div className='horizental-line'></div>
     </Col>
  </Row>
  <Row>
    <Col>
    <Pricing head={data.pricehead1} body={data.pricebody1}/>
    </Col>
    <Col>
    <Pricing head={data.pricehead2} body={data.pricebody2}/>
    </Col>
    <Col>
    <Pricing head={data.pricehead3} body={data.pricebody3}/>
    </Col>
  </Row>
  <Row>
    <Col>-</Col>
  </Row>
  <Row>
    <Col>
    <Footer/>
    </Col>
  </Row>
</Container>
  );
}

export default App;
