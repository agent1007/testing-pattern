import Variant from '../Variant/Variant';
import { useCallback } from 'react';

function Question({ questions, setCheck, mix, setMix }) {

    const shuffle = useCallback((arr) => {
        setMix(true)
        var j, temp;
        for (var i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }, [setMix])


    const variants = mix === false ? shuffle(questions.variants) : questions.variants


    return (
        <>
            <h3 className="testing__question">Как переводиться {questions.title}</h3>
            <div className="testing__container-variants">
                {variants.map(data => {
                    
                    return (<Variant
                        key={data.id}
                        data={data}
                        setCheck={setCheck}
                    />)
                })}
            </div>
        </>
    );
}

export default Question;
