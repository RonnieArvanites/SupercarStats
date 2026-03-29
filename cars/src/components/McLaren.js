import CarGrid from "./CarGrid";

export default function McLaren({ cars }) {
    //Filter just McLaren cars
    const mcLarenCars = cars.filter(car => {
        return car.manufacturer === "McLaren"
    });

    return (
        <CarGrid cars={mcLarenCars} />
    );
}