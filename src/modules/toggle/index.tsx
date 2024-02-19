/** WRAPPER
 * Весь контроль над открытиями осуществлеяется здесь
 * Контроль открытия закрытия через рефы, реф прокидывается до кнопки тогл
 * По клику по обертке - происходит закрытие карточек
 * */
import { useImperativeHandle, useRef } from 'react'

import { Cards } from './components/cards'

export function Wrapper () {
    const itemsRef = useRef(null)
    return (
        <div className='container'>
            <Cards ref={itemsRef}/>
        </div>
    )
}
