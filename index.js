'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;700&display=swap');\n\n.core-button {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-transform: capitalize;\n    font-family: 'IBM Plex Sans', sans-serif;\n    font-size: 18px;\n    font-weight: 400;\n    transition: color .5s, background-color .5s, border .5s;\n    cursor: pointer;\n    justify-content: center;\n}\n\n.core-button-container {\n    position: relative;\n}\n\n.core-button div {\n    padding: 4px;\n    border-radius: 7px;\n    display: flex;\n    margin-right: 5px;\n}\n\n.core-button-filter {\n    position: absolute;\n    z-index: 20;\n    background-color: black;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n";
styleInject(css_248z);

/** @format */
const Button = ({ label, type, variant, onClick, style, className, disabled, buttonColor, altButtonColor, buttonIcon, iconBackgroundColor, size, }) => {
    // const [clicked, setClicked] = useState(false);
    const [hover, setHover] = React.useState(false);
    const primaryColour = () => {
        switch (type) {
            case 'primary':
                return buttonColor || '#057AFF';
            case 'secondary':
                return buttonColor || 'white';
            case 'tertiary':
                return buttonColor || 'black';
            default:
                return buttonColor || 'black';
        }
    };
    const secondaryColour = () => {
        switch (type) {
            case 'primary':
                return altButtonColor || 'white';
            case 'secondary':
                return altButtonColor || '#057AFF';
            case 'tertiary':
                return altButtonColor || 'white';
            default:
                return altButtonColor || 'white';
        }
    };
    const border = () => {
        switch (variant) {
            case 'contained':
                return hover
                    ? `solid 2px ${primaryColour()}`
                    : 'solid 2px transparent';
            case 'outlined':
                return `solid 2px ${primaryColour()}`;
            case 'text':
                return 'none';
            default:
                return 'none';
        }
    };
    const backgroundColor = () => {
        switch (variant) {
            case 'contained':
                return hover ? secondaryColour() : primaryColour();
            case 'outlined':
                return hover ? primaryColour() : 'transparent';
            case 'text':
                return 'transparent';
            default:
                return primaryColour();
        }
    };
    const color = () => {
        switch (variant) {
            case 'contained':
                return hover ? primaryColour() : secondaryColour();
            case 'outlined':
                return hover ? secondaryColour() : primaryColour();
            case 'text':
                return primaryColour();
            default:
                return primaryColour();
        }
    };
    const btnSize = () => {
        switch (size) {
            case 'small':
                return '150px';
            case 'large':
                return '320px';
            default:
                return size || '';
        }
    };
    return (React.createElement("div", { className: 'core-button-container', style: { width: variant === 'text' ? '' : btnSize() } },
        React.createElement("button", { 
            // onMouseDown={() => setClicked(true)}
            // onMouseUp={() => setClicked(false)}
            onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), type: 'button', className: `core-button ${className}`, style: Object.assign({ border: border(), backgroundColor: backgroundColor(), color: color(), padding: variant === 'text' ? 'unset' : '5px 35px', width: variant === 'text' ? '' : btnSize() }, style), onClick: () => {
                if (!onClick)
                    return;
                onClick();
            } },
            buttonIcon ? (React.createElement("div", { style: {
                    backgroundColor: iconBackgroundColor || 'white',
                } }, buttonIcon)) : null,
            label),
        disabled ? (React.createElement("div", { className: 'core-button-filter', style: {
                opacity: 0.3,
            } })) : null));
};
Button.defaultProps = {
    variant: 'outlined',
    type: 'primary',
    label: 'test',
    onClick: () => { },
    disabled: false,
    size: 'small',
};

var css_248z$1 = ".core-tick-box {\n    height: 18px;\n}\n\n.core-tick-box:hover {\n    cursor: pointer;\n}\n";
styleInject(css_248z$1);

/** @format */
const Tickbox = ({ ticked, onChange, className, style }) => {
    const [isTicked, setIsTicked] = React.useState(ticked);
    React.useEffect(() => setIsTicked(ticked), [ticked]);
    return (React.createElement("svg", { className: `core-tick-box ${className}`, onClick: () => {
            setIsTicked(!isTicked);
            if (!onChange)
                return;
            onChange();
        }, viewBox: "0 0 64 64", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, style: style },
        React.createElement("path", { d: "M63.994 0h-64v64h64V0zM2.552 2.545v58.914h58.884V2.544H2.552z", fill: "#d3d3d3" }),
        isTicked ? (React.createElement("path", { d: "M24.442 50.674c-.605.605-1.463 1.11-2.22 1.11-.758 0-1.615-.53-2.246-1.136L5.844 36.517l4.492-4.492 11.91 11.91L53.74 12.217l4.416 4.568-33.714 33.89z", fill: "#6f7b91", fillRule: "nonzero" })) : null));
};
Tickbox.defaultProps = {
    onChange: () => { },
};

