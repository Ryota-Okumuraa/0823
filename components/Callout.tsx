export const Callout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="my-6 p-4 border flex items-center rounded-md border-l-4">
            {children}
        </div>
    )
}