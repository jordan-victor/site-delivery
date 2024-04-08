//----------------------------------------SCRIPT REFERENTE AO CADASTRO DE USUÁRIO------------------------------------------
function mostrar_cadastro(){
    document.getElementById("corpoCadastro").style.display = "flex"
    var dados_user = document.getElementsByName("dados")
    dados_user.forEach(dado_user=>{
        dado_user.setAttribute('required', 'required')
    })
}

function esconder_cadastro(){
    document.getElementById("corpoCadastro").style.display = "none"
    var dados_user = document.getElementsByName("dados")
    dados_user.forEach(dado_user=>{
        dado_user.removeAttribute('required')
    })
}
   
function cadastrar(){
    var dados_user_nome = document.getElementById("user")
    var dados_user_senha_confirm = document.getElementById("confirma_senha")
    var dados_user_senha = document.getElementById("senha")
    var nome_usuario2 = document.getElementById("nome_usuario2")
   
    if(dados_user_nome.value != "" && dados_user_senha_confirm.value != "" && dados_user_senha.value != ""){
        if(dados_user_senha.value == dados_user_senha_confirm.value){
            var nome_usuarios = document.getElementById("nome_usuario")
            nome_usuarios.innerHTML = dados_user_nome.value
            nome_usuario2.innerHTML = dados_user_nome.value
            document.getElementById("aviso_desblock_botao").style.display ="none"
            document.getElementById("desabilita_botao").style.display ="none"

            var dados_user = document.getElementsByName("dados")
            dados_user.forEach(dado_user=>{
                dado_user.setAttribute('readonly', 'readonly')
            })
            
            document.getElementById("mensagem_cadastro").style.backgroundColor = "rgb(197, 255, 204)"
            document.getElementById("msg_cadastro").style.color = "rgb(0, 114, 0)"
            document.querySelector("#mensagem_cadastro > i").style.color = "rgb(0, 114, 0)"
            document.getElementById("msg_cadastro").innerHTML = "Cadastro realizado"
            document.getElementById("mensagem_cadastro").style.display = "block"
            document.getElementById("confirma_senha").style.border = "3px solid rgb(86, 86, 86)"
        }
        else{
            alert("Digite a mesma senha para confirmar")
        }
    }
    else{
        alert("Preencha todo o formulário antes de prosseguir")
    }
    return nome_usuarios.innerHTML   
}

function deletarCadastro(){
    var dados_user_nome = document.getElementById("user")
    var dados_user_senha_confirm = document.getElementById("confirma_senha")
    var dados_user_senha = document.getElementById("senha")

    if(dados_user_nome.value != "" && dados_user_senha_confirm.value != "" && dados_user_senha.value != ""){
        document.getElementById("user").value = ""
        document.getElementById("confirma_senha").value = ""
        document.getElementById("senha").value = ""
        document.getElementById("senha_form").value = ""//deletando senha do formulário de compras também
        document.getElementById("nome_usuario").innerHTML = "Cadastro"
        document.getElementById("nome_usuario2").innerHTML = "User"
        document.getElementById("aviso_desblock_botao").style.display ="flex"
        document.getElementById("desabilita_botao").style.display ="block"

        var dados_user = document.getElementsByName("dados")
        dados_user.forEach(dado_user=>{
            dado_user.removeAttribute('readonly')
        })

        document.getElementById("msg_cadastro").innerHTML = "Conta deletada"
        document.getElementById("msg_cadastro").style.color ="white"
        document.querySelector("#mensagem_cadastro > i").style.color = "white"
        document.getElementById("mensagem_cadastro").style.backgroundColor = "rgb(255, 21, 0)"
        document.getElementById("mensagem_cadastro").style.display = "block"
        document.getElementById("confirma_senha").style.border = "3px solid rgb(86, 86, 86)"

        //DELETANDO TABELA
        var tabelas = document.querySelectorAll(".tabela")
        if(tabelas.length > 0){
            tabelas.forEach(function(tabela){
                tabela.remove()
            })
        }   
        var horas = document.querySelectorAll(".hora")
        if(horas.length > 0){
            horas.forEach(function(hora){
                hora.remove()
            })
        } 
        
        //FAZENDO AVISO HISTÓRICO APARECER
        document.getElementById("avisoHistorico").style.display = "block"
    }
    else{
        alert("Sem conta cadastrada")
    }
}

function fechar_msg_cadastro(){
    document.getElementById("mensagem_cadastro").style.display = "none"
}



const confirmaSenha = document.getElementById("confirma_senha")
confirmaSenha.addEventListener('input', ()=>{
    var password1 = document.getElementById("senha")
    var password2 = document.getElementById("confirma_senha")
    if(password1.value == password2.value){
        document.getElementById("confirma_senha").style.border = "3px solid rgb(0, 198, 0)"
    }
    else{
        document.getElementById("confirma_senha").style.border = "3px solid rgb(86, 86, 86)"
    }    
})




















// ----------------------------- SCRIPT REFERENTE AO MENU LATERAL----------------------------------------------
function fecharMenuLateral(){
    document.getElementById("menuLateral").style.transform = "translateX(-3000px)"
}

function abrirMenuLateral(){
    document.getElementById("menuLateral").style.transform = "translateX(0px)"
}
















//SCRIPT REFERENTE AO RELÓGIO
function atualizarRelogio() {
    const agora = new Date();
  
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
  
    const relogio = document.getElementById('relogio');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
  }
  
  setInterval(atualizarRelogio, 1000);





















// ----------------------------- SCRIPT REFERENTE AO CARROSEL DE IMAGENS E AO CARROSEL DE TEXTOS ----------------------------------
function carrosel(){
    var Carrosel = setInterval (()=>{
        var contador = document.getElementById('contador').innerHTML
        var numero = parseInt(contador) + 1
        var imagemCorrente = document.getElementById('imagemCorrente')
        document.getElementById('contador').innerHTML = numero

        if (numero == 1){
            imagemCorrente.setAttribute("src", "bg1.jpg")
        }

        else if (numero == 2){
            imagemCorrente.setAttribute("src", "bg2.jpg")
        }

        else if (numero == 3){
            imagemCorrente.setAttribute("src", "bg3.jpg")
        }

        else if (numero == 4){
            imagemCorrente.setAttribute("src", "bg4.jpg")
        }

        else if (numero == 5){
            imagemCorrente.setAttribute("src", "bg5.jpg")
        }
        //Zerando o contador
        else if (numero > 5){
            document.getElementById('contador').innerHTML = 0 
        }
        
        //Indicadores do slide de imagens
        let radiosSlide = document.getElementsByName("radioIndicator")
        radiosSlide[numero - 1].style.backgroundColor = "#1e1700"
        function updateRadio(){
            radiosSlide[numero - 1].style.backgroundColor = "transparent"
        }
        setTimeout(updateRadio, 3000)

        return numero     
    }, 3000)

    
    /*
    var imagens = setInterval(()=>{
        var frases = document.querySelector("#FraseBonitinha").innerHTML
        var cont = document.getElementById("cont").innerHTML
        var soma = parseInt(cont) + 1
        var cont = document.getElementById("cont").innerHTML = soma

        if (soma == 1){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "1" 
        }
        else if (soma == 2){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "2"
        }
        else if (soma == 3){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "3"
        }
        else if (soma == 4){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "4"
        }
        else if (soma == 5){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "5"
        }
        else if (soma > 5){
            document.getElementById("cont").innerHTML = 0
        }
    }, 3000)
    */    
}


































































//-----------------------------SCRIPT PARA MUDAR AS OPÇÕES DE MENU----------------------------------------
function mostrarTradicionais(){
    var tradicionais = document.getElementById("tradicionais").style.display = "flex"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#ffbb03"
    
    var artesanais = document.getElementById("artesanais").style.display = "none"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#1e1700"

    var doces = document.getElementById("doces").style.display = "none"
    var DOCES = document.getElementById("DOCES").style.border = "none"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#1e1700"

    var combos = document.getElementById("combos").style.display = "none"
    var COMBOS = document.getElementById("COMBOS").style.border = "none"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#1e1700"
}


function mostrarArtesanais(){
    var artesanais = document.getElementById("artesanais").style.display = "flex"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#ffbb03"
    
    var tradicionais = document.getElementById("tradicionais").style.display = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#1e1700"
    
    var doces = document.getElementById("doces").style.display = "none"
    var DOCES = document.getElementById("DOCES").style.border = "none"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#1e1700"

    var combos = document.getElementById("combos").style.display = "none"
    var COMBOS = document.getElementById("COMBOS").style.border = "none"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#1e1700"
}


function mostrarDoces(){
    var doces = document.getElementById("doces").style.display = "flex"
    var DOCES = document.getElementById("DOCES").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#ffbb03"
    
    var tradicionais = document.getElementById("tradicionais").style.display = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#1e1700"

    var artesanais = document.getElementById("artesanais").style.display = "none"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#1e1700"

    var combos = document.getElementById("combos").style.display = "none"
    var COMBOS = document.getElementById("COMBOS").style.border = "none"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#1e1700"
}


function mostrarCombos(){
    var combos = document.getElementById("combos").style.display = "flex"
    var COMBOS = document.getElementById("COMBOS").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#ffbb03"

    var tradicionais = document.getElementById("tradicionais").style.display = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#1e1700"
    
    var artesanais = document.getElementById("artesanais").style.display = "none"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#1e1700"

    var doces = document.getElementById("doces").style.display = "none"
    var DOCES = document.getElementById("DOCES").style.border = "none"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#1e1700"
}































