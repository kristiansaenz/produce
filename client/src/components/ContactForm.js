import React from 'react'

class ContactForm extends React.Component {

    render(){
        return(
            <div class="contact-form">
                <form>
                
                {/* Name field */}
                <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Ross Poldark"></input>
                </div>
                </div>

                {/* Email field */}
                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="rosspoldark@pbs.com"></input>
                </div>
                </div>

                {/* Message field */}
                <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="My dearest produce.."></textarea>
                </div>
                </div>

                <div class="control">
                <div class="button-area">

                    <button class="button is-light">Submit</button>
                </div>
                </div>

            </form>
            </div>
        )
    }

}

export default ContactForm
