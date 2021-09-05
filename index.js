'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

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

var css_248z$9 = ".Button-module_buttonContainer__9w-Pk {\n    position: relative;\n    z-index: 5;\n    width: fit-content;\n    border-radius: 5px;\n}\n\n.Button-module_button__2jq1t {\n    user-select: none;\n    text-transform: capitalize;\n    font-family: 'IBM Plex Sans', sans-serif;\n    transition: color 0.5s, background-color 0.5s, border 0.5s;\n    cursor: pointer;\n    font-size: 18px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.Button-module_buttonIcon__2pm5e {\n    padding: 4px;\n    border-radius: 7px;\n    display: flex;\n    margin-right: 5px;\n}\n\n.Button-module_filter__1pv_e {\n    z-index: 10;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 0.5;\n    top: 0;\n    left: 0;\n}\n";
var styles$9 = {"buttonContainer":"Button-module_buttonContainer__9w-Pk","button":"Button-module_button__2jq1t","buttonIcon":"Button-module_buttonIcon__2pm5e","filter":"Button-module_filter__1pv_e"};
styleInject(css_248z$9);

const Button = ({ btnType = 'button', variant = 'contained', btnColor = 'primary', btnStyles = {}, btnIconBackgroundColor = 'white', disabled = false, btnIcon, children, onClick, style, className, id, }) => {
    const [hovered, setHovered] = React.useState(false);
    const mainColour = () => {
        switch (btnColor) {
            case 'primary':
                return '#057AFF';
            case 'secondary':
                return 'black';
            default:
                return btnColor;
        }
    };
    const backgroundColour = () => {
        switch (variant) {
            case 'contained':
                return hovered ? 'white' : mainColour();
            case 'outlined':
                return hovered ? mainColour() : 'white';
            case 'text':
                return 'transparent';
            default:
                return hovered ? 'white' : mainColour();
        }
    };
    const border = () => {
        switch (variant) {
            case 'contained':
                return hovered
                    ? `solid 2px ${mainColour()}`
                    : 'solid 2px transparent';
            case 'outlined':
                return `solid 2px ${mainColour()}`;
            case 'text':
                return 'none';
            default:
                return hovered
                    ? `solid 2px ${mainColour()}`
                    : 'solid 2px transparent';
        }
    };
    const textColor = () => {
        switch (variant) {
            case 'contained':
                return hovered ? mainColour() : 'white';
            case 'outlined':
                return hovered ? 'white' : mainColour();
            case 'text':
                return mainColour();
            default:
                return hovered ? mainColour() : 'white';
        }
    };
    const padding = () => children && children.toString().length > 14 ? '10px' : '5px';
    return (React__default['default'].createElement("div", { className: `${styles$9.buttonContainer} ${className}`, style: style },
        React__default['default'].createElement("button", { id: id || 'button', 
            // eslint-disable-next-line react/button-has-type
            type: btnType || 'button', onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), className: styles$9.button, onClick: onClick, style: Object.assign({ backgroundColor: backgroundColour(), color: textColor(), border: border(), padding: variant === 'text' ? 'unset' : `${padding()} 20px` }, btnStyles) },
            btnIcon ? (React__default['default'].createElement("div", { id: 'icon-container', className: styles$9.buttonIcon, style: {
                    backgroundColor: btnIconBackgroundColor || 'white',
                } }, btnIcon)) : null,
            children),
        disabled ? React__default['default'].createElement("span", { id: 'filter', className: styles$9.filter }) : null));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const Layout = (_a) => {
    var { center = false, orientation = 'row', style = {}, children, elemRef } = _a, elementProps = __rest(_a, ["center", "orientation", "style", "children", "elemRef"]);
    const styles = () => {
        const basicStyles = {
            display: 'flex',
            flexDirection: orientation,
            alignItems: 'center',
            justifyContent: 'center',
        };
        if (!center) {
            delete basicStyles.alignItems;
            delete basicStyles.justifyContent;
        }
        return basicStyles;
    };
    return (React__default['default'].createElement("div", Object.assign({}, elementProps, { ref: elemRef, style: Object.assign(Object.assign({}, styles()), style) }), children));
};