// --------- SCRIPT REFERENTE AO BOTÃO QUE MOSTRA E O X QUE ESCONDE A LISTA DE INGREDIENTES DOS BURGUERES ---------------------------
function mostrarIgredientesTradicional1(){
    document.getElementById("igredientes-tradicional1").style.display = "block"
}
function fecharIgredientesTradicional1(){
    document.getElementById("igredientes-tradicional1").style.display = "none"
}

function mostrarIgredientesTradicional2(){
    document.getElementById("igredientes-tradicional2").style.display = "block"
}
function fecharIgredientesTradicional2(){
    document.getElementById("igredientes-tradicional2").style.display = "none"
}

function mostrarIgredientesTradicional3(){
    document.getElementById("igredientes-tradicional3").style.display = "block"
}
function fecharIgredientesTradicional3(){
    document.getElementById("igredientes-tradicional3").style.display = "none"
}

function mostrarIgredientesTradicional4(){
    document.getElementById("igredientes-tradicional4").style.display = "block"
}
function fecharIgredientesTradicional4(){
    document.getElementById("igredientes-tradicional4").style.display = "none"
}



function mostrarIgredientesArtesanal1(){
    document.getElementById("igredientes-artesanal1").style.display = "block"
}
function fecharIgredientesArtesanal1(){
    document.getElementById("igredientes-artesanal1").style.display = "none"
}

function mostrarIgredientesArtesanal2(){
    document.getElementById("igredientes-artesanal2").style.display = "block"
}
function fecharIgredientesArtesanal2(){
    document.getElementById("igredientes-artesanal2").style.display = "none"
}

function mostrarIgredientesArtesanal3(){
    document.getElementById("igredientes-artesanal3").style.display = "block"
}
function fecharIgredientesArtesanal3(){
    document.getElementById("igredientes-artesanal3").style.display = "none"
}



function mostrarIgredientesDoce1(){
    document.getElementById("igredientes-doce1").style.display = "block"
}
function fecharIgredientesDoce1(){
    document.getElementById("igredientes-doce1").style.display = "none"
}

function mostrarIgredientesDoce2(){
    document.getElementById("igredientes-doce2").style.display = "block"
}
function fecharIgredientesDoce2(){
    document.getElementById("igredientes-doce2").style.display = "none"
}

function mostrarIgredientesDoce3(){
    document.getElementById("igredientes-doce3").style.display = "block"
}
function fecharIgredientesDoce3(){
    document.getElementById("igredientes-doce3").style.display = "none"
}



function mostrarIgredientesCombo1(){
    document.getElementById("igredientes-combo1").style.display = "block"
}
function fecharIgredientesCombo1(){
    document.getElementById("igredientes-combo1").style.display = "none"
}

function mostrarIgredientesCombo2(){
    document.getElementById("igredientes-combo2").style.display = "block"
}
function fecharIgredientesCombo2(){
    document.getElementById("igredientes-combo2").style.display = "none"
}

function mostrarIgredientesCombo3(){
    document.getElementById("igredientes-combo3").style.display = "block"
}
function fecharIgredientesCombo3(){
    document.getElementById("igredientes-combo3").style.display = "none"
}























































// --------------------- Script Referente a adição dos Burgueres ao carrinho ------------------------------
function addTradicional1(){ //Função referente a adição do item1 da lista de burgueres tradicionais
    var nomeTradicional1 = document.querySelector("#bt1 h1").innerHTML
    var precoTradicional1 = document.getElementById("preço-tradicional1").innerHTML
    var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value
    
    if (qtdTradicional1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value = 1    
    }

    else if (qtdTradicional1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value = 5
    }
    
    var precoT1 = 20
    var totalTradicional1 = Number(precoT1 * qtdTradicional1)
    
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML = `Nome: ${nomeTradicional1} <br>`
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML += `Preço: ${precoTradicional1} <br>`
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML += `Unidades: ${qtdTradicional1} <br>`
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML += `Total: ${totalTradicional1},00$`

    var botaoRmoverTr1 = document.getElementById("botaoRemoverTr1").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item1Tr = document.getElementById("item1Tr").style.display = "block"
    //Adicionando valor ao nome do tradicional 1
    document.getElementById("nomeTr1").innerHTML = `${nomeTradicional1}`
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_simples1").style.display = "block"

    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoS1").innerHTML = `${precoTradicional1}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoS1").innerHTML = `${totalTradicional1},00$`//--agora
}

function removerTr1(){ //Função para remover da lista o item 1 de burqueres tradicionais
   var item1Tr = document.getElementById("item1Tr").style.display = "none"
   var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value = ""
    document.getElementById("nomeTr1").innerHTML = ""
   document.getElementById("checado_simples1").style.display = "none"//fazendo o checked desaparecer

   document.getElementById("preco_dinamicoS1").innerHTML = ""
   document.getElementById("subtotal_dinamicoS1").innerHTML = ""
}






function addTradicional2(){ //Função referente a adição do item2 da lista de burgueres tradicionais 
    var nomeTradicional2 = document.querySelector("#bt2 h1").innerHTML
    var precoTradicional2 = document.getElementById("preço-tradicional2").innerHTML
    var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value
    
    if (qtdTradicional2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value = 1    
    }

    else if (qtdTradicional2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value = 5
    }
    
    var precoT2 = 25
    var totalTradicional2 = Number(precoT2 * qtdTradicional2)
    
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML = `Nome: ${nomeTradicional2} <br>`
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML += `Preço: ${precoTradicional2} <br>`
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML += `Unidades: ${qtdTradicional2} <br>`
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML += `Total: ${totalTradicional2},00$`

    var botaoRmoverTr2 = document.getElementById("botaoRemoverTr2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2Tr = document.getElementById("item2Tr").style.display = "block" //Fazendo o item 2 de bg tradicional aparecer novamente depois de ser removido da lista 
    //adicionando valor ao nome do burger tradicional 2
    document.getElementById("nomeTr2").innerHTML = `${nomeTradicional2}`
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_simples2").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoS2").innerHTML = `${precoTradicional2}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoS2").innerHTML = `${totalTradicional2},00$`//--agora
}

function removerTr2(){ //Função para remover da lista o item 2 de burqueres tradicionais
   var item2Tr = document.getElementById("item2Tr").style.display = "none" //Removendo o item 2 de bg tradicional da lista
   var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value = ""
   document.getElementById("nomeTr2").innerHTML = ""
   document.getElementById("checado_simples2").style.display = "none"//fazendo o ícone de checado desaparecer

   document.getElementById("preco_dinamicoS2").innerHTML = ""
   document.getElementById("subtotal_dinamicoS2").innerHTML = ""
}






function addTradicional3(){ //Função referente a adição do item 3 da lista de burgueres tradicionais
    var nomeTradicional3 = document.querySelector("#bt3 h1").innerHTML
    var precoTradicional3 = document.getElementById("preço-tradicional3").innerHTML
    var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value
    
    if (qtdTradicional3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value = 1    
    }

    else if (qtdTradicional3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value = 5
    }
    
    var precoT3 = 30
    var totalTradicional3 = Number(precoT3 * qtdTradicional3)
    
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML = `Nome: ${nomeTradicional3} <br>`
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML += `Preço: ${precoTradicional3} <br>`
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML += `Unidades: ${qtdTradicional3} <br>`
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML += `Total: ${totalTradicional3},00$`

    var botaoRmoverTr3 = document.getElementById("botaoRemoverTr3").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item3Tr = document.getElementById("item3Tr").style.display = "block" //Fazendo o item 3 de bg tradicional aparecer novamente depois de ser removido da lista
    document.getElementById("nomeTr3").innerHTML = `${nomeTradicional3}`//adicionando valor ao nome dinâmico do tradicional 3
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_simples3").style.display = "block"

    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoS3").innerHTML = `${precoTradicional3}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoS3").innerHTML = `${totalTradicional3},00$`//--agora
}

function removerTr3(){ //Função para remover da lista o item 3 de burqueres tradicionais
   var item3Tr = document.getElementById("item3Tr").style.display = "none" //Removendo o item 3 de bg tradicional da lista
   var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value = ""
    document.getElementById("nomeTr3").innerHTML = ""
   document.getElementById("checado_simples3").style.display = "none"//fazendo ícone de checado desaparecer

   document.getElementById("preco_dinamicoS3").innerHTML = ""
   document.getElementById("subtotal_dinamicoS3").innerHTML = ""
}







function addTradicional4(){ //Função referente a adição do item 4 da lista de burgueres tradicionais  
    var nomeTradicional4 = document.querySelector("#bt4 h1").innerHTML
    var precoTradicional4 = document.getElementById("preço-tradicional4").innerHTML
    var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value
    
    if (qtdTradicional4 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value = 1    
    }

    else if (qtdTradicional4 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value = 5
    }
    
    var precoT4 = 26
    var totalTradicional4 = Number(precoT4 * qtdTradicional4)
    
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML = `Nome: ${nomeTradicional4} <br>`
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML += `Preço: ${precoTradicional4} <br>`
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML += `Unidades: ${qtdTradicional4} <br>`
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML += `Total: ${totalTradicional4},00$`

    var botaoRmoverTr4 = document.getElementById("botaoRemoverTr4").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item4Tr = document.getElementById("item4Tr").style.display = "block" //Fazendo o item 4 de bg tradicional aparecer novamente depois de ser removido da lista
    document.getElementById("nomeTr4").innerHTML = `${nomeTradicional4}`//adicionando valor ao nome dinâmico do tradicional 4
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_simples4").style.display = "block"

    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoS4").innerHTML = `${precoTradicional4}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoS4").innerHTML = `${totalTradicional4},00$`//--agora
}

