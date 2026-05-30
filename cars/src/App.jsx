import './App.css'
import Home from './components/Home'
import Lamborghini from './components/Lamborghini'
import Ferrari from './components/Ferrari'
import McLaren from './components/McLaren'
import Bugatti from './components/Bugatti'
import About from './components/About'
import CarDetail from './components/CarDetail'
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Navigate,
  Route
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';



function App() {
  const cars = [
    {
      id: 1,
      name: "Senna",
      manufacturer: "McLaren",
      thumbnail: "../images/McLaren/Senna/thumbnail.jpg",
      top_speed: "220 mph",
      zero_to_sixty: "2.5 sec",
      year: "2019",
      engine: "4.0-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed + Reverse Seamless Shift Gearbox (SSG)",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "789 @ 7250",
      interior_view_img_url: "../images/McLaren/Senna/interior_view.jpg",
      rear_view_img_url: "../images/McLaren/Senna/rear_view.jpg",
      top_view_img_url: "../images/McLaren/Senna/top_view.jpg",
      slug: "senna"
    },
    {
      id: 2,
      name: "570S Spider",
      manufacturer: "McLaren",
      thumbnail: "../images/McLaren/570S_Spider/thumbnail.jpg",
      top_speed: "205 mph",
      zero_to_sixty: "3.5 sec",
      year: "2018",
      engine: "3.8-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Convertible",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "562 @ 7500",
      interior_view_img_url: "../images/McLaren/570S_Spider/interior_view.jpg",
      rear_view_img_url: "../images/McLaren/570S_Spider/rear_view.jpg",
      top_view_img_url: "../images/McLaren/570S_Spider/top_view.jpg",
      slug: "570S_spider"
    },
    {
      id: 3,
      name: "GT",
      manufacturer: "McLaren",
      thumbnail: "../images/McLaren/GT/thumbnail.jpg",
      top_speed: "203 mph",
      zero_to_sixty: "3.2 sec",
      year: "2020",
      engine: "4.0-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "620 @ 7500",
      interior_view_img_url: "../images/McLaren/GT/interior_view.jpg",
      rear_view_img_url: "../images/McLaren/GT/rear_view.jpg",
      top_view_img_url: "../images/McLaren/GT/top_view.jpg",
      slug: "gt"
    },
    {
      id: 4,
      name: "600LT",
      manufacturer: "McLaren",
      thumbnail: "../images/McLaren/600LT/thumbnail.jpg",
      top_speed: "204 mph",
      zero_to_sixty: "2.9 sec",
      year: "2019",
      engine: "3.8-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "592 @ 7500",
      interior_view_img_url: "../images/McLaren/600LT/interior_view.jpg",
      rear_view_img_url: "../images/McLaren/600LT/rear_view.jpg",
      top_view_img_url: "../images/McLaren/600LT/top_view.jpg",
      slug: "600LT"
    },
    {
      id: 5,
      name: "Speedtail",
      manufacturer: "McLaren",
      thumbnail: "../images/McLaren/Speedtail/thumbnail.jpg",
      top_speed: "250 mph",
      zero_to_sixty: "2.6 sec",
      year: "2019",
      engine: "4.0-liter Twin-Turbo V8 Hybrid",
      transmission: "7-Speed Dual-Clutch Automatic",
      body_type: "Coupe",
      seating_capacity: "3 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "1035 @ 7500",
      interior_view_img_url: "../images/McLaren/Speedtail/interior_view.jpg",
      rear_view_img_url: "../images/McLaren/Speedtail/rear_view.jpg",
      top_view_img_url: "../images/McLaren/Speedtail/top_view.jpg",
      slug: "speedtail"
    },
    {
      id: 6,
      name: "720S",
      manufacturer: "McLaren",
      thumbnail: "../images/McLaren/720S/thumbnail.jpg",
      top_speed: "212 mph",
      zero_to_sixty: "2.8 sec",
      year: "2018",
      engine: "4.0-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "710 @ 7250",
      interior_view_img_url: "../images/McLaren/720S/interior_view.jpg",
      rear_view_img_url: "../images/McLaren/720S/rear_view.jpg",
      top_view_img_url: "../images/McLaren/720S/top_view.jpg",
      slug: "720S"
    },
    {
      id: 7,
      name: "Sian FKP 37",
      manufacturer: "Lamborghini",
      thumbnail: "../images/Lamborghini/Sain_FKP_37/thumbnail.jpg",
      top_speed: "217 mph",
      zero_to_sixty: "2.8 sec",
      year: "2020",
      engine: "6.5-liter V12 Hybrid",
      transmission: "7-Speed ISR Semi-Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "808 @ 8500",
      interior_view_img_url: "../images/Lamborghini/Sain_FKP_37/interior_view.jpg",
      rear_view_img_url: "../images/Lamborghini/Sain_FKP_37/rear_view.jpg",
      top_view_img_url: "../images/Lamborghini/Sain_FKP_37/top_view.jpg",
      slug: "sian_fkp_37"
    },
    {
      id: 8,
      name: "Aventador SVJ",
      manufacturer: "Lamborghini",
      thumbnail: "../images/Lamborghini/Aventador_SVJ/thumbnail.jpg",
      top_speed: "217 mph",
      zero_to_sixty: "2.8 sec",
      year: "2019",
      engine: "6.5-liter V12 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "770 @ 8500",
      interior_view_img_url: "../images/Lamborghini/Aventador_SVJ/interior_view.jpg",
      rear_view_img_url: "../images/Lamborghini/Aventador_SVJ/rear_view.jpg",
      top_view_img_url: "../images/Lamborghini/Aventador_SVJ/top_view.jpg",
      slug: "aventador_svj"
    },
    {
      id: 9,
      name: "Huracan Evo",
      manufacturer: "Lamborghini",
      thumbnail: "../images/Lamborghini/Huracan_Evo/thumbnail.jpg",
      top_speed: "202 mph",
      zero_to_sixty: "2.9 sec",
      year: "2019",
      engine: "5.2-liter V10 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "631 @ 8000",
      interior_view_img_url: "../images/Lamborghini/Huracan_Evo/interior_view.jpg",
      rear_view_img_url: "../images/Lamborghini/Huracan_Evo/rear_view.jpg",
      top_view_img_url: "../images/Lamborghini/Huracan_Evo/top_view.png",
      slug: "huracan_evo"
    },
    {
      id: 10,
      name: "Veneno",
      manufacturer: "Lamborghini",
      thumbnail: "../images/Lamborghini/Veneno/thumbnail.jpg",
      top_speed: "221 mph",
      zero_to_sixty: "2.8 sec",
      year: "2013",
      engine: "6.5-liter V12 Gas",
      transmission: "ISR 7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "740 @ 8400",
      interior_view_img_url: "../images/Lamborghini/Veneno/interior_view.jpg",
      rear_view_img_url: "../images/Lamborghini/Veneno/rear_view.jpg",
      top_view_img_url: "../images/Lamborghini/Veneno/top_view.jpg",
      slug: "veneno"
    },
    {
      id: 11,
      name: "Centenario",
      manufacturer: "Lamborghini",
      thumbnail: "../images/Lamborghini/Centenario/thumbnail.jpg",
      top_speed: "217 mph",
      zero_to_sixty: "2.7 sec",
      year: "2016",
      engine: "6.5-liter V12 Gas",
      transmission: "7-Speed ISR Semi-Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "770 @ 8500",
      interior_view_img_url: "../images/Lamborghini/Centenario/interior_view.jpg",
      rear_view_img_url: "../images/Lamborghini/Centenario/rear_view.jpg",
      top_view_img_url: "../images/Lamborghini/Centenario/top_view.jpg",
      slug: "centenario"
    },
    {
      id: 12,
      name: "812 Superfast",
      manufacturer: "Ferrari",
      thumbnail: "../images/Ferrari/812_Superfast/thumbnail.jpg",
      top_speed: "211 mph",
      zero_to_sixty: "2.9 sec",
      year: "2018",
      engine: "6.5-liter V12 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "788 @ 8500",
      interior_view_img_url: "../images/Ferrari/812_Superfast/interior_view.jpg",
      rear_view_img_url: "../images/Ferrari/812_Superfast/rear_view.jpg",
      top_view_img_url: "../images/Ferrari/812_Superfast/top_view.jpg",
      slug: "812_superfast"
    },
    {
      id: 13,
      name: "LaFerrari",
      manufacturer: "Ferrari",
      thumbnail: "../images/Ferrari/LaFerrari/thumbnail.jpg",
      top_speed: "217 mph",
      zero_to_sixty: "3 sec",
      year: "2014",
      engine: "6.3-liter V12 Hybrid",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "949 @ 9000",
      interior_view_img_url: "../images/Ferrari/LaFerrari/interior_view.jpg",
      rear_view_img_url: "../images/Ferrari/LaFerrari/rear_view.jpg",
      top_view_img_url: "../images/Ferrari/LaFerrari/top_view.jpg",
      slug: "laFerrari"
    },
    {
      id: 14,
      name: "488 Spider",
      manufacturer: "Ferrari",
      thumbnail: "../images/Ferrari/488_Spider/thumbnail.jpg",
      top_speed: "205 mph",
      zero_to_sixty: "3 sec",
      year: "2016",
      engine: "3.9-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Convertible",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "660 @ 8000",
      interior_view_img_url: "../images/Ferrari/488_Spider/interior_view.jpg",
      rear_view_img_url: "../images/Ferrari/488_Spider/rear_view.jpg",
      top_view_img_url: "../images/Ferrari/488_Spider/top_view.jpg",
      slug: "488_spider"
    },
    {
      id: 15,
      name: "F8 Tributo",
      manufacturer: "Ferrari",
      thumbnail: "../images/Ferrari/F8_Tributo/thumbnail.jpg",
      top_speed: "211 mph",
      zero_to_sixty: "2.9 sec",
      year: "2020",
      engine: "3.9-liter Twin-Turbo V8 Gas",
      transmission: "7-Speed Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "Rear-Wheel Drive",
      horsepower_at_rpm: "710 @ 8000",
      interior_view_img_url: "../images/Ferrari/F8_Tributo/interior_view.jpg",
      rear_view_img_url: "../images/Ferrari/F8_Tributo/rear_view.jpg",
      top_view_img_url: "../images/Ferrari/F8_Tributo/top_view.jpg",
      slug: "f8_tributo"
    },
    {
      id: 16,
      name: "Chiron",
      manufacturer: "Bugatti",
      thumbnail: "../images/Bugatti/Chiron/thumbnail.jpg",
      top_speed: "261 mph",
      zero_to_sixty: "2.5 sec",
      year: "2018",
      engine: "8.0-liter W16 Gas",
      transmission: "7-Speed Dual Clutch",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "1500 @ 6700",
      interior_view_img_url: "../images/Bugatti/Chiron/interior_view.jpg",
      rear_view_img_url: "../images/Bugatti/Chiron/rear_view.jpg",
      top_view_img_url: "../images/Bugatti/Chiron/top_view.jpg",
      slug: "chiron"
    },
    {
      id: 17,
      name: "Divo",
      manufacturer: "Bugatti",
      thumbnail: "../images/Bugatti/Divo/thumbnail.jpg",
      top_speed: "236 mph",
      zero_to_sixty: "2.5 sec",
      year: "2019",
      engine: "8.0-liter W16 Gas",
      transmission: "7-Speed DSG",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "1500 @ 7600",
      interior_view_img_url: "../images/Bugatti/Divo/interior_view.jpg",
      rear_view_img_url: "../images/Bugatti/Divo/rear_view.jpg",
      top_view_img_url: "../images/Bugatti/Divo/top_view.jpg",
      slug: "divo"
    },
    {
      id: 18,
      name: "Veyron 16.4",
      manufacturer: "Bugatti",
      thumbnail: "../images/Bugatti/Veyron_16.4/thumbnail.jpg",
      top_speed: "253 mph",
      zero_to_sixty: "2.6 sec",
      year: "2006",
      engine: "8.0-liter W16 Gas",
      transmission: "7-Speed Direct Shift Automatic",
      body_type: "Coupe",
      seating_capacity: "2 Seater",
      drivetrain: "All-Wheel Drive",
      horsepower_at_rpm: "987 @ 6000",
      interior_view_img_url: "../images/Bugatti/Veyron_16.4/interior_view.jpg",
      rear_view_img_url: "../images/Bugatti/Veyron_16.4/rear_view.jpg",
      top_view_img_url: "../images/Bugatti/Veyron_16.4/top_view.jpg",
      slug: "veyron_16.4"
    },
  ]

  return (
    <div>
      <Router>
        <Navbar className="nav-bar" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">Supercar Stats</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavItem>
                <NavLink to="/lamborghini" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Lamborghini</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/ferrari" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Ferrari</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/mclaren" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>McLaren</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/bugatti" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Bugatti</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lamborghini" element={<Lamborghini cars={cars} />} />
          <Route path="/lamborghini/:slug" element={<CarDetail cars={cars} />} />
          <Route path="/ferrari" element={<Ferrari cars={cars} />} />
          <Route path="/ferrari/:slug" element={<CarDetail cars={cars} />} />
          <Route path="/mclaren" element={<McLaren cars={cars} />} />
          <Route path="/mclaren/:slug" element={<CarDetail cars={cars} />} />
          <Route path="/bugatti" element={<Bugatti cars={cars} />} />
          <Route path="/bugatti/:slug" element={<CarDetail cars={cars} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
