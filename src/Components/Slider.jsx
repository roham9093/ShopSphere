import React, { useState, useEffect } from 'react';
import "../Styles/Slider.css";
import scarpa from "../Assets/scarpa.png";
import scarpa2 from "../Assets/scarpa2.png";
import scarpa3 from "../Assets/scarpa3.png";

const Slider = () => {
    const slides = [
        { image: scarpa, caption: "Banner of the Slides. 50% Off on the Scarpa !" },
        { image: scarpa2, caption: "Banner of the Slides. 50% Off on the Scarpa !" },
        { image: scarpa3, caption: "Banner of the Slides. 50% Off on the Scarpa !" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) { // تغییر خودکار فقط وقتی که در حال درگ نیستیم
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }
        }, 3000); // تغییر اسلاید هر 3 ثانیه
        return () => clearInterval(interval);
    }, [isDragging, slides.length]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        if (deltaX > 50) { // درگ به سمت راست
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setIsDragging(false);
        } else if (deltaX < -50) { // درگ به سمت چپ
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        if (deltaX > 50) { // درگ به سمت راست
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setIsDragging(false);
        } else if (deltaX < -50) { // درگ به سمت چپ
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="slider"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.image} alt={`Slide ${index}`} />
                    <h1>{slide.caption}</h1>
                </div>
            ))}

            <div className="dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
