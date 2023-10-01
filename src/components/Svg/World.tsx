type WorldProps = {
    black?: boolean
}

const World = ({black}: WorldProps) => {
    return (
        <svg className="tds-icon tds-icon-globe" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill={black ? "black" : "white"}
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"></path>
        </svg>

    )
}

export default World