var css_248z$2 = ".icon {\n    height: 20px;\n    width: 20px;\n}\n";
styleInject(css_248z$2);

/** @format */
const Lock = ({ locked, style, disabled, iconColor, onChange, className, }) => {
    const [isLocked, setIsLocked] = React.useState(locked);
    React.useEffect(() => setIsLocked(locked), [locked]);
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon`, onClick: () => {
            setIsLocked(!isLocked);
            if (!onChange)
                return;
            onChange(!isLocked);
        } },
        React.createElement("path", { fill: "none", d: "M0 0h16v16H0z" }),
        React.createElement("path", { d: isLocked || disabled
                ? 'M4.587 14.066a1.139 1.139 0 01-1.144-1.144V7.585c0-.636.508-1.144 1.144-1.144h.38V4.916c0-1.652 1.399-3.05 3.05-3.05 1.653 0 3.05 1.398 3.05 3.05v1.525h.382c.636 0 1.144.508 1.144 1.144v5.337c0 .636-.508 1.144-1.144 1.144H4.587zm0-1.144h6.862V7.585H4.587v5.337zm5.337-6.481V4.916c0-1.017-.89-1.906-1.906-1.906-1.017 0-1.906.89-1.906 1.906v1.525h3.812z'
                : 'M4.544 14.1A1.15 1.15 0 013.4 12.956V7.62a1.15 1.15 0 011.144-1.144h4.003V5.427A3.543 3.543 0 0112.073 1.9 3.543 3.543 0 0115.6 5.427v1.525a.67.67 0 01-.667.667.67.67 0 01-.667-.667V5.427c0-1.203-.99-2.193-2.193-2.193-1.202 0-2.192.99-2.192 2.193v1.048h1.525a1.15 1.15 0 011.144 1.144v5.337a1.15 1.15 0 01-1.144 1.144H4.544zm0-1.144h6.862V7.62H4.544v5.337z', fill: iconColor || '#6f7b91', fillRule: "nonzero" }),
        disabled ? (React.createElement("path", { fill: "#ff2f24", d: "M12.89 2.404l.706.707L3.111 13.596l-.707-.707z" })) : null));
};
Lock.defaultProps = {
    style: {},
};

/** @format */
const Room = ({ style, className }) => {
    return (React.createElement("svg", { viewBox: ' 0 19 19', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M17.491 5.468a.538.538 0 00-.203.039l-.092.046-6.89 3.574-.156.08s-.002 0-.002.002a1.017 1.017 0 00-.504.86v7.468c0 .257.227.464.51.464.084 0 .168-.02.244-.056l.02-.012 7.021-3.724.01-.006c.332-.18.553-.512.553-.888V5.93c0-.255-.23-.462-.51-.462z", fill: "#6f7b91", fillRule: "nonzero" }),
        React.createElement("path", { d: "M15.554 14.519a.423.423 0 01-.228.368l-.005.002-2.909 1.544-.008.004a.23.23 0 01-.101.024c-.118 0-.212-.086-.212-.193v-5.223c0-.149.083-.28.21-.357l.065-.034 2.854-1.48.038-.02a.223.223 0 01.085-.016c.116 0 .211.086.211.192v5.189z", fill: "#a4abba", fillRule: "nonzero" }),
        React.createElement("path", { d: "M16.968 3.477L9.668.193S9.237 0 9 0c-.238 0-.664.193-.664.193L1.03 3.477s-.321.132-.321.38c0 .264.333.463.333.463L8.38 8.192l.116.06c.152.067.325.106.506.106.183 0 .358-.039.512-.109l.102-.052 7.349-3.88s.301-.161.301-.46c0-.26-.297-.38-.297-.38zM7.855 9.209l-.16-.082L.805 5.553l-.092-.046a.528.528 0 00-.203-.039c-.282 0-.51.207-.51.462v7.385c0 .377.22.707.551.888l.009.006 7.02 3.724a.543.543 0 00.267.068c.281 0 .51-.207.51-.464V10.07c0-.359-.2-.674-.503-.861z", fill: "#6f7b91", fillRule: "nonzero" })));
};
Room.defaultProps = {
    style: {},
};

/** @format */
const Mail = ({ iconColor, style, className }) => {
    return (React.createElement("svg", { viewBox: '0 0 20 17', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M.913.002H.909C.41.002 0 .41 0 .91v14.545c0 .5.41.91.91.91H19.09c.499 0 .909-.41.909-.91V.911c0-.5-.41-.91-.91-.91H.914zM3.268 1.82h13.487l-6.75 6.055L3.268 1.82zm-1.45 1.146l7.576 6.8c.343.309.87.309 1.214 0l7.575-6.782v11.563H1.817V2.966z", fill: iconColor || '#bebebe', fillRule: "nonzero" })));
};

/** @format */
const Key = ({ iconColor, style, className }) => {
    return (React.createElement("svg", { viewBox: '0 0 21 21', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M20.024.36v3.575a.36.36 0 01-.358.358h-2.503v2.503a.36.36 0 01-.358.357h-2.503v2.504a.357.357 0 01-.103.253l-1.652 1.652c.216.653.326 1.337.326 2.025 0 3.53-2.905 6.436-6.436 6.436S.001 17.118.001 13.587s2.905-6.436 6.436-6.436c.69 0 1.375.11 2.03.328l7.37-7.373a.357.357 0 01.253-.104h3.576a.36.36 0 01.358.357zm-.716 3.218V.718h-3.071L8.813 8.143a.358.358 0 01-.379.082 5.724 5.724 0 00-1.996-.36c-3.139 0-5.722 2.583-5.722 5.722 0 3.138 2.583 5.72 5.722 5.72 3.138 0 5.721-2.582 5.721-5.72 0-.682-.122-1.358-.36-1.997a.358.358 0 01.083-.375l1.705-1.706V6.796a.36.36 0 01.358-.358h2.503V3.935a.36.36 0 01.357-.357h2.503z", fill: iconColor || '#bebebe', fillRule: "nonzero" }),
        React.createElement("path", { d: "M9.194 13.661a2.515 2.515 0 01-2.503 2.503 2.515 2.515 0 01-2.503-2.503 2.515 2.515 0 012.503-2.503 2.515 2.515 0 012.503 2.503zm-4.29 0c0 .98.806 1.788 1.787 1.788.981 0 1.788-.807 1.788-1.788 0-.98-.807-1.788-1.788-1.788-.98 0-1.788.807-1.788 1.788z", fill: iconColor || '#bebebe', fillRule: "nonzero" })));
};

/** @format */
const Google = ({ style, className }) => {
    return (React.createElement("svg", { viewBox: '0 0 18 18', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.141 4.141 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z", fill: "#4285f4" }),
        React.createElement("path", { d: "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.859-3.048.859-2.344 0-4.328-1.583-5.036-3.71H.957v2.332A8.998 8.998 0 009 18z", fill: "#34a853" }),
        React.createElement("path", { d: "M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957a9.005 9.005 0 000 8.084l3.007-2.332z", fill: "#fbbc05" }),
        React.createElement("path", { d: "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.581C13.463.892 11.426 0 9 0A8.998 8.998 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z", fill: "#ea4335" }),
        React.createElement("path", { fill: "none", d: "M0 0h18v18H0z" })));
};

/** @format */
const Github = ({ style, className }) => {
    return (React.createElement("svg", { viewBox: "0 0 19 18", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M9.228 0A9.228 9.228 0 006.31 17.984c.462.086.63-.2.63-.444 0-.22-.008-.947-.012-1.718-2.567.559-3.109-1.088-3.109-1.088-.42-1.067-1.024-1.35-1.024-1.35-.837-.573.063-.562.063-.562.927.065 1.415.952 1.415.952.823 1.41 2.158 1.002 2.685.766.083-.596.322-1.003.586-1.233-2.05-.234-4.204-1.025-4.204-4.56 0-1.008.36-1.832.95-2.478-.096-.232-.411-1.17.09-2.442 0 0 .775-.248 2.538.946a8.845 8.845 0 012.31-.31 8.868 8.868 0 012.311.31c1.762-1.194 2.536-.946 2.536-.946.502 1.271.186 2.21.09 2.442.592.646.95 1.47.95 2.477 0 3.544-2.16 4.325-4.214 4.553.331.287.626.848.626 1.71 0 1.234-.01 2.227-.01 2.531 0 .246.165.534.633.443a9.229 9.229 0 006.305-8.755A9.228 9.228 0 009.228 0", fill: "#1b1817" }),
        React.createElement("path", { d: "M9.228 0A9.228 9.228 0 006.31 17.984c.462.086.63-.2.63-.444 0-.22-.008-.947-.012-1.718-2.567.559-3.109-1.088-3.109-1.088-.42-1.067-1.024-1.35-1.024-1.35-.837-.573.063-.562.063-.562.927.065 1.415.952 1.415.952.823 1.41 2.158 1.002 2.685.766.083-.596.322-1.003.586-1.233-2.05-.234-4.204-1.025-4.204-4.56 0-1.008.36-1.832.95-2.478-.096-.232-.411-1.17.09-2.442 0 0 .775-.248 2.538.946a8.845 8.845 0 012.31-.31 8.868 8.868 0 012.311.31c1.762-1.194 2.536-.946 2.536-.946.502 1.271.186 2.21.09 2.442.592.646.95 1.47.95 2.477 0 3.544-2.16 4.325-4.214 4.553.331.287.626.848.626 1.71 0 1.234-.01 2.227-.01 2.531 0 .246.165.534.633.443a9.229 9.229 0 006.305-8.755A9.228 9.228 0 009.228 0", fill: "#1b1817" })));
};

/** @format */
const Warning = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.76A6.243 6.243 0 0114.24 8 6.243 6.243 0 018 14.24 6.243 6.243 0 011.76 8 6.243 6.243 0 018 1.76z", fill: iconColor || '#fff' }),
        React.createElement("path", { fill: iconColor || '#fff', d: "M7 3h2v7H7zM7 11h2v2H7z" })));
};

/** @format */
const Tick = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M11.623 5.37a.547.547 0 00-.78-.003l-4.408 4.44L4.96 8.336a.484.484 0 10-.684.684l1.811 1.812c.097.096.227.173.343.173.115 0 .242-.077.338-.17l4.852-4.876a.418.418 0 00.002-.587V5.37z", fill: iconColor || '#fff', fillRule: "nonzero" }),
        React.createElement("path", { d: "M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z", fill: iconColor || '#fff' })));
};

/** @format */
const Cross = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("g", { fill: iconColor || '#fff' },
            React.createElement("path", { d: "M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z" }),
            React.createElement("path", { d: "M8 6.586l2.121-2.122a1.002 1.002 0 011.415 0c.39.391.39 1.024 0 1.415L9.414 8l2.104 2.104a1.025 1.025 0 010 1.449l-.001.001a.974.974 0 01-1.377 0L8 9.414l-2.121 2.122c-.391.39-1.024.39-1.415 0a1.002 1.002 0 010-1.415L6.586 8l-2.14-2.14a.974.974 0 010-1.377l.001-.001a1.026 1.026 0 011.449 0L8 6.586z" }))));
};

/** @format */
const Question = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: Object.assign({ width: '20px', height: '20px' }, style), className: className },
        React.createElement("path", { d: "M2.316 13.629A7.937 7.937 0 01-.017 7.962c0-4.333 3.583-8 8-8 4.416 0 8 3.667 8 8 0 4.417-3.584 8-8 8-2.084 0-4.167-.833-5.667-2.333zM3.4 3.379a6.506 6.506 0 00-1.916 4.583c0 3.584 2.916 6.5 6.5 6.5 3.583 0 6.5-2.916 6.5-6.5 0-3.5-2.917-6.5-6.5-6.5-1.75 0-3.334.667-4.584 1.917zm3.584 9.083c-.167-.166-.25-.416-.25-.75a.9.9 0 01.25-.583c.166-.25.416-.333.666-.333.5 0 .917.416.917.916 0 .334-.083.584-.25.75-.167.167-.417.25-.667.25-.25 0-.5-.083-.666-.25zm.083-2.416a.9.9 0 01-.25-.584c0-.583.25-1.166.583-1.583l.75-.75c.25-.167.417-.333.584-.5.083-.083.166-.25.25-.417a.637.637 0 00.166-.416c0-.334-.166-.667-.416-.834-.25-.25-.584-.416-.917-.333-.333-.083-.75.083-1 .333s-.417.667-.583 1c-.084.5-.334.667-.75.667a.757.757 0 01-.584-.25c-.166-.083-.25-.333-.25-.5 0-.417.167-.833.417-1.167.25-.416.583-.75 1.083-1 .5-.333 1.084-.416 1.667-.416s1.083.083 1.583.333c.417.167.834.5 1.084.917.25.333.333.75.333 1.25 0 .333-.083.583-.167.916-.166.25-.333.5-.5.667-.25.167-.583.5-1.083 1-.083.083-.25.167-.333.333-.084.084-.167.167-.167.25-.083.084-.083.167-.083.25-.084.084-.084.167-.167.417 0 .333-.333.667-.75.667-.167 0-.333-.084-.5-.25z", fill: iconColor || '#fff', fillRule: "nonzero" })));
};

/** @format */
const Issue = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.76A6.243 6.243 0 0114.24 8 6.243 6.243 0 018 14.24 6.243 6.243 0 011.76 8 6.243 6.243 0 018 1.76z", fill: iconColor || '#fff' }),
        React.createElement("path", { fill: iconColor || '#fff', d: "M7 3h2v7H7zM7 11h2v2H7z" })));
};

/** @format */
const Copyright = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z", fill: iconColor || '#fff' }),
        React.createElement("text", { x: 8.277, y: 8.234, fontFamily: "'ArialMT','Arial',sans-serif", fontSize: 12, fill: iconColor || '#fff', transform: "translate(-4.671 4.061)" }, 'C')));
};

/** @format */
const SharedFiles = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M12.145 0H4.691L1.296 3.394v10.047h10.849V0zM4.597 1.181v2.115H2.482l2.115-2.115zm6.785 11.493H2.064V3.812h3.045V.768h6.273v11.906z", fill: iconColor || '#fff', fillRule: "nonzero" }),
        React.createElement("path", { d: "M13.424 1.663a.382.382 0 00-.383-.384.382.382 0 00-.384.384v12.29H2.959a.382.382 0 00-.383.384c0 .213.17.384.383.384h10.465V1.663z", fill: iconColor || '#fff', fillRule: "nonzero" }),
        React.createElement("path", { d: "M14.32 2.559a.382.382 0 00-.384.383v12.29H4.239a.382.382 0 00-.384.384c0 .213.17.384.384.384h10.465V2.942a.382.382 0 00-.384-.383z", fill: iconColor || '#fff', fillRule: "nonzero" }),
        React.createElement("path", { d: "M7.811 5.7a1.273 1.273 0 11.264.435L6.009 7.387a1.266 1.266 0 01.027.774l1.982 1.02a1.273 1.273 0 11-.233.452l-1.982-1.02a1.273 1.273 0 11-.057-1.66L7.81 5.7z", fill: iconColor || '#fff' })));
};

/** @format */
const Favourites = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("g", { fill: iconColor || '#fff' },
            React.createElement("path", { d: "M9.904 16a.456.456 0 00.269-.087l1.885-1.37 1.885 1.37a.457.457 0 00.704-.511l-.718-2.21 1.874-1.3a.457.457 0 00-.26-.833h-2.327l-.722-2.283a.455.455 0 00-.151-.216V3.93l-.128-.133a206.58 206.58 0 01-2.036-2.17A175.311 175.311 0 008.787.141L8.652 0H0v16h9.904zm2.977-4.027h1.201l-.954.662a.457.457 0 00-.174.517l.388 1.194-1.015-.738a.458.458 0 00-.538 0l-1.015.738.388-1.194a.457.457 0 00-.175-.517l-.953-.662h1.201c.2 0 .376-.129.436-.319l.387-1.223.387 1.223c.06.19.236.32.436.32zm-2.06-8.316H8.915V1.61l.595.639c.429.46.891.958 1.313 1.407zM.915.914H8v3.657h3.429v4.818l-.529 1.67H8.573a.457.457 0 00-.26.833l1.874 1.3-.615 1.894H.914V.914z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M6.629 2.286H2.286V6.4h4.343V2.286zm-.915 3.2H3.2V3.2h2.514v2.286z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M2 7.771h8.114v.915H2zM2 10.057h6.514v.914H2zM2 12.343h5.333v.914H2z" }))));
};

/** @format */
const Recent = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("g", { fill: iconColor || '#fff' },
            React.createElement("path", { d: "M1.687 3.54C3.09 1.404 5.476 0 8.179 0 12.495 0 16 3.585 16 8s-3.505 8-7.821 8c-3.139 0-5.848-1.895-7.093-4.626a.794.794 0 01.372-1.044.762.762 0 011.021.38c1 2.195 3.178 3.718 5.7 3.718 3.468 0 6.284-2.88 6.284-6.428s-2.816-6.428-6.284-6.428c-2.145 0-4.04 1.102-5.175 2.781l.568.35c.249.154.392.44.369.736a.785.785 0 01-.478.666l-2.172.898a.754.754 0 01-.685-.056.788.788 0 01-.368-.594L.004 3.97a.793.793 0 01.354-.744.754.754 0 01.808-.008l.52.321z" }),
            React.createElement("path", { d: "M7.468 8.741a.797.797 0 01-.058-.3V5.428c0-.434.344-.786.769-.786.424 0 .768.352.768.786v2.689l1.86 1.901c.3.307.3.805 0 1.112a.756.756 0 01-1.088 0L7.635 8.997a.784.784 0 01-.166-.254l-.001-.002z" }))));
};

/** @format */
const AllFiles = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("g", { fill: iconColor || '#fff' },
            React.createElement("path", { d: "M12.145 0H4.691L1.296 3.394v10.047h10.849V0zM4.597 1.181v2.115H2.482l2.115-2.115zm6.785 11.493H2.064V3.812h3.045V.768h6.273v11.906z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M3.475 5.979H9.97v.767H3.475zM3.475 7.974H9.97v.768H3.475zM3.475 9.966H9.97v.767H3.475z" }),
            React.createElement("path", { d: "M13.424 1.663a.382.382 0 00-.383-.384.382.382 0 00-.384.384v12.29H2.959a.382.382 0 00-.383.384c0 .213.17.384.383.384h10.465V1.663z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M14.32 2.559a.382.382 0 00-.384.383v12.29H4.239a.382.382 0 00-.384.384c0 .213.17.384.384.384h10.465V2.942a.382.382 0 00-.384-.383z", fillRule: "nonzero" }))));
};

/** @format */
const Search = ({ style, className, iconColor }) => {
    return (React.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} icon` },
        React.createElement("path", { d: "M10.054 11.131a6.196 6.196 0 01-3.83 1.318A6.228 6.228 0 010 6.225 6.227 6.227 0 016.225 0a6.228 6.228 0 016.224 6.225 6.196 6.196 0 01-1.318 3.829l4.646 4.646a.762.762 0 01-1.077 1.077l-4.646-4.646zm-3.83-9.607a4.703 4.703 0 014.702 4.7 4.703 4.703 0 01-4.701 4.702 4.703 4.703 0 01-4.701-4.701c0-2.595 2.106-4.701 4.7-4.701z", fill: iconColor || '#fff' })));
};

