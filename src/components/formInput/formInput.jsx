
import React from "react";

import "./formInput.scss";
const FormInputGroup = ({ type, placeHolder, displayType, className, customLabel, onChange, missing, width }) => {

    const labelClassName = `${className}__label`;
    const inputClassName = `${className}__input-field`
    let style = {
        width: width
    }
    return (

        <div>

            <div className={`${className} ${missing}`} style={width ? style : null}>
                {
                    displayType === "block" ? <div className={labelClassName} style={{ display: displayType }}>{customLabel}</div> : null
                }

                <input className={inputClassName} placeholder={placeHolder ? placeHolder : ""} type={type} onChange={(e) => onChange(e.target.value)} />
                {
                    displayType === "inline-block" ? <div className={labelClassName} style={{ display: displayType }}>{customLabel}</div> : null
                }
            </div>
        </div>
    )
}

export default FormInputGroup;