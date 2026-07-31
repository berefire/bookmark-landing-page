import { DOM } from "@js/shared";
import { createContactFormController } from "./controller.js";
import { bindContactEvents } from "./events.js";

export function initializeContactForm(){
    const contactFormController = createContactFormController({
        field: DOM.contactField,
        input: DOM.contactInput,
        error: DOM.contactError,
        icon: DOM.contactErrorIcon,
    });

    bindContactEvents({
        form: DOM.contactForm,
        input: DOM.contactInput,
        controller: contactFormController,
    });
}