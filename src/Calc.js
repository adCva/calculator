import React, { useState } from 'react'

function Calc() {
    const [ theme, setTheme ] = useState("first");
    const [displayResault, setDisplayResault ] = useState("0");

    const calcResault = () => {
        setDisplayResault(eval(displayResault));
    }

    return (
        <div className={`${theme}-theme calc-wrapper`}>
            <div className="calc-container">
                {/* ==================== Title & Theme buttons ==================== */}
                <div className="title-theme-container">
                    <h3>calc</h3>
                    <div className="theme-toggle">
                        <h6>theme</h6>
                        <div className="theme-container">
                            <div className="theme-numbers">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                            </div>
                            <div className={`theme-buttons-${theme} theme-buttons`}>
                                <button className={theme === "first" ? "theme-button active-button-first" : "theme-button"} onClick={() => setTheme('first')}></button>
                                <button className={theme === "second" ? "theme-button active-button-second" : "theme-button"} onClick={() => setTheme('second')}></button>
                                <button className={theme === "third" ? "theme-button active-button-third" : "theme-button"} onClick={() => setTheme('third')}></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================== Display Resault ==================== */}
                <div className={`display-container display-container-${theme}`}>
                    <h1>{displayResault}</h1>
                </div>

                {/* ==================== Main button ==================== */}
                <div className={`calc-buttons-container calc-buttons-container-${theme}`}>
                    <div className="buttons-row">
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}7`)}>7</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}8`)}>8</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}9`)}>9</button>
                        <button className={`delete-button delete-button-${theme}`} onClick={() => setDisplayResault(displayResault.replace(/\/$/, ""))}>DEL</button>
                        </div>

                        <div className="buttons-row">
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}4`)}>4</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}5`)}>5</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}6`)}>6</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}+`)}>+</button>
                        </div>

                        <div className="buttons-row">
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}1`)}>1</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}2`)}>2</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}3`)}>3</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}-`)}>-</button>
                        </div>

                        <div className="buttons-row">
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}.`)}>.</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}0`)}>0</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault}/`)}>/</button>
                        <button className={`normal-button normal-button-${theme}`} onClick={() => setDisplayResault(`${displayResault} * `)}>x</button>
                        </div>

                        <div className="buttons-row">
                        <button className={`reset-button reset-button-${theme}`} onClick={() => setDisplayResault("")}>Reset</button>
                        <button className={`equal-button equal-button-${theme}`} onClick={() => calcResault()}>=</button>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Calc;