import Tooltip from "../Tooltip";


const parentEl = document.body;
const tooltipFactory = new Tooltip(parentEl);

tooltipFactory.bindToDOM();

test('button JSDOM test' , () => {

    expect(parentEl.innerHTML).toEqual(Tooltip.formMarkup())

});


test('tooltip JSDOM test' , () => {

    const headerContent = "Popover title";
    const bodyContent = "And here's some amazing content. It's very engaging. Right?";
    tooltipFactory.showTooltipMessage()

    const recieved = parentEl.querySelector('.btn-tooltip').outerHTML.replaceAll("\n",'').trim()
    const expected = Tooltip.tooltipMarkup(headerContent, bodyContent).replaceAll("\n",'').trim()

    expect(recieved).toEqual(expected)

})
    