function removerTr4(){ //Função para remover da lista o item 4 de burqueres tradicionais
   var item4Tr = document.getElementById("item4Tr").style.display = "none" //Removendo o item 4 de bg tradicional da lista
   var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value = ""
    document.getElementById("nomeTr4").innerHTML = ""
   document.getElementById("checado_simples4").style.display = "none"//fazendo ícone de checado desaparecer

   document.getElementById("preco_dinamicoS4").innerHTML = ""
   document.getElementById("subtotal_dinamicoS4").innerHTML = ""
}













function addArtesanal1(){ //Função referente a adição do item1 da lista de burgueres artesanais   
    var nomeArtesanal1 = document.querySelector("#ba1 h1").innerHTML
    var precoArtesanal1 = document.getElementById("preço-artesanal1").innerHTML
    var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value
    
    if (qtdArtesanal1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value = 1    
    }

    else if (qtdArtesanal1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value = 5
    }
    
    var precoA1 = 28
    var totalArtesanal1 = Number(precoA1 * qtdArtesanal1)
    
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML = `Nome: ${nomeArtesanal1} <br>`
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML += `Preço: ${precoArtesanal1} <br>`
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML += `Unidades: ${qtdArtesanal1} <br>`
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML += `Total: ${totalArtesanal1},00$`

    var botaoRmoverAt1 = document.getElementById("botaoRemoverAt1").style.display = "block"
     //Fazendo o botão de pedir aparecer
    var item1At = document.getElementById("item1At").style.display = "block" 
    document.getElementById("nomeAt1").innerHTML = `${nomeArtesanal1}` //Adicionando valor ao nome dinâmico do artesanal 1
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_espeto1").style.display = "block"
   
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoE1").innerHTML = `${precoArtesanal1}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoE1").innerHTML = `${totalArtesanal1},00$`//--agora
}

function removerAt1(){ //Função para remover da lista o item 1 de burqueres artesanais
   var item1At = document.getElementById("item1At").style.display = "none"
   var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value = ""
   document.getElementById("nomeAt1").innerHTML = ""
   document.getElementById("checado_espeto1").style.display = "none"//fazendo ícone de checado desparecer

   document.getElementById("preco_dinamicoE1").innerHTML = ""
   document.getElementById("subtotal_dinamicoE1").innerHTML = ""
}







function addArtesanal2(){ //Função referente a adição do item2 da lista de burgueres artesanais 
    var nomeArtesanal2 = document.querySelector("#ba2 h1").innerHTML
    var precoArtesanal2 = document.getElementById("preço-artesanal2").innerHTML
    var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value
    
    if (qtdArtesanal2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value = 1    
    }

    else if (qtdArtesanal2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value = 5
    }
    
    var precoA2 = 15
    var totalArtesanal2 = Number(precoA2 * qtdArtesanal2)
    
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML = `Nome: ${nomeArtesanal2} <br>`
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML += `Preço: ${precoArtesanal2} <br>`
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML += `Unidades: ${qtdArtesanal2} <br>`
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML += `Total: ${totalArtesanal2},00$`

    var botaoRmoverAt2 = document.getElementById("botaoRemoverAt2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2At = document.getElementById("item2At").style.display = "block"
    document.getElementById("nomeAt2").innerHTML = `${nomeArtesanal2}` //Adicionando valor ao nome dinâmico do artesanal 2
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_espeto2").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoE2").innerHTML = `${precoArtesanal2}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoE2").innerHTML = `${totalArtesanal2},00$`//--agora
}

function removerAt2(){ //Função para remover da lista o item 2 de burqueres artesanais
   var item2At = document.getElementById("item2At").style.display = "none"
   var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value = ""
    document.getElementById("nomeAt2").innerHTML = ""
   document.getElementById("checado_espeto2").style.display = "none"

   document.getElementById("preco_dinamicoE2").innerHTML = ""
   document.getElementById("subtotal_dinamicoE2").innerHTML = ""
}







function addArtesanal3(){ //Função referente a adição do item 3 da lista de burgueres artesanais  
    var nomeArtesanal3 = document.querySelector("#ba3 h1").innerHTML
    var precoArtesanal3 = document.getElementById("preço-artesanal3").innerHTML
    var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value
    
    if (qtdArtesanal3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value = 1    
    }

    else if (qtdArtesanal3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value = 5
    }
    
    var precoA3 = 12
    var totalArtesanal3 = Number(precoA3 * qtdArtesanal3)
    
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML = `Nome: ${nomeArtesanal3} <br>`
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML += `Preço: ${precoArtesanal3} <br>`
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML += `Unidades: ${qtdArtesanal3} <br>`
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML += `Total: ${totalArtesanal3},00$`

    var botaoRmoverAt3 = document.getElementById("botaoRemoverAt3").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item3At = document.getElementById("item3At").style.display = "block"
    document.getElementById("nomeAt3").innerHTML = `${nomeArtesanal3}` //Adicionando valor ao nome dinâmico do artesanal 3
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_espeto3").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoE3").innerHTML = `${precoArtesanal3}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoE3").innerHTML = `${totalArtesanal3},00$`//--agora
}

function removerAt3(){ //Função para remover da lista o item 3 de burqueres artesanais
   var item3At = document.getElementById("item3At").style.display = "none"
   var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value = ""
   document.getElementById("nomeAt3").innerHTML = ""
   document.getElementById("checado_espeto3").style.display = "none"//fazendo ícone de checado desparecer

   document.getElementById("preco_dinamicoE3").innerHTML = ""
   document.getElementById("subtotal_dinamicoE3").innerHTML = ""
}













function addDoce1(){ //Função referente a adição do item1 da lista de burgueres doces  
    var nomeDoce1 = document.querySelector("#bd1 h1").innerHTML
    var precoDoce1 = document.getElementById("preço-doce1").innerHTML
    var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value
    
    if (qtdDoce1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value = 1    
    }

    else if (qtdDoce1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value = 5
    }
    
    var precoD1 = 7
    var totalDoce1 = Number(precoD1 * qtdDoce1)
    
    var listaDoce1 = document.getElementById("resDoce1").innerHTML = `Nome: ${nomeDoce1} <br>`
    var listaDoce1 = document.getElementById("resDoce1").innerHTML += `Preço: ${precoDoce1} <br>`
    var listaDoce1 = document.getElementById("resDoce1").innerHTML += `Unidades: ${qtdDoce1} <br>`
    var listaDoce1 = document.getElementById("resDoce1").innerHTML += `Total: ${totalDoce1},00$`

    var botaoRemoverDc1 = document.getElementById("botaoRemoverDc1").style.display = "block"
   //Fazendo o botão de pedir aparecer
    var item1Dc = document.getElementById("item1Dc").style.display = "block"
    document.getElementById("nomeDc1").innerHTML = `${nomeDoce1}` //Adicionando valor ao nome dinâmico do doce 1
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_sobremesa1").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoSo1").innerHTML = `${precoDoce1}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoSo1").innerHTML = `${totalDoce1},00$`//--agora
}

function removerDc1(){ //Função para remover da lista o item 1 de burqueres doces
   var item1Dc = document.getElementById("item1Dc").style.display = "none"
   var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value = ""
   document.getElementById("nomeDc1").innerHTML = ""
   document.getElementById("checado_sobremesa1").style.display = "none"//fazendo icone de checado desaparecer

   document.getElementById("preco_dinamicoSo1").innerHTML = ""
   document.getElementById("subtotal_dinamicoSo1").innerHTML = ""

   //removendo os radios
   var moussies = document.getElementsByName("opcoesMousse")
    moussies.forEach(moussie => {        
        moussie.checked = false        
    })
}






function addDoce2(){ //Função referente a adição do item 2 da lista de burgueres doces   
    var nomeDoce2 = document.querySelector("#bd2 h1").innerHTML
    var precoDoce2 = document.getElementById("preço-doce2").innerHTML
    var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value
    
    if (qtdDoce2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value = 1    
    }

    else if (qtdDoce2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value = 5
    }
    
    var precoD2 = 5
    var totalDoce2 = Number(precoD2 * qtdDoce2)
    
    var listaDoce2 = document.getElementById("resDoce2").innerHTML = `Nome: ${nomeDoce2} <br>`
    var listaDoce2 = document.getElementById("resDoce2").innerHTML += `Preço: ${precoDoce2} <br>`
    var listaDoce2 = document.getElementById("resDoce2").innerHTML += `Unidades: ${qtdDoce2} <br>`
    var listaDoce2 = document.getElementById("resDoce2").innerHTML += `Total: ${totalDoce2},00$`

    var botaoRemoverDc2 = document.getElementById("botaoRemoverDc2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2Dc = document.getElementById("item2Dc").style.display = "block"
    document.getElementById("nomeDc2").innerHTML = `${nomeDoce2}` //Adicionando valor ao nome dinâmico do doce 2
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_sobremesa2").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoSo2").innerHTML = `${precoDoce2}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoSo2").innerHTML = `${totalDoce2},00$`//--agora
}

