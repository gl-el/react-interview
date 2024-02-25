/** WRAPPER
 * Весь контроль над открытиями осуществлеяется здесь
 * Контроль открытия закрытия через рефы, реф прокидывается до кнопки тогл
 * По клику по обертке - происходит закрытие карточек
 * */
import { useEffect, useRef, useState } from 'react'

import { Cards } from './components/cards'
import { getRefMap } from '@/modules/toggle/utils';
import { RefType } from '@/modules/toggle/types';

export function Wrapper () {
    const itemsRef = useRef<RefType>(null)
    const [openedCardName, setOpenedCardName] = useState('');

    useEffect(() => {
        const map = getRefMap(itemsRef);
        map.forEach((item, key) => {
            item.node?.addEventListener('click', (e) => {
                e.stopPropagation()
                setOpenedCardName(key)
                item.focus?.()
            })
        })
    }, [])


    return (
        <div className='container' ref={node => {
            const map = getRefMap(itemsRef)
            map.set('container', node)
        }}>
            <p>opened name {openedCardName}</p>
            <Cards ref={itemsRef} openedCard={openedCardName}/>
        </div>
    )
}
