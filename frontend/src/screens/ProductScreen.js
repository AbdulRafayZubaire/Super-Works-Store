import { React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  FormControl,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const navigate = useNavigate()

  const dispatch = useDispatch();

  
  const productDetails = useSelector((state) => state.productDetails);
  
  const { product, error, loading } = productDetails;
  
  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

  //Handler Function
  const addToCartHandler = () =>{

    navigate(`/cart/${params.id}?qty=${quantity}`);
  }

  return (
    <>
      <Container>
        <Link
          to="/"
          className="btn btn-light my-3"
          style={{
            display: "block",
            height: "auto",
            width: "120px",
            background: "grey",
            color: "white",
          }}
        >
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>{<Message variant="danger" text={error} />}</h2>
        ) : (
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* ----------------- RATING COMPONENT ---------------- */}
                  <Rating
                    value={product.rating}
                    numReviews={product.numReviews}
                    color="blue"
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Price:</strong>
                      </Col>
                      <Col>{product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Status:</strong>
                      </Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stack"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {product.countInStock > 0 && (
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <FormControl
                          as="select"
                          value={quantity}
                          onChange={(e) => {
                            setQuantity(e.target.value);
                          }}
                        >
                          {[...Array(product.countInStock).keys()].map(x=>(
                            <option key={x+1} value={x+1}>
                              {x+1}
                            </option>
                          ))}
                        </FormControl>
                      </Col>
                    </Row>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductScreen;
