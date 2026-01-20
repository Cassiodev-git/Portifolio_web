

//download do cv
const baixarCv =  document.getElementById('btn_cv')

if(baixarCv){
    baixarCv.addEventListener('click', () => {
        const link = document.createElement('a')

        link.href = 'arquivos/Curriculo_Cássio_Lúcio.pdf'
        
        link.download= 'Cássio_Lúcio_cv.pdf'

        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)

    })

}



