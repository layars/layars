import type { IWindow } from 'happy-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import './lrs-button'

declare global {
    interface Window extends IWindow {}
}

describe('lrs-button', async() => {
    beforeEach(async () => {
        document.body.innerHTML = '<lrs-button>Button</lrs-button>'
        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))
    })
    
    function getButton(): HTMLElement {
        return document.body.querySelector('lrs-button')!
    }

    it('should render the button', async () => {
        expect(getButton()).toBeTruthy
    })
})