import { MutableRefObject, type RefObject } from 'react'

import { type RefType } from '@/modules/toggle/types'

export function getRefMap (ref: RefObject<RefType>) {
    if (ref !== null && !ref.current) {
        ref.current = new Map()
    }
    return ref.current
}