var css_248z$8 = ".TabMenu-module_tabMenu__2DRM4 {\n    position: relative;\n    width: 100%;\n    height: 40px;\n    display: flex;\n    font-size: 15px;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    flex: 1 1 0;\n}\n\n.TabMenu-module_tab__ZRll6 {\n    position: relative;\n    user-select: none;\n    z-index: 1;\n    height: 40px;\n    cursor: pointer;\n}\n\n.TabMenu-module_tabHorizontal__1AP08 {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n}\n\n.TabMenu-module_tabIndicator__3IvmJ {\n    position: absolute;\n    z-index: 10;\n    transition: left 0.2s ease-in-out, top 0.2s ease-in-out;\n}\n\n.TabMenu-module_horizontalShadow__3wOjp {\n    width: 100%;\n    height: 2px;\n}\n\n.TabMenu-module_verticalShadow__1cgU2 {\n    height: 100%;\n    width: 2px;\n    left: 0;\n}\n\n.TabMenu-module_tabSelectedShadow__1eEx3 {\n    position: absolute;\n    bottom: 0;\n    background-color: #e0e0e0;\n    transition: left 0.2s ease-in-out, top 0.2s ease-in-out;\n}\n\n.TabMenu-module_tabSelectedBackground__1BHeU {\n    position: absolute;\n    z-index: 0;\n    transition: left .2s ease-in-out, top .2s ease-in-out;\n}\n";
var styles$8 = {"tabMenu":"TabMenu-module_tabMenu__2DRM4","tab":"TabMenu-module_tab__ZRll6","tabHorizontal":"TabMenu-module_tabHorizontal__1AP08","tabIndicator":"TabMenu-module_tabIndicator__3IvmJ","horizontalShadow":"TabMenu-module_horizontalShadow__3wOjp","verticalShadow":"TabMenu-module_verticalShadow__1cgU2","tabSelectedShadow":"TabMenu-module_tabSelectedShadow__1eEx3","tabSelectedBackground":"TabMenu-module_tabSelectedBackground__1BHeU"};
styleInject(css_248z$8);

const Tab = ({ orientation = 'row', showNotSelectedShadow = true, children, onClick, }) => (React__default['default'].createElement(Layout, { center: true, orientation: orientation, className: `${styles$8.tab} ${orientation === 'row' ? styles$8.tabHorizontal : ''}`, style: { paddingLeft: orientation === 'row' ? 'unset' : '20px' }, onClick: () => {
        if (onClick)
            onClick();
    } },
    children,
    React__default['default'].createElement("div", { className: `${styles$8.tabSelectedShadow} ${orientation === 'row'
            ? styles$8.horizontalShadow
            : styles$8.verticalShadow}`, style: {
            display: showNotSelectedShadow ? 'block' : 'none',
        } })));

const Tabs = ({ showNotSelectedShadow = true, tabNotSelectedColor = '', tabSelectedColor = '', tabIndicatorColor = '', tabFontColor = 'black', onChange, children, orientation, width, }) => {
    var _a;
    const childrenArray = React.useMemo(() => (Array.isArray(children) ? children : [children]), [children]);
    const [selectedIndicatorWidth, setSelectedIndicatorWidth] = React.useState(0);
    const [selectedTab, setSelectedTab] = React.useState(0);
    const menu = React.useRef(null);
    React.useEffect(() => {
        var _a;
        setSelectedIndicatorWidth((((_a = menu.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0) /
            (Array.isArray(children) ? children.length : 1));
    }, [(_a = menu.current) === null || _a === void 0 ? void 0 : _a.clientWidth, children]);
    React.useEffect(() => {
        childrenArray.forEach(child => {
            if (child.type !==
                (React__default['default'].createElement(Tab, null,
                    React__default['default'].createElement(React__default['default'].Fragment, null))).type) {
                throw new Error('children of TabMenu must be of type Tab');
            }
        });
    }, [childrenArray]);
    return (React__default['default'].createElement(Layout, { orientation: orientation, elemRef: menu, className: styles$8.tabMenu, style: {
            width: width || '100%',
            color: tabFontColor,
            backgroundColor: tabNotSelectedColor || 'transparent',
        } },
        childrenArray.map((child, index) => {
            var _a;
            return (React__default['default'].createElement(Tab, { orientation: orientation, showNotSelectedShadow: showNotSelectedShadow, key: `${((_a = child.props.children) === null || _a === void 0 ? void 0 : _a.toString()) || 'invalid'}-loop`, onClick: () => {
                    setSelectedTab(index);
                    if (onChange)
                        onChange(index);
                } }, child.props.children));
        }),
        React__default['default'].createElement("div", { key: 'indicator', id: 'indicator', className: styles$8.tabIndicator, style: {
                backgroundColor: tabIndicatorColor || '#057AFF',
                width: orientation === 'row'
                    ? `calc( 100% / ${childrenArray.length})`
                    : '2px',
                height: orientation === 'row'
                    ? '2px'
                    : `calc( 100% / ${childrenArray.length})`,
                top: orientation === 'row'
                    ? `calc( 100% - 2px )`
                    : selectedTab * 40,
                left: orientation === 'row'
                    ? selectedTab * selectedIndicatorWidth
                    : 0,
            } }),
        React__default['default'].createElement("div", { key: 'selectedTab', id: 'selectedTab', className: styles$8.tabSelectedBackground, style: {
                height: orientation === 'row' ? '100%' : '40px',
                width: orientation === 'row' ? selectedIndicatorWidth : '100%',
                top: orientation === 'row' ? 0 : selectedTab * 40,
                left: orientation === 'row'
                    ? selectedTab * selectedIndicatorWidth
                    : 0,
                backgroundColor: tabSelectedColor || '#F4F4F4',
            } })));
};

const List = ({ children, width = '100%', listControls, }) => {
    const childrenArray = React.useMemo(() => (Array.isArray(children) ? children : [children]), [children]);
    React.useEffect(() => {
        childrenArray.forEach(child => {
            if (child.type.name !== 'ListItem' &&
                child.type.name !== 'ListGroup') {
                throw new Error('Children must be of type ListItem');
            }
        });
    }, [childrenArray]);
    const newChildren = React.useMemo(() => childrenArray.map(child => {
        if (child.type.name === 'ListGroup') {
            return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { groupControls: child.props.groupControls ||
                    listControls ||
                    undefined }));
        }
        return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { controls: child.props.controls || listControls || undefined }));
    }), [childrenArray, listControls]);
    return (React__default['default'].createElement(Layout, { style: { width }, orientation: 'column' }, newChildren));
};

