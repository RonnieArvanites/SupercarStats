import React, { useState } from 'react'
import CarNotFound from './CarNotFound'
import { Row, Col, Image, Container, Table } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";

export default function CarDetail({ cars }) {
    let { slug } = useParams();
    const selectedCar = cars.find(car => {
        return car.slug === slug
    });
    
    const [mainImage, setMainImage] = useState(selectedCar ? selectedCar.thumbnail : '')

    //Page not found
    if (!selectedCar){
        return <CarNotFound></CarNotFound>;
    }

    return (
        <Container>
            <center>
                <h1 className="car-header">{selectedCar.manufacturer} {selectedCar.name}</h1>
                <Col>
                        <Image className="main-picture" src={mainImage} width={650} height={490}></Image>
                        <div className="white-fill"></div>
                        <Row noGutters>
                            <Col>
                                <Image src={selectedCar.thumbnail} className="image-fill" onClick={() => setMainImage(selectedCar.thumbnail)}></Image>
                            </Col>
                            <Col>
                                <Image src={selectedCar.rear_view_img_url} className="image-fill" onClick={() => setMainImage(selectedCar.rear_view_img_url)}></Image>
                            </Col>
                            <Col>
                                <Image src={selectedCar.top_view_img_url} className="image-fill" onClick={() => setMainImage(selectedCar.top_view_img_url)}></Image>
                            </Col>
                            <Col>
                                <Image src={selectedCar.interior_view_img_url} className="image-fill" onClick={() => setMainImage(selectedCar.interior_view_img_url)}></Image>
                            </Col>
                        </Row>
                    <Table className="stat-table" striped bordered variant="dark">
                        <tbody>
                            <tr>
                                <td className="black-fill"  colSpan="2"> <center><h3>Car Stats</h3></center></td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{selectedCar.year}</td>
                            </tr>
                            <tr>
                                <td>Manufacturer</td>
                                <td>{selectedCar.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Engine</td>
                                <td>{selectedCar.engine}</td>
                            </tr>
                            <tr>
                                <td>Transmission</td>
                                <td>{selectedCar.transmission}</td>
                            </tr>
                            <tr>
                                <td>0-60</td>
                                <td>{selectedCar.zero_to_sixty}</td>
                            </tr>
                            <tr>
                                <td>Top Speed</td>
                                <td>{selectedCar.top_speed}</td>
                            </tr>
                            <tr>
                                <td>Horsepower at RPM</td>
                                <td>{selectedCar.horsepower_at_rpm}</td>
                            </tr>
                            <tr>
                                <td>Drivetrain</td>
                                <td>{selectedCar.drivetrain}</td>
                            </tr>
                            <tr>
                                <td>Body Type</td>
                                <td>{selectedCar.body_type}</td>
                            </tr>
                            <tr>
                                <td>Seating Capacity</td>
                                <td>{selectedCar.seating_capacity}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </center>
        </Container>
    );
}