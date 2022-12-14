import './InputGroup.css';

const InputGroup = (props) => {
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder}
                type={props.htmlType}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default InputGroup;