var css_248z$7 = ".MfaInput-module_mfaInput__2R2AI {\n    margin: auto;\n    width: 240px;\n    justify-content: space-between;\n}\n\n.MfaInput-module_mfaInput__2R2AI > input {\n    box-sizing: border-box;\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    border: solid 1px #055eff;\n    border-radius: 5px;\n    background-color: #fdfdfd;\n}\n";
var styles$7 = {"mfaInput":"MfaInput-module_mfaInput__2R2AI"};
styleInject(css_248z$7);

const MfaInput = ({ id, value, nextFocusElementId, onChange, }) => {
    const [code, setCode] = React.useState(value ? value.split('') : []);
    const onChangeCallback = React.useCallback(onChange, [onChange]);
    const inputs = Array.from(Array(6)).map(() => React.createRef());
    React.useEffect(() => {
        setCode(value ? value.split('') : []);
        onChangeCallback(value || '');
    }, [value, onChangeCallback]);
    const changeCharacter = (index, newValue) => {
        const newCode = [...code];
        newCode[index] = newValue;
        setCode(newCode);
        onChange(newCode.join(''));
    };
    const isNum = (inputValue) => Number.isNaN(Number(inputValue)) ? '' : inputValue;
    const onPaste = (event) => {
        if (event.clipboardData) {
            const pastedContent = event.clipboardData.getData('Text').split('');
            const numbersChecked = pastedContent.map(element => Number.isNaN(Number(element)) ? '' : element);
            setCode(numbersChecked);
            onChange(numbersChecked.join(''));
            if (nextFocusElementId) {
                const nextElement = document.getElementById(nextFocusElementId);
                if (!nextElement) {
                    throw new Error('Next Focus Element not found');
                }
                nextElement.focus();
            }
        }
    };
    const onKeyDown = (e, index) => {
        var _a, _b, _c, _d;
        switch (e.key) {
            case 'Backspace':
            case 'Delete':
                if (index !== 0) {
                    (_a = inputs[index - 1].current) === null || _a === void 0 ? void 0 : _a.focus();
                }
                changeCharacter(index, '');
                break;
            case 'ArrowLeft':
                (_b = inputs[index - 1].current) === null || _b === void 0 ? void 0 : _b.focus();
                break;
            case 'ArrowRight':
                (_c = inputs[index + 1].current) === null || _c === void 0 ? void 0 : _c.focus();
                break;
            default: {
                const newValue = isNum(e.key);
                if (newValue === '')
                    return;
                changeCharacter(index, newValue);
                if (index < 5) {
                    (_d = inputs[index + 1].current) === null || _d === void 0 ? void 0 : _d.focus();
                }
                else if (nextFocusElementId) {
                    const nextElement = document.getElementById(nextFocusElementId);
                    if (!nextElement) {
                        throw new Error('Next Focus Element not found');
                    }
                    nextElement.focus();
                }
            }
        }
    };
    return (React__default['default'].createElement(Layout, { className: styles$7.mfaInput, orientation: 'row' }, Array.from(Array(6)).map((element, index) => (React__default['default'].createElement("input", { ref: inputs[index], onKeyDown: e => onKeyDown(e, index), onPaste: event => onPaste(event), value: code[index] || '', maxLength: 1, id: `${id}-mfa-input-${index}`, 
        /* eslint-disable-next-line react/no-array-index-key */
        key: `${id}-mfa-input-${index}`, onChange: () => null })))));
};

var css_248z$6 = ".List-module_listGroup__1MUKV {\n    overflow-y: hidden;\n    transition: height linear 0.1s;\n}\n\n.List-module_listItem__2fPcU {\n    user-select: none;\n    height: 40px;\n    align-items: center;\n    padding: 0 30px;\n    font-size: 15px;\n    line-height: 40px;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    justify-content: space-between;\n}\n\n.List-module_listItem__2fPcU:hover {\n    cursor: pointer;\n}\n\n.List-module_listItemChildren__giVq7 {\n    display: flex;\n    line-height: 40px;\n    align-items: center;\n    height: 40px;\n}\n\n.List-module_listItem__2fPcU * {\n    margin: 0 10px;\n}\n\n.List-module_endFragment__2e6n3 {\n    display: flex;\n    align-items: center;\n}\n";
var styles$6 = {"listGroup":"List-module_listGroup__1MUKV","listItem":"List-module_listItem__2fPcU","listItemChildren":"List-module_listItemChildren__giVq7","endFragment":"List-module_endFragment__2e6n3"};
styleInject(css_248z$6);

