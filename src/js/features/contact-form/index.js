import { DOM } from "@js/shared";
import { createContactController } from "./controller.js";
import { bindContactEvents } from "./events.js";

export function initializeContactForm(){
    const ContactController = createContactController({
        field: DOM.contactField,
        input: DOM.contactInput,
        error: DOM.contactError,
        icon: DOM.contactErrorIcon,
    });

    bindContactEvents({
        form: DOM.contactForm,
        input: DOM.contactInput,
        controller: ContactController,
    });
}