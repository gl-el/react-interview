import '../../styles.css'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import Card from '../card'

import { type RefType } from '@/modules/toggle/components/card/types'
import { getCards } from '@/modules/toggle/components/cards/utils'

/** У нас есть n-кнопок.
 * При нажатии на любую из них - открывается карточка под ней.
 * Все остальные карточки должны быть закрыты.
 * Убрать атрибут hidden и управлять отображением.
 * Можно декомпозировать на компоненты.
 */

// eslint-disable-next-line react/display-name
export const Cards = forwardRef<RefType>((_props, ref) => {
    const cards = getCards()

    function getMap () {
        if (ref !== null && !ref.current) {
            ref.current = new Map()
        }
        return ref.current
    }

    console.log('cards', ref)

    return (
        <div className="cards">
            {cards.map(({
                cardName,
                cardTitle,
                content
            }) => (
                <Card key={cardName} title={cardTitle} name={cardName} ref={node => {
                    const map = getMap()
                    map.set(cardName, node)
                }}>
                    {content}
                </Card>
            ))}
        </div>
    )
})
