import CarGrid from './CarGrid'

export default function Lamborghini({ cars }) {
    //Filter just Lamborghini cars
    const lamborghiniCars = cars.filter(car => {
        return car.manufacturer === "Lamborghini"
    });

    return (
        <CarGrid cars={lamborghiniCars} />
    );
}