import React from 'react';

const Select = ({name, label, options, error, ...rest}) => {

    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} {...rest} className="browser-default custom-select">
          <option value="" />
          {options.map(option => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <p className="text-danger">{error}</p>}
      </div>
    );

};

export default Select;