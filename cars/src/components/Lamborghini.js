import React from 'react'
import CarCard from './CarCard'
import { Container, Row } from 'react-bootstrap';

export default function Lamborghini( { cars }) {
    //Filter just Lamborghini cars
    const lamborghiniCars = cars.filter( car => {
        return car.manufacturer === "Lamborghini"
    });

    return (
        <Container>
            <Row className="row row-cols-3">
                {lamborghiniCars.map(car => {
                    return <CarCard car={car} ></CarCard>
                })}
            </Row>
        </Container>
    );
}