const ListItem = ({ child = false, children, controls, dropdown, selected, onClick, }) => {
    const [hovered, setHovered] = React.useState(false);
    return (React__default['default'].createElement(Layout, { onClick: () => {
            if (onClick)
                onClick();
        }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), orientation: 'row', style: {
            paddingLeft: child ? '40px' : '30px',
            backgroundColor: selected
                ? '#EDF3FD'
                : hovered
                    ? '#F4F4F4'
                    : '#F9F9F9',
        }, className: styles$6.listItem },
        React__default['default'].createElement("div", { className: styles$6.listItemChildren }, children),
        React__default['default'].createElement("div", { className: styles$6.endFragment },
            controls ? React__default['default'].createElement(React__default['default'].Fragment, null,
                " ",
                controls,
                " ") : null,
            dropdown !== undefined ? (React__default['default'].createElement("svg", { className: 'dropdown-test', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'black', viewBox: '0 0 16 16', style: {
                    transform: dropdown ? 'rotate(180deg)' : 'none',
                } },
                React__default['default'].createElement("path", { d: 'M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z' }))) : (React__default['default'].createElement("div", { style: { height: '16px', width: '16px' } })))));
};

const ListGroup = ({ listItem, children, groupControls, }) => {
    const [groupOpen, setGroupOpen] = React.useState(false);
    const childrenArray = React.useMemo(() => (Array.isArray(children) ? children : [children]), [children]);
    React.useEffect(() => {
        if (listItem.type.name !== 'ListItem') {
            throw new Error('The listItem prop must be of type listItem');
        }
    }, [listItem]);
    React.useEffect(() => {
        childrenArray.forEach(child => {
            if (child.type.name !== 'ListItem') {
                throw new Error('Children must be of type ListItem');
            }
        });
    }, [childrenArray]);
    const items = React.useMemo(() => childrenArray.map(child => React.cloneElement(child, {
        child: true,
        dropdown: undefined,
        controls: child.props.controls || groupControls,
    })), [childrenArray, groupControls]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React.cloneElement(listItem, Object.assign(Object.assign({}, listItem.props), { onClick: () => {
                setGroupOpen(!groupOpen);
                if (listItem.props.onClick)
                    listItem.props.onClick();
            }, controls: groupControls, dropdown: groupOpen })),
        React__default['default'].createElement("div", { className: styles$6.listGroup, style: {
                height: groupOpen ? `${items.length * 40}px` : '0px',
            } },
            React__default['default'].createElement(List, null, items))));
};

var css_248z$5 = ".TextBox-module_textBoxContainer__2ZTEV {\n    user-select: none;\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    font-size: 13px;\n    flex-wrap: wrap;\n    text-transform: capitalize;\n}\n\n.TextBox-module_textBoxLabel__33lnE {\n    margin: 0;\n    font-size: 13px;\n}\n\n.TextBox-module_requiredIcon__25JqO {\n    display: inline-block;\n    color: #ff0000;\n    margin-left: 3px;\n}\n\n.TextBox-module_icon__3Wd1V {\n    margin-left: 7px;\n    height: 20px;\n    width: 20px;\n}\n\n.TextBox-module_textBox__DqL25 {\n    align-items: center;\n    width: 100%;\n}\n\n.TextBox-module_textBoxInput__3gia0 {\n    border: none;\n    font-size: 13px;\n    padding: 0 10px;\n    width: 100%;\n}\n\n.TextBox-module_textBoxInput__3gia0:focus {\n    outline: none;\n}\n\n.TextBox-module_textBoxUnits__1BmOO {\n    display: flex;\n    padding-right: 10px;\n    height: 100%;\n    vertical-align: center;\n    align-items: center;\n}\n\n.TextBox-module_suffix__3DPoD {\n    margin-right: 10px;\n    height: 20px;\n    width: 20px;\n}\n";
var styles$5 = {"textBoxContainer":"TextBox-module_textBoxContainer__2ZTEV","textBoxLabel":"TextBox-module_textBoxLabel__33lnE","requiredIcon":"TextBox-module_requiredIcon__25JqO","icon":"TextBox-module_icon__3Wd1V","textBox":"TextBox-module_textBox__DqL25","textBoxInput":"TextBox-module_textBoxInput__3gia0","textBoxUnits":"TextBox-module_textBoxUnits__1BmOO","suffix":"TextBox-module_suffix__3DPoD"};
styleInject(css_248z$5);

