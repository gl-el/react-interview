import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import { type CardProps } from '@/modules/toggle/components/card/types'

const Card = forwardRef<boolean, CardProps>(function Card ({openedName, name, children, Idk, title}, ref) {
    const cardRef = useRef(null);
    const btnRef = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            focus() {
                cardRef.current.focus()
            },
            node: btnRef.current,
        };
    }, []);


    useMemo(() => {
        const arr = Array.from({ length: 1000000 });
        console.log(arr);
        return arr;
    }, []);


    return (
        <div className="card">
            <div className="header">
                <span>{title}</span>
                <button ref={btnRef}>Toggle me</button>
            </div>
            <div className="form">
                {name === openedName && <Idk ref={cardRef} />}
            </div>
        </div>
    )
})

export default Card
