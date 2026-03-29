import React from 'react'
import CarCard from './CarCard'
import { Container, Row } from 'react-bootstrap';

export default function Ferrari( {cars} ) {
    //Filter just Ferrari cars
    const ferrariCars = cars.filter( car => {
        return car.manufacturer === "Ferrari"
    });

    return (
        <Container>
            <Row className="row row-cols-3">
                {ferrariCars.map(car => {
                    return <CarCard car={car} ></CarCard>
                })}
            </Row>
        </Container>
    );
}