const TextBox = ({ label = '', variant = 'outlined', size = variant === 'filled' ? 'small' : 'large', disabled = false, outLineColor = '#057EFF', value: newValue = '', maxLength, width, height, prefixComponent, required, type, placeholder, filter, onChange, inputStyle, suffixComponent, units, }) => {
    const [value, setValue] = React.useState(newValue);
    React.useEffect(() => setValue(newValue), [newValue]);
    const minWidth = () => (maxLength || 4) * 8 + 70;
    const calcWidth = () => {
        if (width)
            return `${Math.max(minWidth(), width)}px`;
        switch (size) {
            case 'small':
                return `${minWidth()}px`;
            case 'large':
            default:
                return `${Math.max(minWidth(), 320)}px`;
        }
    };
    const calcHeight = () => {
        if (height)
            return `${height}px`;
        switch (size) {
            case 'small':
                return '34px';
            case 'large':
            default:
                return '44px';
        }
    };
    const handleChange = (evt) => {
        const passesFilter = filter ? filter(evt.target.value) : true;
        if (!passesFilter)
            return;
        setValue(evt.target.value);
        if (onChange)
            onChange(evt.target.value);
    };
    return (React__default['default'].createElement(Layout, { orientation: 'column', className: styles$5.textBoxContainer, style: { width: calcWidth() } },
        label || required ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("div", { className: styles$5.textBoxLabel },
                label,
                required ? (React__default['default'].createElement("p", { className: `${styles$5.requiredIcon} ${styles$5.textBoxLabel}` }, "*")) : null))) : null,
        React__default['default'].createElement(Layout, { className: styles$5.textBox, orientation: 'row', style: {
                color: disabled ? '#8C8C8C' : '#000000',
                borderRadius: variant === 'outlined' ? '5px' : '0',
                height: calcHeight(),
                border: variant === 'outlined'
                    ? `solid 2px ${outLineColor}`
                    : 'none',
            } },
            prefixComponent ? (React__default['default'].createElement("div", { className: styles$5.icon, style: {
                    marginLeft: '7px',
                } }, prefixComponent)) : null,
            React__default['default'].createElement("input", { className: styles$5.textBoxInput, type: type, placeholder: placeholder, style: Object.assign({ height: calcHeight(), lineHeight: calcHeight(), cursor: disabled ? 'not-allowed' : 'text', backgroundColor: variant === 'filled' ? '#F3F3F3' : 'transparent' }, inputStyle), value: value, maxLength: maxLength || -1, onChange: handleChange }),
            units ? (React__default['default'].createElement("div", { className: `${styles$5.textBoxUnits} unit-comp`, style: {
                    backgroundColor: variant === 'filled'
                        ? '#F3F3F3'
                        : 'transparent',
                } }, units)) : null,
            suffixComponent ? (React__default['default'].createElement("div", { className: `suffix-comp ${styles$5.suffix}` }, suffixComponent)) : null)));
};

var css_248z$4 = ".Radio-module_contactRadio__jA9zc {\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    display: flex;\n    flex-direction: row;\n    margin-top: 5px;\n}\n\n.Radio-module_radioContainer__1hU_w {\n    display: block;\n    position: relative;\n    padding-left: 20px;\n    margin-bottom: 12px;\n    margin-right: 5px;\n    cursor: pointer;\n    user-select: none;\n}\n\n/* Hide the browser's default radio button */\n.Radio-module_radioContainer__1hU_w input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n/* Create a custom radio button */\n.Radio-module_radioCheckmark__1-xRv {\n    position: absolute;\n    top: 50%;\n    left: 2px;\n    transform: translateY(-50%);\n    height: 16px;\n    width: 16px;\n    background-color: #eee;\n    border-radius: 50%;\n}\n\n/* On mouse-over, add a grey background color */\n.Radio-module_radioContainer__1hU_w:hover input ~ .Radio-module_checkmark__3mKZc {\n    background-color: #e4e4e4;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n.Radio-module_radioCheckmark__1-xRv:after {\n    content: '';\n    position: absolute;\n    display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n.Radio-module_radioContainer__1hU_w input:checked ~ .Radio-module_radioCheckmark__1-xRv:after {\n    display: block;\n}\n\n/* Style the indicator (dot/circle) */\n.Radio-module_radioContainer__1hU_w .Radio-module_radioCheckmark__1-xRv:after {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #057eff;\n}\n";
var styles$4 = {"contactRadio":"Radio-module_contactRadio__jA9zc","radioContainer":"Radio-module_radioContainer__1hU_w","radioCheckmark":"Radio-module_radioCheckmark__1-xRv","checkmark":"Radio-module_checkmark__3mKZc"};
styleInject(css_248z$4);

const Radio = ({ options, onChange }) => {
    const [contactMethod, setContactMethod] = React.useState(options[0]);
    const handleContactChange = (event) => {
        onChange(event.target.value);
        setContactMethod(event.target.value);
    };
    return (React__default['default'].createElement("form", { className: styles$4.contactRadio }, options.map(element => (React__default['default'].createElement("label", { key: element, htmlFor: element, className: styles$4.radioContainer },
        element,
        React__default['default'].createElement("input", { id: element, type: 'radio', name: 'radio', value: element, checked: contactMethod === element, onChange: handleContactChange }),
        React__default['default'].createElement("span", { className: styles$4.radioCheckmark }))))));
};

