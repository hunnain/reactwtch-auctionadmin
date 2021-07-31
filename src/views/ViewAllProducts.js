import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import Axios from "../AxiosService";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    Axios.get('/products')
        .then(async response => {
          console.log(response.data)
            setProducts(response.data)
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            // console.error('There was an error!', error);
        });
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4" style={{display: "inline-block"}}>All Products</Card.Title>
                <Button variant="success"  style={{float: "right"}} onClick={()=>console.log("qwerty")}>
                  Create
                </Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">S. No</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Brand</th>
                      <th className="border-0">Model No</th>
                      <th className="border-0">Starting Price</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {products.map((product, index) =>(
                    <tr key={"product"+index}>
                      <td>{index+1}</td>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>{product.modelNo}</td>
                      <td>$ {product.startingPrice}</td>
                      {/* 'pending', 'live', 'finished', 'deactivate', 'rejected' */}
                      <td><Badge variant={
                            product.status=="live"?"success":
                            product.status=="pending"?"warning":
                            product.status=="finished"?"secondary":
                            product.status=="deactivate"?"danger":
                            product.status=="rejected"?"danger":"light"
                          }>{product.status}</Badge></td>
                      <td>
                        <Link to={"/admin/products/update/"+product._id}>Update</Link>

                        {/* <Button variant="info" onClick={()=>history.push("/update/"+product._id)}>
                          Update
                        </Button>
                        <Button variant="danger">
                          Delete
                        </Button> */}
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
