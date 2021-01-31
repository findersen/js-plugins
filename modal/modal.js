/*
* title: string
* closable: boolean
* content: string
* width: string ('400px')
* destroy(): void
* Close window
* ------------
* setContent(html: string): void | Public
* onClose(): void
* onOpen(): void
* beforeClose(): boolean
* ------------
* animate.css
* */
$.modal = function (options) {
    const $modal = _createModal(options)
    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
        },
        destroy() {}
    }
}

function _createModal (options) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cum dolorem doloribus ex maxime nesciunt omnis quas, temporibus veniam!</p>
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}