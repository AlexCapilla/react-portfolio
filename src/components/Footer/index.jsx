import React from 'react';


function Footer(){
    const icons = [
        {
            name: "fa-brands fa-github",
            links: "https://github.com/"
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https://linkedin.com/"
        }
    ]


    const linkStyle = {
        textDecoration: "none",
        color: "black",
        cursor: "pointer"
    }

    const FooterStyle = {
        height: "50px",
        backgroundColor: "red",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridGap: "15px"
    }


    return (
        <footer style={FooterStyle}>
            <section>
                {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={linkStyle}> <i className={icon.name}></i> </a> 
                })}
            </section>
        </footer>
    )

}


export default Footer;