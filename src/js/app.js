import Tooltip from "./Tooltip";

const parentEl = document.body;

const tooltipFactory = new Tooltip(parentEl);

tooltipFactory.bindToDOM();
