import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import stockPhoto1 from '../Assets/stockphoto-1.jpeg';
import stockPhoto2 from '../Assets/stockphoto-2.jpeg';
import stockPhoto3 from '../Assets/stockphoto-3.jpeg';
import './Homepage.css';

const Homepage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, image: stockPhoto1 },
        { id: 2, image: stockPhoto2 },
        { id: 3, image: stockPhoto3 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div>
            {/* Green Background Heading */}
            <div className="second-navbar">
                <h1>
                    <span>WELCOME TO ZANZIBAR PRIMARY HEALTH INFORMATION SYSTEM</span> (PHIS)
                </h1>
            </div>

            {/* Navigation Buttons */}
            <div className="first-navbar">
                <Link to="/staff" className="btn btn-primary">
                Data Clerk
                </Link>
                <Link to="/doctor" className="btn btn-primary">
                    Doctor
                </Link>
                <Link to="/lab" className="btn btn-primary">
                    Lab Technician
                </Link>
                <Link to="/pharmacist" className="btn btn-primary">
                    Pharmacist
                </Link>
                <Link to="/administrator" className="btn btn-primary">
                    Facility Incharge
                </Link>
            </div>

            {/* Main Content */}
            <div className="homepage-container">
                <div className="text-content">
                    <h1>PATIENT MANAGEMENT SYSTEM</h1>
                    <p>Welcome to our Patient Tracker Portal</p>
                    <p>
                        Revolutionize your healthcare practice with our patient tracker system. Effortlessly manage patient information, streamline appointments, and gain insights for personalized care. Experience a comprehensive solution that enhances efficiency and ensures top-notch patient experiences.
                    </p>
                    <p>
                        Our system is designed to meet the needs of modern healthcare providers. With intuitive tools and advanced analytics, you can make data-driven decisions that improve patient outcomes and operational efficiency.
                    </p>
                    <p>
                        The platform is user-friendly and accessible from any device, ensuring that you can manage your practice on the go. Whether you're in the office or on the move, our patient tracker system is always at your fingertips.
                    </p>
                    <p>
                        Security and privacy are at the core of our system. We use state-of-the-art encryption and security protocols to ensure that your data is always protected. You can trust us to keep your information safe and secure.
                    </p>
                    <p>
                        Join the growing number of healthcare providers who are transforming their practices with our patient tracker system. Sign up today and experience the difference for yourself.
                    </p>
                </div>

                {/* Image Slider */}
                <div className="image-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img src={slide.image} alt={`Slide ${slide.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;