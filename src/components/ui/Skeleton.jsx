const Skeleton = ({ className = '', rounded = 'rounded-full' }) => {
    return <span className={`skeleton-line ${rounded} ${className}`} aria-hidden="true" />
}

export default Skeleton
