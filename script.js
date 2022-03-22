function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btn: document.querySelector('.btn'),
        
        inicia(){
            this.clickBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    // o keyCode 13 corresponde à tecla enter
                    this.realizaConta()
                }
            })
        },

        clickBotoes(){
            // esse function(e) significa que ao colicar no elemento direcionado a função irá executar determinada função após o evento ser realizado, já que ele está sendo passado por parâmentro
            document.addEventListener('click', function(e){
                // Como essa função está sendo criada em um elemnto de .document, o this dela está se refenciando ao document e não ao objeto calculadora. Dessa forma é preciso mudar o direcionamento do this para a calculadora
                const el = e.target
                // Como o evento foi adicionado ao documento como um todo, é necessário esse if para que apenas os elemntos que possuem a classe btn-num possa executar a função de enviar o seu valor para o display
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }

                if(el.classList.contains('btn-equ')){
                    this.realizaConta()
                }

            }.bind(this))// O bind irá vincular o this do objeto aou dessa função, já que o this dela faz referência ao document
            // Esse problema do this seria evitado caso a função do event fosse declarada com arrow function, pois esse tipo de declaração não muda o direcionamento do this de um objeto
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta Inválida')
                    return;
                }

                this.display.value = conta;
            } catch (e){
                alert('Conta Inválida')
                return;
            }

        },

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()