import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import logo1 from './assets/logo_anchor.png';
import logo2 from './assets/logo_gitlab.png';
import logo3 from './assets/logo_badge.png';

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        background: '#38495d'
      }}
    >
        <div
      style={{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
        marginBottom: 200,
        textAlign: 'center'
      }}
    >
      <div class="col-4">
      <Card style={{ width: '20rem' , marginRight: 50, background: '#38495d', borderColor: '#FFFFFF'}}>
            <Card.Img variant="top" src={logo1} />
            <Card.Body>
              <Card.Title style={{color: '#FFFFFF', fontWeight: 'bold'}}>PIRATE PLAN</Card.Title>
              <hr
                style={{
                background: "#FFFFFF",
                height: "2px",
                border: "none",
                }}
              />
              <Card.Text style={{color: '#FFFFFF'}}>Lifetime update</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>Daily rewards</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>Annually report</Card.Text>
              <hr
                style={{
                background: "#FFFFFF",
                height: "2px",
                border: "none",
                }}
              />
              <Card.Text style={{color: '#ec3f38', fontWeight: 'bold'}}>IDR 950.000</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>per month</Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div class="col-4">
      <Card style={{ width: '20rem' , marginRight: 50, background: '#38495d', borderColor: '#FFFFFF'}}>
            <Card.Img variant="top" src={logo2} />
            <Card.Body>
              <Card.Title style={{color: '#FFFFFF', fontWeight: 'bold'}}>CATMAN PLAN</Card.Title>
              <hr
                style={{
                background: "#FFFFFF",
                height: "2px",
                border: "none",
                }}
              />
             <Card.Text style={{color: '#FFFFFF'}}>Lifetime update</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>Daily rewards</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>Annually report</Card.Text>
              <hr
                style={{
                background: "#FFFFFF",
                height: "2px",
                border: "none",
                }}
              />
              <Card.Text style={{color: '#4f76a0', fontWeight: 'bold'}}>IDR 1.590.000</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>per month</Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div class="col-4">
      <Card style={{ width: '20rem' , marginRight: 50, background: '#38495d', borderColor: '#FFFFFF'}}>
            <Card.Img variant="top" src={logo3} />
            <Card.Body>
              <Card.Title style={{color: '#FFFFFF', fontWeight: 'bold'}}>CHAMP PLAN</Card.Title>
              <hr
                style={{
                background: "#FFFFFF",
                height: "2px",
                border: "none",
                }}
              />
              <Card.Text style={{color: '#FFFFFF'}}>Lifetime update</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>Daily rewards</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>Annually report</Card.Text>
              <hr
                style={{
                background: "#FFFFFF",
                height: "2px",
                border: "none",
                }}
              />
              <Card.Text style={{color: '#fc9f3c', fontWeight: 'bold'}}>IDR 4.590.000</Card.Text>
              <Card.Text style={{color: '#FFFFFF'}}>per month</Card.Text>
            </Card.Body>
          </Card>
      </div>
    </div>
    </div>
  );
}
export default App;