var css_248z$3 = ".Menu-module_container__1XSJ9 {\n    font-family: 'IBM Plex Sans', 'Source Sans Pro', sans-serif;\n    z-index: 10000;\n    position: absolute;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    left: 0;\n}\n\n.Menu-module_main__EgylS {\n    width: fit-content;\n    margin-top: 300px;\n    padding: 20px 40px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n";
var styles$3 = {"container":"Menu-module_container__1XSJ9","main":"Menu-module_main__EgylS"};
styleInject(css_248z$3);

const Menu = ({ forwardedRef, open, children }) => (React__default['default'].createElement(Layout, { orientation: 'column', className: styles$3.container, style: { display: open ? 'flex' : 'none' } },
    React__default['default'].createElement("div", { ref: forwardedRef, className: styles$3.main }, children)));

var css_248z$2 = ".StrengthBar-module_main__25-ZW {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    height: 4px;\n    width: 100%;\n}\n\n.StrengthBar-module_bar__3cRur {\n    margin-right: 6px;\n    border-radius: 15px;\n    width: 25%;\n}\n";
var styles$2 = {"main":"StrengthBar-module_main__25-ZW","bar":"StrengthBar-module_bar__3cRur"};
styleInject(css_248z$2);

const StrengthBar = ({ currentStrength }) => (React__default['default'].createElement("div", { id: 'strengthBar', className: styles$2.main }, Array.from(Array(4)).map((bar, index) => (React__default['default'].createElement("div", { 
    /* eslint-disable-next-line react/no-array-index-key */
    key: `strengthIndicator-${index}`, className: styles$2.bar, style: {
        backgroundColor: index < currentStrength
            ? (() => {
                switch (currentStrength) {
                    case 1:
                        return '#E01414';
                    case 2:
                        return '#E07C14';
                    case 3:
                        return '#E0A914';
                    case 4:
                        return '#37B411';
                    default:
                        return '#37B411';
                }
            })()
            : '#E6E6E6',
    } })))));

var css_248z$1 = ".Dropdown-module_dropdown__EZWuG { user-select: none;\n    position: relative;\n    font-family: 'IBM Plex Sans', sans-serif;\n}\n\n.Dropdown-module_label__2K8UO {\n    display: flex;\n    flex-direction: row;\n    margin-right: 5px;\n    font-size: 13px;\n    text-transform: capitalize;\n}\n\n.Dropdown-module_required__3CmFe {\n    color: #ff0000;\n    margin-left: 3px;\n}\n\n.Dropdown-module_mainBody__1ZxpO {\n    display: flex;\n    align-items: center;\n    border: 2px solid rgb(5, 126, 255);\n    border-radius: 5px;\n    padding: 0 20px;\n    justify-content: space-between;\n    transition: background-color 0.3s linear;\n}\n\n.Dropdown-module_mainBody__1ZxpO:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n}\n\n.Dropdown-module_openMenu__1lJ6S {\n    z-index: 999;\n    position: absolute;\n    margin-top: 2px;\n    width: 100%;\n    background-color: white;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n.Dropdown-module_openMenu__1lJ6S .Dropdown-module_option__XprGW {\n    height: 35px;\n    padding: 0 20px;\n    display: flex;\n    align-items: center;\n}\n\n.Dropdown-module_openMenu__1lJ6S .Dropdown-module_option__XprGW:hover {\n    background-color: #f5f5f5;\n    cursor: pointer;\n}\n";
var styles$1 = {"dropdown":"Dropdown-module_dropdown__EZWuG","label":"Dropdown-module_label__2K8UO","required":"Dropdown-module_required__3CmFe","mainBody":"Dropdown-module_mainBody__1ZxpO","openMenu":"Dropdown-module_openMenu__1lJ6S","option":"Dropdown-module_option__XprGW"};
styleInject(css_248z$1);

const Option = ({ onClick, children }) => (React__default['default'].createElement("div", { role: 'button', className: styles$1.option, onClick: () => {
        if (onClick)
            onClick();
    } }, children));

