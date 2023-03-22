function Variant({ data, setCheck }) {

    const choiceResponse = () => {
        setCheck('flag' in data ? true : false)
    }
    
    return (
        <div className="variant">
            
            <input className="variant__button" type="radio" name="name" onClick={choiceResponse} />
            <label className="variant__text" htmlFor={data.id}>{data.title}</label>
        </div>
    );
}

export default Variant;