import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomTabs2 = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);
  const [lineWidths, setLineWidths] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const updateLineWidths = () => {
      const widths = textRefs.current.map((text) => (text ? text.offsetWidth : 0));
      setLineWidths(widths);
    };

    updateLineWidths();
    window.addEventListener('resize', updateLineWidths);

    return () => {
      window.removeEventListener('resize', updateLineWidths);
    };
  }, [items]);

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    if (items[index].path) {
      navigate(items[index].path); // Navigate to the specified path
    }
  };

  return (
    <>
      <menu className="menu">
        {items.map((item, index) => (
          <button
            key={index}
            className={`menu__item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
            style={{ '--lineWidth': `${lineWidths[index] || 0}px` }}
          >
            <div className="menu__icon">
              {React.cloneElement(item.icon, {
                className: `${item.icon.props.className || ''} ${
                  activeIndex === index ? 'active' : ''
                }`,
              })}
            </div>
            <strong
              className={`menu__text ${activeIndex === index ? 'active' : ''}`}
              ref={(el) => (textRefs.current[index] = el)}
            >
              {item.text}
            </strong>
          </button>
        ))}
      </menu>



      {/* CSS Styles */}
      <style>{`

        html {
          box-sizing: border-box;
          --duration: 0.45s;
          --cubic: cubic-bezier(0.4, 0, 0.2, 1);
          --color-1: #d5dadd;
          --color-2: #b99976;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          height: 100vh;
          display: flex;
          overflow: hidden;
          align-items: center;
          justify-content: center;
          background-color: #f0f1f1;
          font-family: 'Nunito', sans-serif;
        }

        .menu {
          margin: 0;
          width: 42em;
          display: flex;
          height: 10.4em;
          user-select: none;
          position: relative;
          align-items: center;
          padding: 0 1.9em 2.5em;
          justify-content: center;
          background-color: #fefefe;
          border-radius: 1em 1em 4.5em 4.5em;
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 680px) {
          .menu {
            font-size: 0.55em;
          }
        }

        .menu::after {
          height: 5%;
          width: 35%;
          bottom: 10%;
          content: " ";
          position: absolute;
          border-radius: 1em;
          background-color: #f2f3f4;
        }

        .menu__item {
          all: unset;
          flex-grow: 1;
          display: flex;
          cursor: pointer;
          overflow: hidden;
          padding-top: 0.5em;
          position: relative;
          align-items: center;
          color: var(--color-1);
          justify-content: center;
          transition: flex-grow var(--duration) var(--cubic);
        }

        .menu__icon {
          font-size: 1.05em;
          stroke: currentColor;
          transition: transform var(--duration) var(--cubic);
        }


        .menu__item::after {
          left: 0;
          bottom: 0;
          content: " ";
          height: 0.25em;
          position: absolute;
          border-radius: 2em;
          transform-origin: left center;
          background-color: currentColor;
          width: calc(var(--lineWidth) + 5px);
          transform: translate3d(3em, 0, 0) scaleX(0);
          transition: transform calc(var(--duration) + 0.2s) var(--cubic);
        }

        .menu__text {
          left: 4.15em;
          font-size: 1.5em;
          position: absolute;
          text-transform: capitalize;
          letter-spacing: 0.01em;
          transform: translate3d(0, 109%, 0);
          transition: transform calc(var(--duration) / 3.7);
        }

        .menu__item.active {
          flex-grow: 2.7;
          color: var(--color-2);
        }

        .menu__item.active .menu__icon {
          transform: translate3d(-95%, 0, 0);
        }

        .menu__item.active::before {
          transform: scale(1);
        }

        .menu__item.active::after {
          transform: translate3d(6.3em, 0, 0) scaleX(1);
          transition: transform var(--duration) var(--cubic);
        }

        .menu__text.active {
          transform: translate3d(0, 0, 0);
          transition: transform calc(var(--duration) / 1.5);
        }

        .icon {
          --duration-icon: 1s;
          fill: none;
          width: 2.5em;
          height: 2.5em;
          display: block;
          stroke-width: 15;
          stroke-miterlimit: 10;
        }

        /* Keyframes and animations for icons */
        /* Include the rest of your CSS animations and keyframes here */

      `}</style>
    </>
);
};

export default BottomTabs2;
