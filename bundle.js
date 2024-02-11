(function (React, ReactDOM) {
    'use strict';

    var width = 1200;
    var height = 900;
    var circleRadius = 30;
    var initialMousePosition = { x: width / 2, y: height / 2 };
    var color = 'rgba(255, 255, 255, .4)';
    var stroke = 'black';
    var stroke_width = '9px';
    var initial_level = "https://images2.alphacoders.com/925/925901.jpg";

    var App = function () {
        var reference = React.useRef(initial_level);

        var ref = React.useState(initialMousePosition);
        var mousePosition = ref[0];
        var setMousePosition = ref[1];
        var ref$1 = React.useState(initial_level);
        var level = ref$1[0];
        var setLevel = ref$1[1];

        var handleMouseMove = React.useCallback(function (event) {
            var clientX = event.clientX;
            var clientY = event.clientY;
            console.log(reference.current);
            setMousePosition({ x: clientX, y: clientY });
            if (clientX >= 800
                && clientX <= 830
                && clientY >= 250
                && clientY <= 300
                && reference.current == "https://images4.alphacoders.com/645/64574.jpg") {
                alert("You found Waldo!!");
            }
            else if (clientX >= 660
                && clientX <= 690
                && clientY >= 280
                && clientY <= 300
                && reference.current == "https://images2.alphacoders.com/925/925901.jpg") {
                alert("You found Waldo!!");
            }
            else if (clientX >= 30
                && clientX <= 55
                && clientY >= 115
                && clientY <= 140
                && reference.current == "https://images6.alphacoders.com/925/925900.jpg") {
                alert("You found Waldo!!");
            }

            // 650 - 
            //530-550

            //530-550
            //30-55

        }, [setMousePosition]);


        var handleInput = function (event) {
            var buttonValue = event.target.value;
            if (buttonValue == 'level 1') {
                // setLevel("https://images6.alphacoders.com/925/925900.jpg");
                reference.current = "https://images6.alphacoders.com/925/925900.jpg";
                setLevel(reference.current);
            }
            else if (buttonValue == 'level 2') {
                // setLevel("https://images2.alphacoders.com/925/925901.jpg");
                reference.current = "https://images2.alphacoders.com/925/925901.jpg";
                setLevel(reference.current);
            }
            else if (buttonValue == 'level 3') {
                // setLevel("https://images4.alphacoders.com/645/64574.jpg");
                reference.current = "https://images4.alphacoders.com/645/64574.jpg";
                setLevel(reference.current);

            }
            //some logic
            //800-830
            //250-300
        };


        return (
            React.createElement( 'div', null, 
                React.createElement( 'img', { style: { width: 52, height: 36 }, src: "https://lh3.googleusercontent.com/proxy/GGpS20ThpZ2zGQ1kVVMqUGXoajBslizw-3JNCvqhQE2EKI63Rv1vMCwxdeGjRGALrU0sDskR8zoo_mlgRMk7KGFApUcg9VBizHxkjAxVVfS4PBuQCokzcK3yuYo7fWQmsXc", alt: "Where's Waldo?" }), 
                React.createElement( 'button', { style: { backgroundColor: 'red', borderRadius: 8, color: 'white' }, onClick: handleInput, value: "level 1" }, "Level 1"), 
                React.createElement( 'button', { style: { backgroundColor: 'blue', borderRadius: 8, color: 'white' }, onClick: handleInput, value: "level 2" }, "Level 2"), 
                React.createElement( 'button', { style: { backgroundColor: 'red', borderRadius: 8, color: 'white' }, onClick: handleInput, value: "level 3" }, "Level 3"), 


                React.createElement( 'div', { style: {
                    backgroundImage: ("url(" + level + ")"),
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    flex: 1,
                    width: null,
                    height: null,
                } }, 


                    React.createElement( 'svg', { width: width, height: height, fill: color, stroke: stroke, stroke_width: stroke_width, onMouseMove: handleMouseMove }, 
                        React.createElement( 'circle', {
                            cx: mousePosition.x, cy: mousePosition.y, r: circleRadius })
                    )
                )
            )

        );
    };
    var rootElement = document.getElementById('root');
    ReactDOM.render(React.createElement( App, null ), rootElement);

})(React, ReactDOM);
//# sourceMappingURL=bundle.js.map
