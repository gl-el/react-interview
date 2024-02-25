import '../../styles.css'
import { forwardRef } from 'react'

import Card from '../card'

import { type RefType } from '@/modules/toggle/components/card/types'
import { getCards } from '@/modules/toggle/components/cards/utils'
import { getRefMap } from '@/modules/toggle/utils';

/** У нас есть n-кнопок.
 * При нажатии на любую из них - открывается карточка под ней.
 * Все остальные карточки должны быть закрыты.
 * Убрать атрибут hidden и управлять отображением.
 * Можно декомпозировать на компоненты.
 */


// eslint-disable-next-line react/display-name
export const Cards = forwardRef<RefType>(({openedCard}, ref) => {
    const cards = getCards()

    return (
        <div className="cards">
            {cards.map(({
                cardName,
                cardTitle,
                content
            }) => (
                <Card key={cardName} Idk={content} openedName={openedCard} title={cardTitle} name={cardName} ref={node => {
                    const map = getRefMap(ref)
                    map.set(cardName, node)

                }}>
                </Card>
            ))}
        </div>
    )
})
