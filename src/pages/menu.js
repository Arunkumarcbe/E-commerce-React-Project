import React from 'react'
import "../style/menu.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Menu() {
  return (
           <section>
            <div className='container-fluid'>
              <div className='row'>
              <h1 className="text-center my-5 mx-auto">Our Menu</h1>
              <div className="col-lg-4 col-md-6 col-12 "id='card-space'>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1666326660~exp=1666327260~hmac=9e674f5a2b2582d2d4499e670347ed0933f0eba11f8db4ae604378977f352fba" />
                   <Card.Body>
                    <Card.Title>₹ 250</Card.Title>
                    <Card.Text>
                    spicy pizza.
                  </Card.Text>
                <Button className="btn sign-in">Order</Button>
               </Card.Body>
            </Card></div>
              <div className="col-lg-4 col-md-6 col-12 "id='card-space'><Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1666326660~exp=1666327260~hmac=9e674f5a2b2582d2d4499e670347ed0933f0eba11f8db4ae604378977f352fba" />
                   <Card.Body>
                    <Card.Title>₹ 250</Card.Title>
                    <Card.Text>
                    spicy pizza.
                  </Card.Text>
                <Button className="btn sign-in">Order</Button>
               </Card.Body>
            </Card></div>
              <div className="col-lg-4 col-md-6 col-12"id='card-space'><Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1666326660~exp=1666327260~hmac=9e674f5a2b2582d2d4499e670347ed0933f0eba11f8db4ae604378977f352fba" />
                   <Card.Body>
                    <Card.Title>₹ 250</Card.Title>
                    <Card.Text>
                    spicy pizza.
                  </Card.Text>
                <Button className="btn sign-in">Order</Button>
               </Card.Body>
            </Card></div>
            <div className="col-lg-4 col-md-6 col-12 "id='card-space'><Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1666326660~exp=1666327260~hmac=9e674f5a2b2582d2d4499e670347ed0933f0eba11f8db4ae604378977f352fba" />
                   <Card.Body>
                    <Card.Title>₹ 250</Card.Title>
                    <Card.Text>
                    spicy pizza.
                  </Card.Text>
                <Button className="btn sign-in">Order</Button>
               </Card.Body>
            </Card></div>
            <div className="col-lg-4 col-md-6 col-12 "id='card-space'><Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1666326660~exp=1666327260~hmac=9e674f5a2b2582d2d4499e670347ed0933f0eba11f8db4ae604378977f352fba" />
                   <Card.Body>
                    <Card.Title>₹ 250</Card.Title>
                    <Card.Text>
                    spicy pizza.
                  </Card.Text>
                <Button className="btn sign-in">Order</Button>
               </Card.Body>
            </Card></div>
            <div className="col-lg-4 col-md-6 col-12 "id='card-space'><Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1666326660~exp=1666327260~hmac=9e674f5a2b2582d2d4499e670347ed0933f0eba11f8db4ae604378977f352fba" />
                   <Card.Body>
                    <Card.Title>₹ 250</Card.Title>
                    <Card.Text>
                    spicy pizza.
                  </Card.Text>
                <Button className="btn sign-in">Order</Button>
               </Card.Body>
            </Card></div>
              </div>
            </div>
           </section>

  )
}

export default Menu