import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useRef } from 'react';

const width = 1200;
const height = 900;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };
const color = 'rgba(255, 255, 255, .4)';
const stroke = 'black';
const stroke_width = '9px';
const initial_level = "https://images2.alphacoders.com/925/925901.jpg";

const App = () => {
    const reference = useRef(initial_level);

    const [mousePosition, setMousePosition] = useState(initialMousePosition);
    const [level, setLevel] = useState(initial_level)

    const handleMouseMove = useCallback(event => {
        const { clientX, clientY } = event;
        console.log(reference.current)
        setMousePosition({ x: clientX, y: clientY });
        if (clientX >= 800
            && clientX <= 830
            && clientY >= 250
            && clientY <= 300
            && reference.current == "https://images4.alphacoders.com/645/64574.jpg") {
            alert("You found Waldo!!")
        }
        else if (clientX >= 660
            && clientX <= 690
            && clientY >= 280
            && clientY <= 300
            && reference.current == "https://images2.alphacoders.com/925/925901.jpg") {
            alert("You found Waldo!!")
        }
        else if (clientX >= 30
            && clientX <= 55
            && clientY >= 115
            && clientY <= 140
            && reference.current == "https://images6.alphacoders.com/925/925900.jpg") {
            alert("You found Waldo!!")
        }

    }, [setMousePosition]);


    const handleInput = event => {
        const buttonValue = event.target.value;
        if (buttonValue == 'level 1') {
            // setLevel("https://images6.alphacoders.com/925/925900.jpg");
            reference.current = "https://images6.alphacoders.com/925/925900.jpg"
            setLevel(reference.current)
        }
        else if (buttonValue == 'level 2') {
            // setLevel("https://images2.alphacoders.com/925/925901.jpg");
            reference.current = "https://images2.alphacoders.com/925/925901.jpg"
            setLevel(reference.current)
        }
        else if (buttonValue == 'level 3') {
            // setLevel("https://images4.alphacoders.com/645/64574.jpg");
            reference.current = "https://images4.alphacoders.com/645/64574.jpg"
            setLevel(reference.current)

        }

    }


    return (
        <div>
            <img style={{ width: 52, height: 36 }}
                src="https://lh3.googleusercontent.com/proxy/GGpS20ThpZ2zGQ1kVVMqUGXoajBslizw-3JNCvqhQE2EKI63Rv1vMCwxdeGjRGALrU0sDskR8zoo_mlgRMk7KGFApUcg9VBizHxkjAxVVfS4PBuQCokzcK3yuYo7fWQmsXc"
                alt="Where's Waldo?"
            />
            <button style={{ backgroundColor: 'red', borderRadius: 8, color: 'white' }} onClick={handleInput} value="level 1">Level 1</button>
            <button style={{ backgroundColor: 'blue', borderRadius: 8, color: 'white' }} onClick={handleInput} value="level 2">Level 2</button>
            <button style={{ backgroundColor: 'red', borderRadius: 8, color: 'white' }} onClick={handleInput} value="level 3">Level 3</button>


            <div style={{
                backgroundImage: `url(${level})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                flex: 1,
                width: null,
                height: null,
            }}>


                <svg width={width} height={height} fill={color} stroke={stroke} stroke_width={stroke_width} onMouseMove={handleMouseMove}>
                    <circle
                        cx={mousePosition.x}
                        cy={mousePosition.y}
                        r={circleRadius}
                    />
                </svg>
            </div>
        </div>

    );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);