function removerDc2(){ //Função para remover da lista o item 2 de burqueres doces
   var item2Dc = document.getElementById("item2Dc").style.display = "none"
   var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value = ""
    document.getElementById("nomeDc2").innerHTML = ""
   document.getElementById("checado_sobremesa2").style.display = "none"

   document.getElementById("preco_dinamicoSo2").innerHTML = ""
   document.getElementById("subtotal_dinamicoSo2").innerHTML = ""

   //removendo radios
   var sorvetes = document.getElementsByName("opcoesSorvete")
   sorvetes.forEach(sorvete => {        
       sorvete.checked = false        
   })
}






function addDoce3(){ //Função referente a adição do item 3 da lista de burgueres doces   
    var nomeDoce3 = document.querySelector("#bd3 h1").innerHTML
    var precoDoce3 = document.getElementById("preço-doce3").innerHTML
    var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value
    
    if (qtdDoce3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value = 1    
    }

    else if (qtdDoce3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value = 5
    }
    
    var precoD3 = 6
    var totalDoce3 = Number(precoD3 * qtdDoce3)
    
    var listaDoce3 = document.getElementById("resDoce3").innerHTML = `Nome: ${nomeDoce3} <br>`
    var listaDoce3 = document.getElementById("resDoce3").innerHTML += `Preço: ${precoDoce3} <br>`
    var listaDoce3 = document.getElementById("resDoce3").innerHTML += `Unidades: ${qtdDoce3} <br>`
    var listaDoce3 = document.getElementById("resDoce3").innerHTML += `Total: ${totalDoce3},00$`

    var botaoRemoverDc3 = document.getElementById("botaoRemoverDc3").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item3Dc = document.getElementById("item3Dc").style.display = "block" 
    document.getElementById("nomeDc3").innerHTML = `${nomeDoce3}` //Adicionando valor ao nome dinâmico do doce 3
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_sobremesa3").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoSo3").innerHTML = `${precoDoce3}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoSo3").innerHTML = `${totalDoce3},00$`//--agora
}

function removerDc3(){ //Função para remover da lista o item 3 de burqueres doces
   var item3Dc = document.getElementById("item3Dc").style.display = "none"
   var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value = ""
   document.getElementById("nomeDc3").innerHTML = ""
   document.getElementById("checado_sobremesa3").style.display = "none"

   document.getElementById("preco_dinamicoSo3").innerHTML = ""
   document.getElementById("subtotal_dinamicoSo3").innerHTML = ""

   //removendo radios
   var empadoes = document.getElementsByName("opcoesEmpadao")
    empadoes.forEach(empadao => {        
        empadao.checked = false        
    })
}













function addCombo1(){ //Função referente a adição do item 1 da lista de combos  
    var nomeCombo1 = document.querySelector("#c1 h1").innerHTML
    var precoCombo1 = document.getElementById("preço-combo1").innerHTML
    var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value
    
    if (qtdCombo1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value = 1    
    }

    else if (qtdCombo1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value = 5
    }
    
    var precoC1 = 8
    var totalCombo1 = Number(precoC1 * qtdCombo1)
    
    var listaCombo1 = document.getElementById("resCombo1").innerHTML = `Nome: ${nomeCombo1} <br>`
    var listaCombo1 = document.getElementById("resCombo1").innerHTML += `Preço: ${precoCombo1} <br>`
    var listaCombo1 = document.getElementById("resCombo1").innerHTML += `Unidade: ${qtdCombo1} <br>`
    var listaCombo1 = document.getElementById("resCombo1").innerHTML += `Total: ${totalCombo1},00$`

    var botaoRemoverCb1 = document.getElementById("botaoRemoverCb1").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item1Cb = document.getElementById("item1Cb").style.display = "block"
    document.getElementById("nomeCb1").innerHTML = `${nomeCombo1}` //Adicionando valor ao nome dinâmico do combo 1
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_bebida1").style.display = "block"
    
    //adicionando valor ao preco dinamico
    document.getElementById("preco_dinamicoB1").innerHTML = `${precoCombo1}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoB1").innerHTML = `${totalCombo1},00$`//--agora
}

function removerCb1(){ //Função para remover da lista o item 1 de combos
   var item1Cb = document.getElementById("item1Cb").style.display = "none"
   var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value = ""
   document.getElementById("nomeCb1").innerHTML = ""
   document.getElementById("nomeCb1").innerHTML = ""
   document.getElementById("checado_bebida1").style.display = "none"

   document.getElementById("preco_dinamicoB1").innerHTML = ""     
   document.getElementById("subtotal_dinamicoB1").innerHTML = ""
   
   //removendo radios
   var sucos = document.getElementsByName("opcoesSuco")
    sucos.forEach(suco => {        
        suco.checked = false        
    })
}