const Dropdown = ({ label, children, className, required, height, style, onChange, }) => {
    const childrenArray = React.useMemo(() => (Array.isArray(children) ? children : [children]), [children]);
    const [menuStatus, setMenuStatus] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(0);
    React.useEffect(() => {
        childrenArray.forEach(child => {
            if (child.type !== (React__default['default'].createElement(Option, null, "test")).type) {
                throw new Error('Children of Dropdown must be of type Option');
            }
        });
    }, [childrenArray]);
    function handleClick(event) {
        const { target } = event;
        const clickedClassName = target.className || '';
        if (clickedClassName.includes('mainBody'))
            return;
        setMenuStatus(false);
    }
    React.useEffect(() => {
        window.addEventListener('click', handleClick);
        return function cleanup() {
            window.removeEventListener('click', handleClick);
        };
    });
    return (React__default['default'].createElement("div", { className: `${styles$1.dropdown} ${className}`, style: style },
        label ? (React__default['default'].createElement("div", { className: styles$1.label },
            label,
            required ? (React__default['default'].createElement("div", { className: styles$1.required }, '*')) : null)) : null,
        React__default['default'].createElement("div", { id: 'DropdownMainBody', className: styles$1.mainBody, onKeyDown: e => {
                if (e.key === 'Enter') {
                    setMenuStatus(!menuStatus);
                }
            }, onClick: () => {
                setMenuStatus(!menuStatus);
            }, role: 'button', style: {
                height: height || '45px',
            } },
            childrenArray[selectedOption],
            React__default['default'].createElement("svg", { width: '16', height: '16', fill: 'black', className: styles$1.dropArrow, viewBox: '0 0 16 16' },
                React__default['default'].createElement("path", { d: 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' }))),
        React__default['default'].createElement("div", { id: 'openMenu', className: styles$1.openMenu, style: {
                visibility: menuStatus ? 'visible' : 'hidden',
            } }, childrenArray.map((child, index) => React.cloneElement(child, {
            key: `${label}-${index}`,
            onClick: () => {
                setMenuStatus(false);
                setSelectedOption(index);
                if (onChange)
                    onChange(index);
            },
        })))));
};

var css_248z = ".Icons-module_icon__1fOae {\n    height: 20px;\n    width: 20px;\n}\n\n.Icons-module_dropdown__eN8Cm {\n    transition: transform .1s linear;\n    cursor: pointer;\n}\n\n.Icons-module_lock__2kQHg:hover {\n    cursor: pointer;\n}\n";
var styles = {"icon":"Icons-module_icon__1fOae","dropdown":"Icons-module_dropdown__eN8Cm","lock":"Icons-module_lock__2kQHg"};
styleInject(css_248z);

const Lock = ({ locked, style, disabled, iconColor, className, onClick, }) => (React__namespace.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, onClick: onClick, className: `${className} ${styles.icon} ${styles.lock}` },
    React__namespace.createElement("path", { fill: 'none', d: 'M0 0h16v16H0z' }),
    React__namespace.createElement("path", { name: locked ? 'locked' : 'unlocked', d: locked || disabled
            ? 'M4.587 14.066a1.139 1.139 0 01-1.144-1.144V7.585c0-.636.508-1.144 1.144-1.144h.38V4.916c0-1.652 1.399-3.05 3.05-3.05 1.653 0 3.05 1.398 3.05 3.05v1.525h.382c.636 0 1.144.508 1.144 1.144v5.337c0 .636-.508 1.144-1.144 1.144H4.587zm0-1.144h6.862V7.585H4.587v5.337zm5.337-6.481V4.916c0-1.017-.89-1.906-1.906-1.906-1.017 0-1.906.89-1.906 1.906v1.525h3.812z'
            : 'M4.544 14.1A1.15 1.15 0 013.4 12.956V7.62a1.15 1.15 0 011.144-1.144h4.003V5.427A3.543 3.543 0 0112.073 1.9 3.543 3.543 0 0115.6 5.427v1.525a.67.67 0 01-.667.667.67.67 0 01-.667-.667V5.427c0-1.203-.99-2.193-2.193-2.193-1.202 0-2.192.99-2.192 2.193v1.048h1.525a1.15 1.15 0 011.144 1.144v5.337a1.15 1.15 0 01-1.144 1.144H4.544zm0-1.144h6.862V7.62H4.544v5.337z', fill: iconColor || 'black', fillRule: 'nonzero' }),
    disabled ? (React__namespace.createElement("path", { className: 'disable-slash', name: 'disable-slash', fill: '#ff2f24', d: 'M12.89 2.404l.706.707L3.111 13.596l-.707-.707z' })) : null));

const Key = ({ iconColor, style, className, }) => (React__namespace.createElement("svg", { viewBox: '0 0 21 21', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} ${styles.icon}` },
    React__namespace.createElement("path", { d: 'M20.024.36v3.575a.36.36 0 01-.358.358h-2.503v2.503a.36.36 0 01-.358.357h-2.503v2.504a.357.357 0 01-.103.253l-1.652 1.652c.216.653.326 1.337.326 2.025 0 3.53-2.905 6.436-6.436 6.436S.001 17.118.001 13.587s2.905-6.436 6.436-6.436c.69 0 1.375.11 2.03.328l7.37-7.373a.357.357 0 01.253-.104h3.576a.36.36 0 01.358.357zm-.716 3.218V.718h-3.071L8.813 8.143a.358.358 0 01-.379.082 5.724 5.724 0 00-1.996-.36c-3.139 0-5.722 2.583-5.722 5.722 0 3.138 2.583 5.72 5.722 5.72 3.138 0 5.721-2.582 5.721-5.72 0-.682-.122-1.358-.36-1.997a.358.358 0 01.083-.375l1.705-1.706V6.796a.36.36 0 01.358-.358h2.503V3.935a.36.36 0 01.357-.357h2.503z', fill: iconColor || '#bebebe', fillRule: 'nonzero' }),
    React__namespace.createElement("path", { d: 'M9.194 13.661a2.515 2.515 0 01-2.503 2.503 2.515 2.515 0 01-2.503-2.503 2.515 2.515 0 012.503-2.503 2.515 2.515 0 012.503 2.503zm-4.29 0c0 .98.806 1.788 1.787 1.788.981 0 1.788-.807 1.788-1.788 0-.98-.807-1.788-1.788-1.788-.98 0-1.788.807-1.788 1.788z', fill: iconColor || '#bebebe', fillRule: 'nonzero' })));

const Google = ({ style, className }) => (React__namespace.createElement("svg", { viewBox: '0 0 18 18', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} ${styles.icon}` },
    React__namespace.createElement("path", { d: 'M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.141 4.141 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z', fill: '#4285f4' }),
    React__namespace.createElement("path", { d: 'M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.859-3.048.859-2.344 0-4.328-1.583-5.036-3.71H.957v2.332A8.998 8.998 0 009 18z', fill: '#34a853' }),
    React__namespace.createElement("path", { d: 'M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957a9.005 9.005 0 000 8.084l3.007-2.332z', fill: '#fbbc05' }),
    React__namespace.createElement("path", { d: 'M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.581C13.463.892 11.426 0 9 0A8.998 8.998 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z', fill: '#ea4335' }),
    React__namespace.createElement("path", { fill: 'none', d: 'M0 0h18v18H0z' })));

const Cross = ({ style, className, iconColor, }) => (React__namespace.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} ${styles.icon}` },
    React__namespace.createElement("g", { fill: iconColor || '#fff' },
        React__namespace.createElement("path", { d: 'M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z' }),
        React__namespace.createElement("path", { d: 'M8 6.586l2.121-2.122a1.002 1.002 0 011.415 0c.39.391.39 1.024 0 1.415L9.414 8l2.104 2.104a1.025 1.025 0 010 1.449l-.001.001a.974.974 0 01-1.377 0L8 9.414l-2.121 2.122c-.391.39-1.024.39-1.415 0a1.002 1.002 0 010-1.415L6.586 8l-2.14-2.14a.974.974 0 010-1.377l.001-.001a1.026 1.026 0 011.449 0L8 6.586z' }))));

const Copyright = ({ style, className, iconColor, }) => (React__namespace.createElement("svg", { viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2, style: style, className: `${className} ${styles.icon}` },
    React__namespace.createElement("path", { d: 'M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z', fill: iconColor || '#fff' }),
    React__namespace.createElement("text", { x: 8.277, y: 8.234, fontFamily: "'ArialMT','Arial',sans-serif", fontSize: 12, fill: iconColor || '#fff', transform: 'translate(-4.671 4.061)' }, 'C')));

var useClickOutside = (callback, refContainer) => {
    const refs = React.useMemo(() => (Array.isArray(refContainer) ? refContainer : [refContainer]), [refContainer]);
    React.useEffect(() => {
        const handleMouseDown = (event) => {
            if (refs.every(ref => typeof ref !== 'function' &&
                ref &&
                ref.current &&
                !ref.current.contains(event.target))) {
                callback();
            }
        };
        document.addEventListener('click', handleMouseDown);
        return () => {
            document.removeEventListener('click', handleMouseDown);
        };
    }, [callback, refs]);
};

var useStateWithCallback = (initialState, callback) => {
    const [state, setState] = React.useState(initialState);
    React.useEffect(() => callback(state), [state, callback]);
    return [state, setState];
};

var useStepper = (initialState) => {
    const [state, setState] = React.useState(initialState);
    const increment = React.useCallback(() => setState(state + 1), [state]);
    const decrement = React.useCallback(() => setState(state - 1), [state]);
    const zero = React.useCallback(() => setState(0), [state]);
    return [state, increment, decrement, zero];
};

var useToggle = (initialState) => {
    const [state, setState] = React.useState(initialState);
    const toggle = React.useCallback((newState) => setState(newState === null || newState === undefined ? !state : newState), [state]);
    return [state, toggle];
};

exports.Button = Button;
exports.Copyright = Copyright;
exports.Cross = Cross;
exports.Dropdown = Dropdown;
exports.Google = Google;
exports.Key = Key;
exports.Layout = Layout;
exports.List = List;
exports.ListGroup = ListGroup;
exports.ListItem = ListItem;
exports.Lock = Lock;
exports.Menu = Menu;
exports.MfaInput = MfaInput;
exports.Option = Option;
exports.Radio = Radio;
exports.StrengthBar = StrengthBar;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.TextBox = TextBox;
exports.useClickOutside = useClickOutside;
exports.useStateWithCallback = useStateWithCallback;
exports.useStepper = useStepper;
exports.useToggle = useToggle;
//# sourceMappingURL=index.js.map
