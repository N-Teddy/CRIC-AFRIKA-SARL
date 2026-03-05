const Skeleton = ({ className = '', rounded = 'rounded-[var(--radius-sm)]' }) => {
    return <span className={`inline-block animate-pulse bg-border/50 ${rounded} ${className}`} aria-hidden="true" />
}

export default Skeleton
