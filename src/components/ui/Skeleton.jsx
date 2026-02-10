const Skeleton = ({ className = '', rounded = 'rounded-button' }) => {
    return <span className={`inline-block animate-pulse bg-border/50 ${rounded} ${className}`} aria-hidden="true" />
}

export default Skeleton
