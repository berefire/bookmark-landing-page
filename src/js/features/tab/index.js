import { DOM } from "@js/shared";

import { createTabController } from "./controller.js";
import { bindTabEvents } from "./events.js";

export function initializeTab(){
    const tabController = createTabController({
        tabs: DOM.featuresTabButtons,
        featureTitle: DOM.featureTitle,
        featureDescription: DOM.featureDescription,
        featureImage: DOM.featureImage,
    });
    bindTabEvents({
        tabController,
        tabButtons: DOM.featuresTabButtons,
    });
}