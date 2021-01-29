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

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght500;700&display=swap');\n\n.button {\n    text-transform: capitalize;\n    font-family: 'IBM Plex Sans', sans-serif;\n    padding: 5px 25px;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.button:hover {\n    cursor: pointer;\n}\n";
styleInject(css_248z);

/** @format */
const Button = ({ label, type, variant, onClick, style, className, }) => {
    const primaryColour = () => {
        switch (type) {
            case 'primary':
                return '#057AFF';
            case 'secondary':
                return 'white';
            case 'tertiary':
                return 'black';
            default:
                return 'black';
        }
    };
    const secondaryColour = () => {
        switch (type) {
            case 'primary':
                return 'white';
            case 'secondary':
                return '#057AFF';
            case 'tertiary':
                return 'white';
            default:
                return 'white';
        }
    };
    return (React.createElement("button", { type: "button", className: `button ${className}`, style: Object.assign({ border: variant === 'outlined'
                ? `solid 2px ${primaryColour()}`
                : 'none', backgroundColor: variant === 'contained' ? primaryColour() : 'transparent', color: variant === 'contained'
                ? secondaryColour()
                : primaryColour() }, style), onClick: () => {
            if (!onClick)
                return;
            onClick();
        } }, label));
};
Button.defaultProps = {
    variant: 'outlined',
    type: 'primary',
    label: 'test',
    onClick: () => { },
};

var css_248z$1 = ".tick-box {\n    height: 18px;\n}\n\n.tick-box:hover {\n    cursor: pointer;\n}\n";
styleInject(css_248z$1);

