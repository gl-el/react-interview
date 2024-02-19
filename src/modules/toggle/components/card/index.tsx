import { forwardRef, useImperativeHandle, useRef } from 'react'

import { type CardProps } from '@/modules/toggle/components/card/types'

const Card = forwardRef<boolean, CardProps>(function Card (props, ref) {
    const cardRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            setActive () {
                ref.current = props.name;
            },
        };
    }, [])

    return (
        <div className="card">
            <div className="header">
                <span>{props.title}</span>
                <button ref={cardRef}>Toggle me</button>
            </div>
            <div className="form">
                {ref.current && props.children}
            </div>
        </div>
    )
})

export default Card
