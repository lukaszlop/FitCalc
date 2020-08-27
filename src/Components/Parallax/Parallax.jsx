import React from 'react';
import './Parallax.scss';
import '../Container/Container.scss';

const Parallax = () => {
    return (
        <>
        <section className="parallax-wrapper">
            <div className="container">
                <div className="parallax">
                    <h2 className="paralax-headline">Dieta Samuraja</h2>
                    <p className="paralax-text">Dieta Samuraja to zmodyfikowana wersja diety Paleo, wzbogacona o bezglutenowe węglowodany. Kluczową zasadą tej diety jest skupienie się na żywności niskoprzetworzonej.</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Parallax;