/** @format */
// eslint-disable-next-line import/prefer-default-export
const TilesContext = React.createContext({
    selectedTile: 0,
    setSelectedTile: () => null,
});

/** @format */
const Tile = ({ label, icon, children, index }) => {
    return (React.createElement(TilesContext.Consumer, null, (tilesInfo) => (React.createElement(React.Fragment, null,
        React.createElement("div", { role: 'row', className: 'core-tile-list-tile', style: {
                backgroundColor: tilesInfo.selectedTile === index
                    ? '#EDF3FD'
                    : '#F9F9F9',
            }, onClick: () => tilesInfo.setSelectedTile(index || 0) },
            React.createElement("div", null,
                icon || null,
                label),
            React.createElement("div", null,
                React.createElement(Lock, { disabled: false, locked: false }))),
        children))));
};

var css_248z$3 = ".core-tile-list-tile {\n    height: 40px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 12px;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    font-size: 16px;\n    text-transform: capitalize;\n    font-weight: 400;\n}\n\n.core-tile-list-tile:hover {\n    cursor: pointer;\n}\n\n.core-tile-list-tile div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.core-tile-list-tile-segment {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.core-lock:hover {\n    cursor: pointer;\n}\n";
styleInject(css_248z$3);

/** @format */
const TileList = ({ children }) => {
    const [selectedTile, setSelectedTile] = React.useState(0);
    const newChildren = () => {
        if (!Array.isArray(children)) {
            return React.createElement(Tile, Object.assign({ index: 0 }, children.props));
        }
        return children.map(({ props }, index) => (React.createElement(Tile, Object.assign({ index: index }, props))));
    };
    return (React.createElement(TilesContext.Provider, { value: {
            selectedTile,
            setSelectedTile,
        } },
        React.createElement("div", null, newChildren())));
};

