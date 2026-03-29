import CarCard from './CarCard'

export default function CarGrid({ cars }) {
    return (
        <div className="car-grid">
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}