/** @format */
const Tickbox = ({ ticked, onChange, className, style }) => {
    const [isTicked, setIsTicked] = React.useState(ticked);
    React.useEffect(() => setIsTicked(ticked), [ticked]);
    return (React.createElement("svg", { className: `tick-box ${className}`, onClick: () => {
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

var css_248z$2 = ".tile-list-tile {\n    height: 40px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 12px;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    font-size: 16px;\n    text-transform: capitalize;\n    font-weight: 400;\n}\n\n.tile-list-tile:hover {\n    cursor: pointer;\n}\n\n.tile-list-tile div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.tile-list-tile-segment {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.lock:hover {\n    cursor: pointer;\n}\n";
styleInject(css_248z$2);

/** @format */
const Lock = ({ locked, style, disabled, iconColor, onChange, className, }) => {
    const [isLocked, setIsLocked] = React.useState(locked);
    React.useEffect(() => setIsLocked(locked), [locked]);
    return (React.createElement("svg", { style: Object.assign({ height: '20px' }, style), viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, className: `lock ${className}`, onClick: () => {
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
    return (React.createElement("svg", { viewBox: " 0 19 19", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, className: className, style: Object.assign({ height: '22px', marginRight: '8px' }, style) },
        React.createElement("path", { d: "M17.491 5.468a.538.538 0 00-.203.039l-.092.046-6.89 3.574-.156.08s-.002 0-.002.002a1.017 1.017 0 00-.504.86v7.468c0 .257.227.464.51.464.084 0 .168-.02.244-.056l.02-.012 7.021-3.724.01-.006c.332-.18.553-.512.553-.888V5.93c0-.255-.23-.462-.51-.462z", fill: "#6f7b91", fillRule: "nonzero" }),
        React.createElement("path", { d: "M15.554 14.519a.423.423 0 01-.228.368l-.005.002-2.909 1.544-.008.004a.23.23 0 01-.101.024c-.118 0-.212-.086-.212-.193v-5.223c0-.149.083-.28.21-.357l.065-.034 2.854-1.48.038-.02a.223.223 0 01.085-.016c.116 0 .211.086.211.192v5.189z", fill: "#a4abba", fillRule: "nonzero" }),
        React.createElement("path", { d: "M16.968 3.477L9.668.193S9.237 0 9 0c-.238 0-.664.193-.664.193L1.03 3.477s-.321.132-.321.38c0 .264.333.463.333.463L8.38 8.192l.116.06c.152.067.325.106.506.106.183 0 .358-.039.512-.109l.102-.052 7.349-3.88s.301-.161.301-.46c0-.26-.297-.38-.297-.38zM7.855 9.209l-.16-.082L.805 5.553l-.092-.046a.528.528 0 00-.203-.039c-.282 0-.51.207-.51.462v7.385c0 .377.22.707.551.888l.009.006 7.02 3.724a.543.543 0 00.267.068c.281 0 .51-.207.51-.464V10.07c0-.359-.2-.674-.503-.861z", fill: "#6f7b91", fillRule: "nonzero" })));
};
Room.defaultProps = {
    style: {},
};

/** @format */
function Mail({ iconColor, style, className }) {
    return (React.createElement("svg", { viewBox: "0 0 20 17", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, style: Object.assign({ height: '20px' }, style), className: className },
        React.createElement("path", { d: "M.913.002H.909C.41.002 0 .41 0 .91v14.545c0 .5.41.91.91.91H19.09c.499 0 .909-.41.909-.91V.911c0-.5-.41-.91-.91-.91H.914zM3.268 1.82h13.487l-6.75 6.055L3.268 1.82zm-1.45 1.146l7.576 6.8c.343.309.87.309 1.214 0l7.575-6.782v11.563H1.817V2.966z", fill: iconColor || '#bebebe', fillRule: "nonzero" })));
}

/** @format */
const Key = ({ iconColor, style, className }) => {
    return (React.createElement("svg", { viewBox: "0 0 21 21", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, style: Object.assign({ height: '20px' }, style), className: className },
        React.createElement("path", { d: "M20.024.36v3.575a.36.36 0 01-.358.358h-2.503v2.503a.36.36 0 01-.358.357h-2.503v2.504a.357.357 0 01-.103.253l-1.652 1.652c.216.653.326 1.337.326 2.025 0 3.53-2.905 6.436-6.436 6.436S.001 17.118.001 13.587s2.905-6.436 6.436-6.436c.69 0 1.375.11 2.03.328l7.37-7.373a.357.357 0 01.253-.104h3.576a.36.36 0 01.358.357zm-.716 3.218V.718h-3.071L8.813 8.143a.358.358 0 01-.379.082 5.724 5.724 0 00-1.996-.36c-3.139 0-5.722 2.583-5.722 5.722 0 3.138 2.583 5.72 5.722 5.72 3.138 0 5.721-2.582 5.721-5.72 0-.682-.122-1.358-.36-1.997a.358.358 0 01.083-.375l1.705-1.706V6.796a.36.36 0 01.358-.358h2.503V3.935a.36.36 0 01.357-.357h2.503z", fill: iconColor || '#bebebe', fillRule: "nonzero" }),
        React.createElement("path", { d: "M9.194 13.661a2.515 2.515 0 01-2.503 2.503 2.515 2.515 0 01-2.503-2.503 2.515 2.515 0 012.503-2.503 2.515 2.515 0 012.503 2.503zm-4.29 0c0 .98.806 1.788 1.787 1.788.981 0 1.788-.807 1.788-1.788 0-.98-.807-1.788-1.788-1.788-.98 0-1.788.807-1.788 1.788z", fill: iconColor || '#bebebe', fillRule: "nonzero" })));
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
        React.createElement("div", { role: 'row', className: 'tile-list-tile', style: {
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

var css_248z$3 = ".text-box {\n    justify-content: flex-start;\n    margin: 10px;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    display: flex;\n    font-size: 13px;\n    flex-wrap: wrap;\n    text-transform: capitalize;\n}\n\n.text-box-label {\n    display: flex;\n    flex-direction: row;\n    margin-right: 5px;\n    font-size: 13px;\n}\n\n.text-box-input-units {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-right: 5px;\n}\n\n.text-box-input {\n    padding-left: 10px;\n    padding-top: 0;\n    padding-bottom: 0;\n    align-items: center;\n    border: none;\n    font-size: 13px;\n}\n\n.text-box-input:focus {\n    outline: none;\n}\n\n.required-icon {\n    color: #FF0000;\n    margin-left: 3px;\n}\n";
styleInject(css_248z$3);

/** @format */
const TextBox = ({ label, prefixComponent, suffixComponent, filter, placeholder, size, variant, required, disabled, maxLength, units, onChange, className, style, }) => {
    const [value, setValue] = React.useState('');
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
        marginLeft: '10px',
    });
    return (React.createElement("div", { className: `text-box ${className}`, style: Object.assign({ flexDirection: variant === 'filled' ? 'row' : 'column', alignItems: variant === 'filled' ? 'center' : 'start' }, style) },
        label !== '' ? (React.createElement("div", { className: 'text-box-label' },
            label,
            required ? React.createElement("div", { className: 'required-icon' }, "*") : null)) : null,
        React.createElement("div", { className: 'text-box-input-units', style: {
                color: disabled ? '#8C8C8C' : '#000000',
                height: size === 'small' ? '34px' : '44px',
                borderRadius: variant === 'outlined' ? '5px' : '0',
                border: variant === 'outlined' ? 'solid 2px #057EFF' : 'none',
            } },
            React.createElement("div", { style: iconStyles(prefixComponent) }, prefixComponent),
            React.createElement("input", { value: value, className: 'text-box-input', placeholder: placeholder, style: {
                    width: size === 'small' ? '30px' : '320px',
                    height: size === 'small' ? '34px' : '44px',
                    cursor: disabled ? 'not-allowed' : 'text',
                    backgroundColor: variant === 'filled' ? '#F3F3F3' : 'transparent',
                }, onChange: (evt) => handleChange(evt), maxLength: maxLength || -1, disabled: disabled }),
            React.createElement("div", { style: iconStyles(suffixComponent) }, suffixComponent),
            React.createElement("div", { style: {
                    display: !units ? 'none' : 'block',
                    marginLeft: '5px',
                } }, units))));
};
TextBox.defaultProps = {
    units: '',
    disabled: false,
    label: '',
    size: 'small',
    variant: 'filled',
    onChange: () => null,
};

exports.Button = Button;
exports.Key = Key;
exports.Lock = Lock;
exports.Mail = Mail;
exports.Room = Room;
exports.TextBox = TextBox;
exports.Tickbox = Tickbox;
exports.TileList = TileList;
//# sourceMappingURL=index.js.map