function addCombo2(){ //Função referente a adição do item 2 da lista de combos   
    var nomeCombo2 = document.querySelector("#c2 h1").innerHTML
    var precoCombo2 = document.getElementById("preço-combo2").innerHTML
    var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value
    
    if (qtdCombo2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value = 1    
    }

    else if (qtdCombo2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value = 5
    }
    
    var precoC2 = 7
    var totalCombo2 = Number(precoC2 * qtdCombo2)
    
    var listaCombo2 = document.getElementById("resCombo2").innerHTML = `Nome: ${nomeCombo2} <br>`
    var listaCombo2 = document.getElementById("resCombo2").innerHTML += `Preço: ${precoCombo2} <br>`
    var listaCombo2 = document.getElementById("resCombo2").innerHTML += `Unidades: ${qtdCombo2} <br>`
    var listaCombo2 = document.getElementById("resCombo2").innerHTML += `Total: ${totalCombo2},00$`

    var botaoRemoverCb2 = document.getElementById("botaoRemoverCb2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2Cb = document.getElementById("item2Cb").style.display = "block"
    document.getElementById("nomeCb2").innerHTML = `${nomeCombo2}` //Adicionando valor ao nome dinâmico do combo 2
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_bebida2").style.display = "block"
    
    document.getElementById("preco_dinamicoB2").innerHTML = `${precoCombo2}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoB2").innerHTML = `${totalCombo2},00$`//--agora
}

function removerCb2(){ //Função para remover da lista o item 2 de combos
   var item2Cb = document.getElementById("item2Cb").style.display = "none"
   var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value = ""
   document.getElementById("nomeCb2").innerHTML = ""
   document.getElementById("checado_bebida2").style.display = "none"

   document.getElementById("preco_dinamicoB2").innerHTML = ""
   document.getElementById("subtotal_dinamicoB2").innerHTML = ""

   //removendo radios
   var refris = document.getElementsByName("opcoesRefri")
    refris.forEach(refri => {        
        refri.checked = false        
    })
}






function addCombo3(){ //Função referente a adição do item 3 da lista de combos  
    var nomeCombo3 = document.querySelector("#c3 h1").innerHTML
    var precoCombo3 = document.getElementById("preço-combo3").innerHTML
    var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value
    
    if (qtdCombo3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value = 1    
    }

    else if (qtdCombo3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value = 5
    }
    
    var precoC3 = 11
    var totalCombo3 = Number(precoC3 * qtdCombo3)
    
    var listaCombo3 = document.getElementById("resCombo3").innerHTML = `Nome: ${nomeCombo3} <br>`
    var listaCombo3 = document.getElementById("resCombo3").innerHTML += `Preço: ${precoCombo3} <br>`
    var listaCombo3 = document.getElementById("resCombo3").innerHTML += `Unidades: ${qtdCombo3} <br>`
    var listaCombo3 = document.getElementById("resCombo3").innerHTML += `Total: ${totalCombo3},00$`

    var botaoRemoverCb3 = document.getElementById("botaoRemoverCb3").style.display = "block"
     //Fazendo o botão de pedir aparecer
    var item3Cb = document.getElementById("item3Cb").style.display = "block"
    document.getElementById("nomeCb3").innerHTML = `${nomeCombo3}` //Adicionando valor ao nome dinâmico do combo 3
    //ADICIONANDO O ÍCONE DE CHECADO
    document.getElementById("checado_bebida3").style.display = "block"
    
    document.getElementById("preco_dinamicoB3").innerHTML = `${precoCombo3}`//---agora
    //adicionando valor ao subtotal dinâmico
    document.getElementById("subtotal_dinamicoB3").innerHTML = `${totalCombo3},00$`//--agora
}

function removerCb3(){ //Função para remover da lista o item 3 de combos
   var item3Cb = document.getElementById("item3Cb").style.display = "none"
   var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value = ""
    document.getElementById("nomeCb3").innerHTML = ""
   document.getElementById("checado_bebida3").style.display = "none"

   document.getElementById("preco_dinamicoB3").innerHTML = ""
   document.getElementById("subtotal_dinamicoB3").innerHTML = ""

   //removendo radios
   var coqueteis = document.getElementsByName("opcoesCoquetel")
    coqueteis.forEach(coquetel => {        
        coquetel.checked = false        
    })
}



































// -------------------------- FUNÇÃO REFERENTE A SOMA TOTAL DO PREÇO DE TODOS OS PRODUTOS ESCOLHIDOS ------------------
function somar(){
    // Pegando o preço e a quantidade dos burqueres tradicionais adicionados na lista
    var precoTr1 = 20
    var qtdTr1 = document.querySelector("#bt1 #qtdTradicional1").value
    
    var precoTr2 = 25
    var qtdTr2 = document.querySelector("#bt2 #qtdTradicional2").value

    var precoTr3 = 30
    var qtdTr3 = document.querySelector("#bt3 #qtdTradicional3").value

    var precoTr4 = 26
    var qtdTr4 = document.querySelector("#bt4 #qtdTradicional4").value

    // Pegando o preço e a quantidade dos burqueres artesanais adicionados na lista
    var precoAt1 = 28
    var qtdAt1 = document.querySelector("#ba1 #qtdArtesanal1").value
    
    var precoAt2 = 15
    var qtdAt2 = document.querySelector("#ba2 #qtdArtesanal2").value

    var precoAt3 = 12
    var qtdAt3 = document.querySelector("#ba3 #qtdArtesanal3").value

    // Pegando o preço e a quantidade dos burqueres doces adicionados na lista
    var precoDc1 = 7
    var qtdDc1 = document.querySelector("#bd1 #qtdDoce1").value
    
    var precoDc2 = 5
    var qtdDc2 = document.querySelector("#bd2 #qtdDoce2").value

    var precoDc3 = 6
    var qtdDc3 = document.querySelector("#bd3 #qtdDoce3").value

    // Pegando o preço e a quantidade dos combos adicionados na lista
    var precoCb1 = 8
    var qtdCb1 = document.querySelector("#c1 #qtdCombo1").value
    
    var precoCb2 = 7
    var qtdCb2 = document.querySelector("#c2 #qtdCombo2").value

    var precoCb3 = 11
    var qtdCb3 = document.querySelector("#c3 #qtdCombo3").value

                                             

                                                              /*------------------------ TRADICIONAIS 1, 2, 3  e 4 --------------------*/          /*-------------- ARTESANAIS 1, 2  e 3 ---------------*/           /*---------------- DOCES 1, 2  e 3 -----------------*/           /*---------------- COMBOS 1, 2  e 3 -----------------*/
    var TOTAL = document.getElementById("TOTAL").innerHTML = (precoTr1*qtdTr1) + (precoTr2*qtdTr2) + (precoTr3*qtdTr3) + (precoTr4*qtdTr4) +      (precoAt1*qtdAt1) + (precoAt2*qtdAt2) + (precoAt3*qtdAt3) +      (precoDc1*qtdDc1) + (precoDc2*qtdDc2) + (precoDc3*qtdDc3) +      (precoCb1*qtdCb1) + (precoCb2*qtdCb2) + (precoCb3*qtdCb3) +",00$"
    
    if (TOTAL == "0,00$"){
        document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
        alert("Adicione algo à lista")
    }
    else{
        document.getElementById("modoPagamento-localizacao-botao").style.display = "flex"
        document.getElementById("FundoEscuroDoFormulario").style.display = "block"
    }

    
    var TotalFormulario = document.getElementById("TOTAL").innerHTML
    document.getElementById("totalDoFormulario").innerHTML = TotalFormulario
    
    return TOTAL
}

function total(){
    // Pegando o preço e a quantidade dos burqueres tradicionais adicionados na lista
    var precoTr1 = 20
    var qtdTr1 = document.querySelector("#bt1 #qtdTradicional1").value
    
    var precoTr2 = 25
    var qtdTr2 = document.querySelector("#bt2 #qtdTradicional2").value

    var precoTr3 = 30
    var qtdTr3 = document.querySelector("#bt3 #qtdTradicional3").value

    var precoTr4 = 26
    var qtdTr4 = document.querySelector("#bt4 #qtdTradicional4").value
    // Pegando o preço e a quantidade dos burqueres artesanais adicionados na lista
    var precoAt1 = 28
    var qtdAt1 = document.querySelector("#ba1 #qtdArtesanal1").value
    
    var precoAt2 = 15
    var qtdAt2 = document.querySelector("#ba2 #qtdArtesanal2").value

    var precoAt3 = 12
    var qtdAt3 = document.querySelector("#ba3 #qtdArtesanal3").value
    // Pegando o preço e a quantidade dos burqueres doces adicionados na lista
    var precoDc1 = 7
    var qtdDc1 = document.querySelector("#bd1 #qtdDoce1").value
    
    var precoDc2 = 5
    var qtdDc2 = document.querySelector("#bd2 #qtdDoce2").value

    var precoDc3 = 6
    var qtdDc3 = document.querySelector("#bd3 #qtdDoce3").value
    // Pegando o preço e a quantidade dos combos adicionados na lista
    var precoCb1 = 8
    var qtdCb1 = document.querySelector("#c1 #qtdCombo1").value
    
    var precoCb2 = 7
    var qtdCb2 = document.querySelector("#c2 #qtdCombo2").value

    var precoCb3 = 11
    var qtdCb3 = document.querySelector("#c3 #qtdCombo3").value                                    

                                                              /*------------------------ TRADICIONAIS 1, 2, 3  e 4 --------------------*/          /*-------------- ARTESANAIS 1, 2  e 3 ---------------*/           /*---------------- DOCES 1, 2  e 3 -----------------*/           /*---------------- COMBOS 1, 2  e 3 -----------------*/
    var total = (precoTr1*qtdTr1) + (precoTr2*qtdTr2) + (precoTr3*qtdTr3) + (precoTr4*qtdTr4) +      (precoAt1*qtdAt1) + (precoAt2*qtdAt2) + (precoAt3*qtdAt3) +      (precoDc1*qtdDc1) + (precoDc2*qtdDc2) + (precoDc3*qtdDc3) +      (precoCb1*qtdCb1) + (precoCb2*qtdCb2) + (precoCb3*qtdCb3)
    return total
}

















// -------------------SCRIPT REFERENTE A0 AVISO, CASO NADA FOR ADICIONADO AO CARRINHO---------------------------
/*function avisoFinal(){
    if (somar() == "0,00$"){
        alert("Adicione algo à Lista de Compras antes de prosseguir")
        document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
    }
    else{
        document.getElementById("modoPagamento-localizacao-botao").style.display = "flex"
        var TotalFormulario = document.getElementById("TOTAL").innerHTML
        document.getElementById("totalDoFormulario").innerHTML = TotalFormulario
        var botãoPedir = document.getElementById("pedir").style.display = "none"
    }
}

*/




















//SCRIPT REFERENTE AO PREENCHIMENTO DOS DADOS PESSOAIS E A CONCUSÃO DA COMPRA PARA ENVIAR OS DADOS PARA O WHATSZAP
function copiar_senha(){
    var password = document.getElementById("senha")
    var senha_do_form = document.getElementById("senha_form")
    senha_do_form.value = password.value
}

function concluir(){
    let senha = document.getElementById("senha_form")
    let senha_cadastro = document.getElementById("senha")

    if(senha_cadastro.value == senha.value){//-----------------------------------CONDIÇÃO DA SENHA---------------------------------------------------------------
        //var pix = document.getElementById("chavePix").value
        //var dinheiro = document.getElementById("din").value
        //var cartao = document.getElementById("cart").value
        var bairro = document.getElementById("bairro").value
        var rua = document.getElementById("rua").value
        var casa = document.getElementById("casa").value
        //var observacoes = document.getElementById("observacoes").value
    
        /*if (pix != "" && dinheiro != "" && cartao != ""){
            alert("Escolha apenas uma opção de pagamento")
        }
        else if (pix != "" && dinheiro != ""){
            alert("Escolha apenas uma opção de pagamento")
        }
        else if (pix != "" && cartao != ""){
            alert("Escolha apenas uma opção de pagamento")
        }
        else if (dinheiro != "" && cartao != ""){
            alert("Escolha apenas uma opção de pagamento")
        }

        else if (pix == "" && dinheiro == "" && cartao == ""){
            alert("Preencha os dados de pagamento antes de prosseguir")
        }*/
        
        
        if (bairro != "" && rua != "" && casa != ""){
            //--------------------colocando dados dos inputs no link do whatsapp----------------------------------------
            //pegando os values dos inputs radios das sub opçoes de Moussie
            function opcoesMoussie(){
                var opcoesMoussie = document.getElementsByName("opcoesMousse")
                var moussie_escolhido = document.getElementById("moussie_escolhido")
                var de = ""

                opcoesMoussie.forEach(opcaoMoussie => {
                    if (opcaoMoussie.checked){
                        moussie_escolhido.innerHTML = opcaoMoussie.value
                        de = "de"+" "
                    }
                })
                return de + moussie_escolhido.innerHTML
            }
            //pegando os values dos inputs radios das sub opçoes de Sorvete
            function opcoesSorvete(){
                var opcoesSorvete = document.getElementsByName("opcoesSorvete")
                var sorvete_escolhido = document.getElementById("sorvete_escolhido")
                var de = ""

                opcoesSorvete.forEach(opcaoSorvete => {
                    if (opcaoSorvete.checked){
                        sorvete_escolhido.innerHTML = opcaoSorvete.value
                        de = "de"+" "
                    }
                })
                return de + sorvete_escolhido.innerHTML
            }
            //pegando os values dos inputs radios das sub opçoes de Empadão
            function opcoesEmpadao(){
                var opcoesEmpadao = document.getElementsByName("opcoesEmpadao")
                var empadao_escolhido = document.getElementById("empadao_escolhido")
                var de = ""

                opcoesEmpadao.forEach(opcaoEmpadao => {
                    if (opcaoEmpadao.checked){
                        empadao_escolhido.innerHTML = opcaoEmpadao.value
                        de = "de"+" "
                    }
                })
                return de + empadao_escolhido.innerHTML
            }
            //pegando os values dos inputs radios das sub opçoes de Suco
            function opcoesSuco(){
                var opcoesSuco = document.getElementsByName("opcoesSuco")
                var suco_escolhido = document.getElementById("suco_escolhido")
                var de = ""

                opcoesSuco.forEach(opcaoSuco => {
                    if (opcaoSuco.checked){
                        suco_escolhido.innerHTML = opcaoSuco.value
                        de = "de"+" "
                    }
                })
                return de + suco_escolhido.innerHTML
            }
            //pegando os values dos inputs radios das sub opçoes de Refrigerante
            function opcoesRefri(){
                var opcoesRefri = document.getElementsByName("opcoesRefri")
                var refri_escolhido = document.getElementById("refri_escolhido")
                
                opcoesRefri.forEach(opcaoRefri => {
                    if (opcaoRefri.checked){
                        refri_escolhido.innerHTML = opcaoRefri.value  
                    }
                })
                return refri_escolhido.innerHTML
            }
            //pegando os values dos inputs radios das sub opçoes de Coquetel
            function opcoesCoquetel(){
                var opcoesCoquetel = document.getElementsByName("opcoesCoquetel")
                var coquetel_escolhido = document.getElementById("coquetel_escolhido")
                var de = ""

                opcoesCoquetel.forEach(opcaoCoquetel => {
                    if (opcaoCoquetel.checked){
                        coquetel_escolhido.innerHTML = opcaoCoquetel.value
                        de = "de"+" "
                    }
                })
                return de + coquetel_escolhido.innerHTML
            }

            //pegando os valores dos inputs radio dos métodos de pagamento e calculando troco
            function dinhei(){
                var qtdDin = document.getElementById("din")
                var quantia = ""
                if (qtdDin.value != ""){
                    quantia = qtdDin.value
                }
                return quantia
            }

            function troco(){
                var troco = Number(dinhei()) - Number(total())
                var valorPago = dinhei()
                var se_opcao_dinheiro = ""
                var separar_res_troco = ""
                var simboloDinheiro = ""

                if (valorPago != ""){
                    se_opcao_dinheiro = troco
                    separar_res_troco = " | " + "*Troco: *"
                    simboloDinheiro = ",00$"
                }
                return separar_res_troco + se_opcao_dinheiro + simboloDinheiro
            }

            function simbolo_dinheiro_pagamento(){
                var qtdDin = document.getElementById("din")
                var simboloDinheiro = ""
                if (qtdDin.value != ""){
                    simboloDinheiro = ",00$"
                }
                return simboloDinheiro
            }

            function opcoesPagamento(){
                var opcoesPagamento = document.getElementsByName("opcao")
                var opcao_pagamento_escolhida = ""
                espaco = ""

                opcoesPagamento.forEach(opcaoPagamento => {
                    if (opcaoPagamento.checked){
                        opcao_pagamento_escolhida = opcaoPagamento.value
                        if (opcaoPagamento.value == "Dinheiro"){
                            espaco = " "
                        }
                    }
                })
                return opcao_pagamento_escolhida + espaco
            }
            
            //pegando os nomes dinâmicos
            var nomeTr1 = document.getElementById("nomeTr1").innerHTML
            var nomeTr2 = document.getElementById("nomeTr2").innerHTML
            var nomeTr3 = document.getElementById("nomeTr3").innerHTML
            var nomeTr4 = document.getElementById("nomeTr4").innerHTML
            var nomeAt1 = document.getElementById("nomeAt1").innerHTML
            var nomeAt2 = document.getElementById("nomeAt2").innerHTML
            var nomeAt3 = document.getElementById("nomeAt3").innerHTML
            var nomeDc1 = document.getElementById("nomeDc1").innerHTML
            var nomeDc2 = document.getElementById("nomeDc2").innerHTML
            var nomeDc3 = document.getElementById("nomeDc3").innerHTML
            var nomeCb1 = document.getElementById("nomeCb1").innerHTML
            var nomeCb2 = document.getElementById("nomeCb2").innerHTML
            var nomeCb3 = document.getElementById("nomeCb3").innerHTML
            //pegando a quantidade dos tradicionais
            var qtdTr1 = document.querySelector("#bt1 #qtdTradicional1").value
            var qtdTr2 = document.querySelector("#bt2 #qtdTradicional2").value
            var qtdTr3 = document.querySelector("#bt3 #qtdTradicional3").value
            var qtdTr4 = document.querySelector("#bt4 #qtdTradicional4").value
            //pegando a quantidade dos artesanais
            var qtdAt1 = document.querySelector("#ba1 #qtdArtesanal1").value
            var qtdAt2 = document.querySelector("#ba2 #qtdArtesanal2").value
            var qtdAt3 = document.querySelector("#ba3 #qtdArtesanal3").value
            //pegando a quantidade dos doces
            var qtdDc1 = document.querySelector("#bd1 #qtdDoce1").value
            var qtdDc2 = document.querySelector("#bd2 #qtdDoce2").value
            var qtdDc3 = document.querySelector("#bd3 #qtdDoce3").value
            //pegando a quantidade dos combos
            var qtdCb1 = document.querySelector("#c1 #qtdCombo1").value
            var qtdCb2 = document.querySelector("#c2 #qtdCombo2").value
            var qtdCb3 = document.querySelector("#c3 #qtdCombo3").value


            //pegando os valores dos inputs do formulário
            var cas = document.getElementById("casa").value
            var ru = document.getElementById("rua").value
            var obs = document.getElementById("observacoes").value
            var bair = document.getElementById("bairro").value
            var precoBurger = document.getElementById("precoBurger").value = somar()
            

            //Enviando os dados para o link do whatapp
            var enviarZap = document.getElementById("enviarZap")                                                                                    //------------------tradicionais e suas quantidades-----------------------       //-------------artesanais e suas quantidades----------          //-----------------------------------------------doces e suas quantidades-------------------------------------------   //------------------------------------combos e suas quantidades--------------------------------------
            var link = `https://wa.me/5592991635554?text=*CLIENTE:* ${cadastrar()} | *PRODUTO:* ${qtdTr1}${ nomeTr1} ${qtdTr2}${ nomeTr2} ${qtdTr3}${ nomeTr3} ${qtdTr4}${ nomeTr4} ${qtdAt1}${ nomeAt1} ${qtdAt2}${ nomeAt2} ${qtdAt3}${ nomeAt3}  ${qtdDc1}${ nomeDc1} ${opcoesMoussie()} ${qtdDc2}${ nomeDc2} ${opcoesSorvete()} ${qtdDc3}${ nomeDc3} ${opcoesEmpadao()} ${qtdCb1}${ nomeCb1} ${opcoesSuco()} ${qtdCb2}${opcoesRefri()} ${qtdCb3}${ nomeCb3} ${opcoesCoquetel()} | *TOTAL:* ${ precoBurger} | *LOCALIZAÇÃO:* ${bair}, Rua ${ru}, casa ${cas} | *Método de Pagamento:* ${opcoesPagamento()} ${dinhei()}${simbolo_dinheiro_pagamento()} ${troco()} | *OBS:* ${ obs}`            
            enviarZap.setAttribute('href',link)



            //FUNÇÕES PARA PASSAR OS DADOS DOS PRODUTOS COMPRADOS PARA O HISTÓRICO-------------------------------------------------------------------!!!
            function criando_historico(){
                var historico = document.getElementById("historicos")
                var hora = document.getElementById("relogio").innerHTML

                //criando tabela---------------------------------
                var tabela = document.createElement("table")
                tabela.setAttribute('class', 'tabela')               
                var linha = document.createElement("tr")
                linha.style.backgroundColor = "#f4f4f4"
                tabela.appendChild(linha)//tabela principal

                var coluna_produto = document.createElement("th")
                var coluna_preco = document.createElement("th")
                var coluna_subTotal = document.createElement("th")
                var coluna_total = document.createElement("th")
                var coluna_modoPagamento = document.createElement("th")

                coluna_produto.innerHTML = "PRODUTOS"
                coluna_preco.innerHTML = "PREÇO"
                coluna_subTotal.innerHTML = "SUBTOTAL"
                coluna_total.innerHTML = "TOTAL"
                coluna_modoPagamento.innerHTML = "PAGAMENTO"

                linha.appendChild(coluna_produto)
                linha.appendChild(coluna_preco)
                linha.appendChild(coluna_subTotal)
                linha.appendChild(coluna_total)
                linha.appendChild(coluna_modoPagamento)
                //------------------------------------------------

                var lista_produtos = ""//será a lista de todos os nomes dos produtos comprados
                var lista_precos = ""//será a lista de preços de todos os produtos comprados
                var lista_subtotal = ""//será a lista de todos os subotais dos produtos comprados
               
                var simples1 = document.getElementById("nomeTr1")//-------------------------------------------------------------------------------------------------------------------------------------
                if(simples1.innerHTML != ""){
                    lista_produtos = `${qtdTr1} ${simples1.innerHTML}<br>`
                    //preco
                    var preco_s1 = document.getElementById("preco_dinamicoS1")
                    lista_precos = `${preco_s1.innerHTML}<br>`
                    //subtotal
                    var tt_s1 = document.getElementById("subtotal_dinamicoS1")
                    lista_subtotal = `${tt_s1.innerHTML}<br>`
                }

                var simples2 = document.getElementById("nomeTr2")
                if(simples2.innerHTML != ""){
                    lista_produtos += `${qtdTr2} ${simples2.innerHTML}<br>`
                    //preco
                    var preco_s2 = document.getElementById("preco_dinamicoS2")
                    lista_precos += `${preco_s2.innerHTML}<br>`
                    //subtotal
                    var tt_s2 = document.getElementById("subtotal_dinamicoS2")
                    lista_subtotal += `${tt_s2.innerHTML}<br>`
                }

                var simples3 = document.getElementById("nomeTr3")
                if(simples3.innerHTML != ""){
                    lista_produtos += ` ${qtdTr3} ${simples3.innerHTML}<br>`
                    //preco
                    var preco_s3 = document.getElementById("preco_dinamicoS3")
                    lista_precos += `${preco_s3.innerHTML}<br>`
                    //subtotal
                    var tt_s3 = document.getElementById("subtotal_dinamicoS3")
                    lista_subtotal += `${tt_s3.innerHTML}<br>`
                }

                var simples4 = document.getElementById("nomeTr4")
                if(simples4.innerHTML != ""){
                    lista_produtos += `${qtdTr4} ${simples4.innerHTML}<br>`
                    //preco
                    var preco_s4 = document.getElementById("preco_dinamicoS4")
                    lista_precos += `${preco_s4.innerHTML}<br>`
                    //subtotal
                    var tt_s4 = document.getElementById("subtotal_dinamicoS4")
                    lista_subtotal += `${tt_s4.innerHTML}<br>`
                }

                var espeto1 = document.getElementById("nomeAt1")
                if(espeto1.innerHTML != ""){
                    lista_produtos += `${qtdAt1} ${espeto1.innerHTML}<br>`
                    //preco
                    var preco_e1 = document.getElementById("preco_dinamicoE1")
                    lista_precos += `${preco_e1.innerHTML}<br>`
                    //subtotal
                    var tt_e1 = document.getElementById("subtotal_dinamicoE1")
                    lista_subtotal += `${tt_e1.innerHTML}<br>`
                }

                var espeto2 = document.getElementById("nomeAt2")
                if(espeto2.innerHTML != ""){
                    lista_produtos += `${qtdAt2} ${espeto2.innerHTML}<br>`
                    //preco
                    var preco_e2 = document.getElementById("preco_dinamicoE2")
                    lista_precos += `${preco_e2.innerHTML}<br>`
                    //subtotal
                    var tt_e2 = document.getElementById("subtotal_dinamicoE2")
                    lista_subtotal += `${tt_e2.innerHTML}<br>`
                }

                var espeto3 = document.getElementById("nomeAt3")
                if(espeto3.innerHTML != ""){
                    lista_produtos += `${qtdAt3} ${espeto3.innerHTML}<br>`
                    //preco
                    var preco_e3 = document.getElementById("preco_dinamicoE3")
                    lista_precos += `${preco_e3.innerHTML}<br>`
                    //subtotal
                    var tt_e3 = document.getElementById("subtotal_dinamicoE3")
                    lista_subtotal += `${tt_e3.innerHTML}<br>`
                }

                var sobremesa1 = document.getElementById("nomeDc1")
                if(sobremesa1.innerHTML != ""){
                    lista_produtos += `${qtdDc1} ${nomeDc1} ${opcoesMoussie()}<br>`
                    //preco
                    var preco_so1 = document.getElementById("preco_dinamicoSo1")
                    lista_precos += `${preco_so1.innerHTML}<br>`
                    //subtotal
                    var tt_so1 = document.getElementById("subtotal_dinamicoSo1")
                    lista_subtotal += `${tt_so1.innerHTML}<br>`
                }

                var sobremesa2 = document.getElementById("nomeDc2")
                if(sobremesa2.innerHTML != ""){
                    lista_produtos += `${qtdDc2} ${nomeDc2} ${opcoesSorvete()}<br>`
                    //preco
                    var preco_so2 = document.getElementById("preco_dinamicoSo2")
                    lista_precos += `${preco_so2.innerHTML}<br>`
                    //subtotal
                    var tt_so2 = document.getElementById("subtotal_dinamicoSo2")
                    lista_subtotal += `${tt_so2.innerHTML}<br>`
                }

                var sobremesa3 = document.getElementById("nomeDc3")
                if(sobremesa3.innerHTML != ""){
                    lista_produtos += `${qtdDc3} ${nomeDc3} ${opcoesEmpadao()}<br>`
                    //preco
                    var preco_so3 = document.getElementById("preco_dinamicoSo3")
                    lista_precos += `${preco_so3.innerHTML}<br>`
                    //subtotal
                    var tt_so3 = document.getElementById("subtotal_dinamicoSo3")
                    lista_subtotal += `${tt_so3.innerHTML}<br>`
                }

                var bebida1 = document.getElementById("nomeCb1")
                if(bebida1.innerHTML != ""){
                    lista_produtos += `${qtdCb1} ${nomeCb1} ${opcoesSuco()}<br>`
                    //preco
                    var preco_b1 = document.getElementById("preco_dinamicoB1")
                    lista_precos += `${preco_b1.innerHTML}<br>`
                    //subtotal
                    var tt_b1 = document.getElementById("subtotal_dinamicoB1")
                    lista_subtotal += `${tt_b1.innerHTML}<br>`
                }

                var bebida2 = document.getElementById("nomeCb2")
                if(bebida2.innerHTML != ""){
                    lista_produtos += `${qtdCb2} ${nomeCb2} ${opcoesRefri()}<br>`
                    //preco
                    var preco_b2 = document.getElementById("preco_dinamicoB2")
                    lista_precos += `${preco_b2.innerHTML}<br>`
                    //subtotal
                    var tt_b2 = document.getElementById("subtotal_dinamicoB2")
                    lista_subtotal += `${tt_b2.innerHTML}<br>`
                }

                var bebida3 = document.getElementById("nomeCb3")
                if(bebida3.innerHTML != ""){
                    lista_produtos += `${qtdCb3} ${nomeCb3} ${opcoesCoquetel()}<br>`
                    //preco
                    var preco_b3 = document.getElementById("preco_dinamicoB3")
                    lista_precos += `${preco_b3.innerHTML}<br>`
                    //subtotal
                    var tt_b3 = document.getElementById("subtotal_dinamicoB3")
                    lista_subtotal += `${tt_b3.innerHTML}<br>`
                }
                           

            
                //inserindo coluna do nome do produto comprado na linha dos registros
                var linha_registro = document.createElement("tr")
                tabela.appendChild(linha_registro)//tabela principal

                var coluna_produto_comprado = document.createElement("td")
                coluna_produto_comprado.style.width = "330px"
                coluna_produto_comprado.style.minWidth = "329px"
                coluna_produto_comprado.style.textAlign = "left"
                coluna_produto_comprado.innerHTML = lista_produtos
                linha_registro.appendChild(coluna_produto_comprado)

                //inserindo coluna do preço do produto comprado na linha dos registros
                var coluna_preco_produto_comprado = document.createElement("td")
                coluna_preco_produto_comprado.innerHTML = lista_precos
                linha_registro.appendChild(coluna_preco_produto_comprado)

                //inserindo coluna do subtotal do produto comprado na linha dos registros
                var coluna_subTotal_produto_comprado = document.createElement("td")
                coluna_subTotal_produto_comprado.innerHTML = lista_subtotal
                linha_registro.appendChild(coluna_subTotal_produto_comprado)

                //hora
                var hora_compra = document.createElement("div")
                hora_compra.setAttribute('class', 'hora')
                hora_compra.innerHTML = hora

                //numero da compra
                //var numero_compra = document.createElement("div")
               // numero_compra.setAttribute('name', 'registro_id')
                //var numero_compras = document.getElementsByName("registro_id")
                //numero_compras.length
                //var contar_registro = numero_compra
                //numero_compra.innerHTML = "Compra número: " + contar_registro
                
                //total a pagar
                var coluna_total_registro = document.createElement("td")
                coluna_total_registro.innerHTML = total() + ",00$"
                linha_registro.appendChild(coluna_total_registro)

                //método de pagamento
                var coluna_metodo_pagamento = document.createElement("td")
                coluna_metodo_pagamento.innerHTML = opcoesPagamento()
                linha_registro.appendChild(coluna_metodo_pagamento)
                               
                //inserindo div criadas no elemento pai de id historicos
                historico.appendChild(hora_compra)                             
                historico.appendChild(tabela)
            }
            setTimeout(criando_historico, 500)
            


            function zerando_valores(){
                //Zerando os valores dos inputs das senhas, da localização, da obsevação, dos nomes dos burgueres e das quantidades
                document.getElementById("din").value = ""
                document.getElementById("bairro").value = ""
                document.getElementById("rua").value = ""
                document.getElementById("casa").value = ""
                document.getElementById("observacoes").value = ""

                document.getElementById("nomeTr1").innerHTML = ""
                document.getElementById("nomeTr2").innerHTML = ""
                document.getElementById("nomeTr3").innerHTML = ""
                document.getElementById("nomeTr4").innerHTML = ""
                document.getElementById("nomeAt1").innerHTML = ""
                document.getElementById("nomeAt2").innerHTML = ""
                document.getElementById("nomeAt3").innerHTML = ""
                document.getElementById("nomeDc1").innerHTML = ""
                document.getElementById("nomeDc2").innerHTML = ""
                document.getElementById("nomeDc3").innerHTML = ""
                document.getElementById("nomeCb1").innerHTML = ""
                document.getElementById("nomeCb2").innerHTML = ""
                document.getElementById("nomeCb3").innerHTML = ""

                document.querySelector("#bt1 #qtdTradicional1").value = "" 
                document.querySelector("#bt2 #qtdTradicional2").value = ""
                document.querySelector("#bt3 #qtdTradicional3").value = ""
                document.querySelector("#bt4 #qtdTradicional4").value = ""
                document.querySelector("#ba1 #qtdArtesanal1").value = ""
                document.querySelector("#ba2 #qtdArtesanal2").value = ""
                document.querySelector("#ba3 #qtdArtesanal3").value = ""
                document.querySelector("#bd1 #qtdDoce1").value = ""
                document.querySelector("#bd2 #qtdDoce2").value = ""
                document.querySelector("#bd3 #qtdDoce3").value = ""
                document.querySelector("#c1 #qtdCombo1").value = ""
                document.querySelector("#c2 #qtdCombo2").value = ""
                document.querySelector("#c3 #qtdCombo3").value = ""

                //DELETANDO OS VALORES DOS NOMES DINÂMICOS DAS SUBOPCOES
                document.getElementById("moussie_escolhido").innerHTML = ""
                document.getElementById("sorvete_escolhido").innerHTML = ""
                document.getElementById("empadao_escolhido").innerHTML = ""
                document.getElementById("suco_escolhido").innerHTML = ""
                document.getElementById("refri_escolhido").innerHTML = ""
                document.getElementById("coquetel_escolhido").innerHTML = ""

                //DELETANDO OS VALORES DOS RADIOS DAS SUBOPCOES
                var moussies = document.getElementsByName("opcoesMousse")
                moussies.forEach(moussie => {        
                    moussie.checked = false        
                })
                var sorvetes = document.getElementsByName("opcoesSorvete")
                sorvetes.forEach(sorvete => {        
                    sorvete.checked = false        
                })
                var empadoes = document.getElementsByName("opcoesEmpadao")
                empadoes.forEach(empadao => {        
                    empadao.checked = false        
                })
                var sucos = document.getElementsByName("opcoesSuco")
                sucos.forEach(suco => {        
                    suco.checked = false        
                })
                var refris = document.getElementsByName("opcoesRefri")
                refris.forEach(refri => {        
                    refri.checked = false        
                })
                var coqueteis = document.getElementsByName("opcoesCoquetel")
                coqueteis.forEach(coquetel => {        
                    coquetel.checked = false        
                })

                //DELETANDO OS PREÇOS DINÂMICOS
                document.getElementById("preco_dinamicoS1").innerHTML = ""
                document.getElementById("preco_dinamicoS2").innerHTML = ""
                document.getElementById("preco_dinamicoS3").innerHTML = ""
                document.getElementById("preco_dinamicoS4").innerHTML = ""
                document.getElementById("preco_dinamicoE1").innerHTML = ""
                document.getElementById("preco_dinamicoE2").innerHTML = ""
                document.getElementById("preco_dinamicoE3").innerHTML = ""
                document.getElementById("preco_dinamicoSo1").innerHTML = ""
                document.getElementById("preco_dinamicoSo2").innerHTML = ""
                document.getElementById("preco_dinamicoSo3").innerHTML = ""
                document.getElementById("preco_dinamicoB1").innerHTML = ""
                document.getElementById("preco_dinamicoB2").innerHTML = ""
                document.getElementById("preco_dinamicoB3").innerHTML = ""

                //DELETANDO OS SUBTOTAIS DINÂMICOS
                document.getElementById("subtotal_dinamicoS1").innerHTML = ""
                document.getElementById("subtotal_dinamicoS2").innerHTML = ""
                document.getElementById("subtotal_dinamicoS3").innerHTML = ""
                document.getElementById("subtotal_dinamicoS4").innerHTML = ""
                document.getElementById("subtotal_dinamicoE1").innerHTML = ""
                document.getElementById("subtotal_dinamicoE2").innerHTML = ""
                document.getElementById("subtotal_dinamicoE3").innerHTML = ""
                document.getElementById("subtotal_dinamicoSo1").innerHTML = ""
                document.getElementById("subtotal_dinamicoSo2").innerHTML = ""
                document.getElementById("subtotal_dinamicoSo3").innerHTML = ""
                document.getElementById("subtotal_dinamicoB1").innerHTML = ""
                document.getElementById("subtotal_dinamicoB2").innerHTML = ""
                document.getElementById("subtotal_dinamicoB3").innerHTML = ""

                //APAGANDO AVISO HISTÓRICO
                document.getElementById("avisoHistorico").style.display = "none"                
            }
            setTimeout(zerando_valores, 600)


            //fazendo a tela do formulário e o fundo escuro desaparecer
            document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
            document.getElementById("FundoEscuroDoFormulario").style.display = "none"

            //fazendo os itens escolhidos da lista de compras desaparecerem
            document.getElementById("item1Tr").style.display = "none"
            document.getElementById("item2Tr").style.display = "none"
            document.getElementById("item3Tr").style.display = "none"
            document.getElementById("item4Tr").style.display = "none"

            document.getElementById("item1At").style.display = "none"
            document.getElementById("item2At").style.display = "none"
            document.getElementById("item3At").style.display = "none"

            document.getElementById("item1Dc").style.display = "none"
            document.getElementById("item2Dc").style.display = "none"
            document.getElementById("item3Dc").style.display = "none"

            document.getElementById("item1Cb").style.display = "none"
            document.getElementById("item2Cb").style.display = "none"
            document.getElementById("item3Cb").style.display = "none"

                       
            //ESCONDENDO OS ÍCONES DE CHECADO
            document.getElementById("checado_simples1").style.display = "none"
            document.getElementById("checado_simples2").style.display = "none"
            document.getElementById("checado_simples3").style.display = "none"
            document.getElementById("checado_simples4").style.display = "none"
            document.getElementById("checado_espeto1").style.display = "none"
            document.getElementById("checado_espeto2").style.display = "none"
            document.getElementById("checado_espeto3").style.display = "none"
            document.getElementById("checado_sobremesa1").style.display = "none"
            document.getElementById("checado_sobremesa2").style.display = "none"
            document.getElementById("checado_sobremesa3").style.display = "none"
            document.getElementById("checado_bebida1").style.display = "none"
            document.getElementById("checado_bebida2").style.display = "none"
            document.getElementById("checado_bebida3").style.display = "none"

            //ZERANDO VALOR DO INPUT DA SENHA
            document.getElementById("senha_form").value = ""
            
            //RETIRANDO O ATRIBUTO href DO LINK QUE ENVIA PARA O WHATSAPP
            function remove_href(){
                enviarZap.removeAttribute('href')    
            }
            setTimeout(remove_href, 700)
            
        }

        else{
            alert("Preencha a sua localização antes de prosseguir")
        }
    }//---------------------fim do IF senha-----------------------
    else{
        alert("Senha incorreta")
    }            
}




