import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LrsButtonVariant, LrsButtonSize, LrsButtonShape, LrsButtonType } from './typings'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lrs-button')
export class LrsButton extends LitElement {

  /**
   * @prop variant
   * @default 'primary'
   * The variant type of the button.
   */
  @property()
  variant: LrsButtonVariant = 'primary'

  /**
   * @prop size
   * @default 'sm'
   * The size of the button
   */
  @property()
  size: LrsButtonSize = 'sm'

  /**
   * @prop shape
   * @default 'pill'
   * The shape of the button
   */
  @property()
  shape: LrsButtonShape = 'pill'

  /**
   * @prop type
   * @default 'button'
   * The type of button
   */
  @property()
  type: LrsButtonType = 'button'

  /**
   * @prop quiet
   * @default false
   * Is the button in its quiet visual state
   */
  @property({ type: Boolean })
  quiet = false

  /**
   * @prop justify
   * @default false
   * Set button to 100% width of container
   */
  @property({ type: Boolean })
  justify = false

  /**
   * @prop disabled
   * @default false
   * Set the button to the disabled state
   */
  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <button>
        <slot name="button-label"></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lrs-button': LrsButton
  }
}
