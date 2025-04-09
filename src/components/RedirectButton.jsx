const Button = ({ label, href = '/' }) => {
    return (
        <a href={href}>
            <button className='px-6 py-2 bg-black text-white rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer'>
                {label}
            </button>
        </a>
    )
}

export default Button;