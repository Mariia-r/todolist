import React from 'react'

export const required = value => (value || typeof value === 'number' ? undefined : 'Field is required');

export const renderField = ({
    input,
    type,
    placeholder,
    meta: { touched, error, warning },
    className
  },) => (
      <div>
        <input {...input} placeholder={placeholder} type={type} className={className} />
        {touched &&
        ((error && <span style={{color: "red"}}>{error}</span>) ||
            (warning && <span style={{color: "yellow"}}>{warning}</span>))}
      </div>
  )