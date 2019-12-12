import React from 'react'
import CarCard from './CarCard'
import { Container, Row } from 'react-bootstrap';

export default function McLaren( { cars }) {
    //Filter just McLaren cars
    const mcLarenCars = cars.filter( car => {
        return car.manufacturer === "McLaren"
    });

    return (
        <Container>
            <Row className="row row-cols-3">
                {mcLarenCars.map(car => {
                    return <CarCard key={car.slug} car={car} ></CarCard>
                })}
            </Row>
        </Container>
    );
}