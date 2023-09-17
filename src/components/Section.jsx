import '../css/section.css'

function Section(props) {
    const {children} = props
    return(
        <section>
            {children}
        </section>
    )
}

export default Section