var css_248z$4 = ".core-text-box {\n    justify-content: flex-start;\n    margin: 10px;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    display: flex;\n    font-size: 13px;\n    flex-wrap: wrap;\n    text-transform: capitalize;\n\n}\n\n.core-text-box-label {\n    display: flex;\n    flex-direction: row;\n    margin-right: 5px;\n    font-size: 13px;\n}\n\n.core-text-box-input-units {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0 10px;\n}\n\n.core-text-box-input {\n    padding-top: 0;\n    padding-bottom: 0;\n    align-items: center;\n    border: none;\n    font-size: 13px;\n    margin-left: 10px;\n}\n\n.core-text-box-input:focus {\n    outline: none;\n}\n\n.core-required-icon {\n    color: #FF0000;\n    margin-left: 3px;\n}\n";
styleInject(css_248z$4);

/** @format */
const TextBox = ({ label, prefixComponent, suffixComponent, filter, placeholder, size, variant, required, disabled, maxLength, units, onChange, className, style, value: newValue, type, }) => {
    const [value, setValue] = React.useState(newValue);
    React.useEffect(() => setValue(newValue), [newValue]);
    function handleChange(evt) {
        const isFiltered = filter ? filter(evt.target.value) : true;
        if (!isFiltered)
            return;
        setValue(evt.target.value);
        if (!onChange)
            return;
        onChange(evt.target.value);
    }
    const iconStyles = (component) => ({
        display: !component ? 'none' : 'block',
        height: size === 'small' ? '10x' : '16px',
        width: size === 'small' ? '12x' : '20px',
    });
    return (React.createElement("div", { className: `core-text-box ${className || ''}`, style: Object.assign({ flexDirection: variant === 'filled' ? 'row' : 'column', alignItems: variant === 'filled' ? 'center' : 'start' }, style) },
        label !== '' ? (React.createElement("div", { className: 'core-text-box-label' },
            label,
            required ? (React.createElement("div", { className: 'core-required-icon' }, "*")) : null)) : null,
        React.createElement("div", { className: 'core-text-box-input-units', style: {
                color: disabled ? '#8C8C8C' : '#000000',
                height: size === 'small' ? '34px' : '44px',
                borderRadius: variant === 'outlined' ? '5px' : '0',
                border: variant === 'outlined' ? 'solid 2px #057EFF' : 'none',
                backgroundColor: variant === 'filled' ? '#F3F3F3' : 'transparent',
            } },
            React.createElement("div", { style: iconStyles(prefixComponent) }, prefixComponent),
            React.createElement("input", { type: type, value: value, className: 'core-text-box-input', placeholder: placeholder, style: {
                    width: size === 'small' ? '30px' : '320px',
                    height: size === 'small' ? '34px' : '44px',
                    cursor: disabled ? 'not-allowed' : 'text',
                    backgroundColor: variant === 'filled' ? '#F3F3F3' : 'transparent',
                }, onChange: (evt) => handleChange(evt), maxLength: maxLength || -1, disabled: disabled }),
            units ? (React.createElement("div", { style: {
                    marginLeft: '5px',
                } }, units)) : null,
            React.createElement("div", { style: iconStyles(suffixComponent) }, suffixComponent))));
};
TextBox.defaultProps = {
    units: '',
    disabled: false,
    label: '',
    size: 'small',
    variant: 'filled',
    onChange: () => null,
    value: '',
};

exports.AllFiles = AllFiles;
exports.Button = Button;
exports.Copyright = Copyright;
exports.Cross = Cross;
exports.Favourites = Favourites;
exports.Github = Github;
exports.Google = Google;
exports.Issue = Issue;
exports.Key = Key;
exports.Lock = Lock;
exports.Mail = Mail;
exports.Question = Question;
exports.Recent = Recent;
exports.Room = Room;
exports.Search = Search;
exports.SharedFiles = SharedFiles;
exports.TextBox = TextBox;
exports.Tick = Tick;
exports.Tickbox = Tickbox;
exports.Tile = Tile;
exports.TileList = TileList;
exports.Warning = Warning;
//# sourceMappingURL=index.js.map
