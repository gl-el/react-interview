export function ErrorMessage ({ children }: { children: React.ReactNode }) {
    return (
        <p className='error'>{children}</p>
    )
}
