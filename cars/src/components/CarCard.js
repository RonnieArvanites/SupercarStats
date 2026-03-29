import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {
    useResolvedPath,
} from 'react-router-dom'

export default function CarCard({ car }) {
    const resolvedPath = useResolvedPath('.');
    const url = resolvedPath.pathname;
    return (
        <React.Fragment>
            <Card className="text-center car-card-full">
                <Card.Img variant="top" src={car.thumbnail} className="card-img" />
                <Card.Body>
                    <Card.Title>{car.manufacturer} {car.name}</Card.Title>
                </Card.Body>
                <center>
                    <Button className="card-button" variant="dark" href={`${url}/${car.slug}`}>View Stats</Button>
                </center>
            </Card>
        </React.Fragment>
    );
}