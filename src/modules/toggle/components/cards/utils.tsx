export const getCards = () => {
    return [
        {
            cardTitle: 'Card 1',
            cardName: 'card-1',
            content: (
                <>
                    <span>
                            Enter your userdata
                    </span>
                    <input type="text" placeholder="username"/>
                    <button>Send data</button>
                </>
            )
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
