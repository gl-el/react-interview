export function FormInput ({ children, ...props }: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'input'>) {
    return (
        <label className='block'>
            {children}
            <input {...props} />
        </label>
    )
}
