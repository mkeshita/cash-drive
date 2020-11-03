import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.scss';
function Dropdown({value, onChange, options, prompt, label, id}) {

    


    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click", close)
        return () => document.removeEventListener("click", close)
    }, []);

    function close(e){
        setOpen(e && e.target === ref.current)
    }

    return (
        <div className="c-dropdown mb-4">
            <div className="control"  onClick={() => setOpen(prev => !prev)}>
                <div className="selected-value" ref={ref}>
                    {value ? value[label] : prompt}
                </div>
                <div className={`arrow ${open ? "open" : null}`} />
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {options.map(option => (
                    <div 
                    key={option[id]}
                    className={`option ${value === option ? "selected" : null}`}
                    onClick ={() => {
                        setOpen(false)
                        onChange(option);
                        
                    }}>{option[label]}</div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
