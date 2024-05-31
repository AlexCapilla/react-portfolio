import React from "react";

import About from "../../Pages/about";
import Portfolio from "../../Pages/portfolio";
import Contact from "../../Pages/contact";
import Resume from "../../Pages/resume";
import PageContent from "../PageContent";


function Page({ currentPage }) {
    const renderPage = () => {
        if(currentPage.name === "About") {
            return <About/>
        } else if(currentPage.name === "Portfolio") {
            return <Portfolio/>
        }
        else if(currentPage.name === "Contact") {
            return <Contact/>
        }
        else if(currentPage.name === "Resume") {
            return <Resume/>
        } else {
            return <About/>
        }
    }

    return <section>
        <PageContent>{renderPage()}</PageContent>
    </section>
}

export default Page;