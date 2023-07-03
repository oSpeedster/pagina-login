
let usuario = document.getElementById('loginUser');
let senha = document.getElementById('loginSenha');

function enviar() {
    if(usuario.value === '' | senha.value === '') {
        alert('Você deve digitar seu usuário e senha para continuar!')
    } else {
        if(usuario.value === 'admin' && senha.value === 'admin') {
            window.location.href = "logado.html"
        } else {
            alert('Erro! Usuário e/ou senha estão errados.')
            console.log('Usuario ou senha está errada')
            console.log('Usuario: ' + usuario.value)
            console.log('Senha: ' + senha.value)
        }
    }
    
}


//db.collection('contas').doc(usuario).get().then(function(doc) {
//    if (doc.exist) {
//        if(senha === db.collection('contas').doc(usuario).password)  {
//            window.location.href = "C:\Users\home\Desktop\Programação\Pagina Login\logado.html"
//            }
//        }
//    else {
//            console.log('Usuario ou senha está errado!')
//        }
//    })

/////////////////////////////////////////////////////////////////////

//if(!doc.exist) {
//    db.collection('contas').doc(usuario).set({
//        'Usuario' : usuario,
//        'Senha' : senha
//      })
//} else {
//    console.log('Esse usuario ja existe.')
//}


