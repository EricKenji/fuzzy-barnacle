import React from "react";
import CollabCargo from '../../assets/images/collab-cargo.png'
import StockTracker from '../../assets/images/stock-tracker.png'
import BudgetTracker from '../../assets/images/budget-tracker.png'
import TechTalk from '../../assets/images/tech-talk.png'
import NoteTaker from '../../assets/images/note-taker.png'
import Weather from '../../assets/images/weather.png'


function Portfolio() {

    return (
        <div className="main">
            <h2 className="center-text">My Portfolio</h2>
            <div className="row">
                <div className="content">
                    <img src={CollabCargo} alt="collaborative cargo" />
                    <h3>Collaborative Cargo</h3>
                    <a href="https://github.com/EricKenji/stock-tracker">
                        <button >GitHub Link</button>
                    </a>
                    <a href="https://collaborative-cargo.herokuapp.com/">
                        <button>Deployed App</button>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <img src={StockTracker} alt="Stock Tracker" />
                    <h3>Stock Tracker</h3>
                    <a href="https://github.com/EricKenji/stock-tracker">
                        <button >GitHub Link</button>
                    </a>
                    <a href="https://brandonsauer8.github.io/stock-tracker/">
                        <button>Deployed App</button>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <img src={BudgetTracker} alt="Budger Tracker" />
                    <h3>Budget Tracker</h3>
                    <a href="https://github.com/EricKenji/expert-spork">
                        <button >GitHub Link</button>
                    </a>
                    <a href="https://immense-refuge-18672.herokuapp.com/">
                        <button>Deployed App</button>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <img src={TechTalk} alt="Tech Talk" />
                    <h3>Tech Talk</h3>
                    <a href="https://github.com/EricKenji/tech-talk">
                        <button >GitHub Link</button>
                    </a>
                    <a href="https://shrouded-gorge-11182.herokuapp.com/post/4">
                        <button>Deployed App</button>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <img src={NoteTaker} alt="Note Taker" />
                    <h3>Note Taker</h3>
                    <a href="https://github.com/EricKenji/note-keeper">
                        <button >GitHub Link</button>
                    </a>
                    <a href="https://nameless-retreat-41957.herokuapp.com/notes">
                        <button>Deployed App</button>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <img src={Weather} alt="Weather the Storm" />
                    <h3>Weather the Storm</h3>
                    <a href="https://github.com/EricKenji/weather-the-storm">
                        <button >GitHub Link</button>
                    </a>
                    <a href="https://erickenji.github.io/weather-the-storm/">
                        <button>Deployed App</button>
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Portfolio;