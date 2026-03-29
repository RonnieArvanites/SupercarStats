import CarGrid from './CarGrid'

export default function Bugatti({ cars }) {
    //Filter just Bugatti cars
    const bugattiCars = cars.filter(car => {
        return car.manufacturer === "Bugatti"
    });

    return (
        <CarGrid cars={bugattiCars} />
    );
}