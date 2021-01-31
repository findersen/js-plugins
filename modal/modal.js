/*
* beforeClose(): boolean
* ------------
* animate.css
* */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

$.modal = function (options) {
    let   destroyed = false
    const $modal = _createModal(options)
    const listener = e => {
        if(e.target.dataset.close) modal.close()
    }
    const modal = {
        open() {
            if(destroyed) return console.log('Modal is destroyed')
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            //this.destroy()
        },
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('.modal-body').innerHTML = html
        }
    }

    $modal.addEventListener('click', listener)

    return modal
}

function _createModal (options) {
    const modal = document.createElement('div')
    const width = options.width ? ' style="width:'+ options.width +'"' : ''

    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window"${width}>
                <div class="modal-header">
                    <span class="modal-title">${options.title || ''}</span>
                    ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>${options.content || ''}</div>
            </div>
        </div>
    `)

    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('.modal-body'))
    document.body.appendChild(modal)

    return modal
}

function _createModalFooter (buttons = []) {
    if (buttons.length === 0) return document.createElement('div')

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = (btn.text)
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.style || 'default' }`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}

function noop () {}

function onOpen() {
    modal.open()
}