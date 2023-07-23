import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Hero from './components/hero';
import Card from './components/card';
import data from './data';

export default function App() {

    const cards = data.map((item)=>
    <Card
    key={item.id}//to get rid of the warning
        item={item}
    />
    )
    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}