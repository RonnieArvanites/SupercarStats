import CarGrid from './CarGrid'

export default function Ferrari({ cars }) {
    //Filter just Ferrari cars
    const ferrariCars = cars.filter(car => {
        return car.manufacturer === "Ferrari"
    });

    return (
        <CarGrid cars={ferrariCars} />
    );
}