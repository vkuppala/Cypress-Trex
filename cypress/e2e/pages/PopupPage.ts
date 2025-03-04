export class PopupPage
{

    private readonly popupCloseButton = '.cmp-popup-modal__form-close button.close'

    clickPopUpCloseButton()
    {
        cy.get(this.popupCloseButton).click()
        cy.log(`Close the popup displayed`)
    }

}
