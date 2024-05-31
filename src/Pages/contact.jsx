import React from "react";


function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errorMessage, setErrorMessage] = useState("");
    const {name, email, message} = formState;
    const handleChange = (event) => {
        if(event.target.name === "email") {

        } else {
            if(event.target.value.length){
                setErrorMessage(`${event.target.name} is required`)
            }
        }
    }
    
    return <div>
        <h1>Contact</h1>
        <form id="contact-form">
            <div>
                <label>Name: </label>
                <input type="text" name="name" onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ContactPage;