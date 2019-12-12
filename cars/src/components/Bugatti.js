import React from 'react'
import CarCard from './CarCard'
import { Container, Row } from 'react-bootstrap';


export default function Bugatti( { cars }) {
    //Filter just Bugatti cars
    const bugattiCars = cars.filter( car => {
        return car.manufacturer === "Bugatti"
    });

    return (
        <Container>
            <Row className="row row-cols-3">
                {bugattiCars.map(car => {
                    return <CarCard car={car} ></CarCard>
                })}
            </Row>
        </Container>
    );
}