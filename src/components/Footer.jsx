function Footer() {

    function getFullYear() {
        const year = new Date().getFullYear()
        return year
    }

    return(
        <>
            <div className="footer">
                Copyright &copy; {getFullYear()} - All rights reserved
            </div>
        </>
    )
}

export default Footer