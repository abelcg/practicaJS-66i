/* 
 keyword this: hace referencia al objeto actual. Sirve para obtener todo lo q tiene dicho objeto



 */

 const cuenta = {
    nroCuenta: '545464614131646',
    saldo: 100,
    deposito(cantidad){
       this.saldo = this.saldo + cantidad
    },
    retiro(cantidad){
        return this.saldo = this.saldo - cantidad
    }
 }

 cuenta.deposito(150)
 cuenta.deposito(50)
 cuenta.deposito(110)
 console.log(cuenta.saldo);
 cuenta.retiro(10)
 cuenta.retiro(150)
 cuenta.retiro(150)
console.log(cuenta.saldo);
