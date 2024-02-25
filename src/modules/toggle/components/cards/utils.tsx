import { forwardRef } from 'react'

export const getCards = () => {
    return [
        {
            cardTitle: 'Card 1',
            cardName: 'card-1',
            content: UserForm,
        },
        {
            cardTitle: 'Card 2',
            cardName: 'card-2',
            content: (
                <>
                    <span>
                        Enter address data
                    </span>
                    <input type="text" placeholder="Country"/>
                    <button>Send data</button>
                </>
            )
        }

    ]
}

const UserForm = forwardRef<HTMLInputElement>((_props, ref) => {
    return (
        <>
            <span>
                            Enter your userdata
            </span>
            <input type="text" placeholder="username" ref={ref}/>
            <button>Send data</button>
        </>
    )
})
