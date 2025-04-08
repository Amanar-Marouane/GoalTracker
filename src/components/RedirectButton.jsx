const Button = ({ label, href = '/' }) => {
    return (
        <button className='px-6 py-2 bg-white text-black rounded-lg hover:bg-opacity-90 transition-colors'>
            <a href={href}>{label}</a>
        </button>
    )
}

export default Button;