const options = {
    create: false,
    title: 'Modal title',
    closable: true,
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cum dolorem doloribus ex maxime nesciunt omnis quas, temporibus veniam!</p>',
    width: '400px',
    footerButtons: [
        {text: 'Ok', style: 'primery', handler() {
                console.log('Primery clicked')
                modal.close()
            }},
        {text: 'Cancel', style: 'cancel', handler() {
                console.log('Cancel clicked')
                modal.close()
            }}
    ]
}

const modal = $.modal(options)