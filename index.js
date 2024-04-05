const { createApp } = Vue;

    createApp({
        data() {
            return {
                visor: '0',
                primeiroNumero: null,
                operador: null,
                resetVisor: false
            };
        },
        methods: {
            numeroPressionado(numero) {
                if (this.visor === '0' || this.resetVisor) {
                    this.visor = '' + numero;
                    this.resetVisor = false;
                } else {
                    this.visor += '' + numero;
                }
            },
            pontoPressionado() {
                if (!this.visor.includes('.')) {
                    this.visor += '.';
                }
            },
            operadorPressionado(operador) {
                if (this.operador !== null) {
                    this.calculo();
                }
                this.primeiroNumero = parseFloat(this.visor);
                this.operador = operador;
                this.resetVisor = true;
            },
            limpar() {
                this.visor = '0';
                this.primeiroNumero = null;
                this.operador = null;
            },
            calculo() {
                if (this.operador !== null) {
                    const segundoNumero = parseFloat(this.visor);
                    let resultado;
                    switch (this.operador) {
                        case '+':
                            resultado = this.primeiroNumero + segundoNumero;
                            break;
                        case '-':
                            resultado = this.primeiroNumero - segundoNumero;
                            break;
                        case '*':
                            resultado = this.primeiroNumero * segundoNumero;
                            break;
                        case '/':
                            resultado = this.primeiroNumero / segundoNumero;
                            break;
                    }
                    if (Number.isFinite(resultado)) {
                        this.visor = '' + resultado;
                    } else {
                        this.visor = 'Erro';
                    }
                    this.primeiroNumero = resultado;
                    this.operador = null;
                    this.resetVisor = true;
                }
            }            
        }
}).mount("#app");