function fecharFormulario(){
    document.getElementById("FundoEscuroDoFormulario").style.display = "none"
    document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
}


//FUNÇÕES PARA DESMARCAR RADIO DAS SUBOPCOES DO MENU, RETIRAR O CHECKED
function desmarcar_sobremesa1(){
    var moussies = document.getElementsByName("opcoesMousse")
    moussies.forEach(moussie => {        
        moussie.checked = false        
    })
}

function desmarcar_sobremesa2(){
    var sorvetes = document.getElementsByName("opcoesSorvete")
    sorvetes.forEach(sorvete => {        
        sorvete.checked = false        
    })
}

function desmarcar_sobremesa3(){
    var empadoes = document.getElementsByName("opcoesEmpadao")
    empadoes.forEach(empadao => {        
        empadao.checked = false        
    })
}

function desmarcar_bebida1(){
    var sucos = document.getElementsByName("opcoesSuco")
    sucos.forEach(suco => {        
        suco.checked = false        
    })
}

function desmarcar_bebida2(){
    var refris = document.getElementsByName("opcoesRefri")
    refris.forEach(refri => {        
        refri.checked = false        
    })
}

function desmarcar_bebida3(){
    var coqueteis = document.getElementsByName("opcoesCoquetel")
    coqueteis.forEach(coquetel => {        
        coquetel.checked = false        
    })
}


















//-------------------------------------------FUNÇÕES REFERENTES AO HISTÓRICO DE COMPRAS-------------------------------------------------------
function mostrar_historico_compras(){
    document.getElementById("historico_compras").style.display = "block"
}
function fecharHistorico(){
    document.getElementById("historico_compras").style.display = "none"
}

function vontar_telaPrincipal(){
    document.getElementById("historico_compras").style.display = "none"
    document.getElementById("menuLateral").style.transform = "translateX(-3000px)"
}

function apagar_historico(){
    var tabelas = document.querySelectorAll(".tabela")
    if(tabelas.length > 0){
        tabelas.forEach(function(tabela){
            tabela.remove()
        })
    }
    var horas = document.querySelectorAll(".hora")
    if(horas.length > 0){
        horas.forEach(function(hora){
            hora.remove()
        })
    }
    
    document.getElementById("avisoHistorico").style.display = "block"
}