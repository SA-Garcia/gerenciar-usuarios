const { retornarUsuarios, adicionarNovoUsuario } = require ('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar a adição de um novo nome de usuário na lista', function (){
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario ({
        nome: 'Maria', 
        email: 'maria@email.com'
    });

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@email.com');
        expect(listaDeUsuarios.at(-1)).to.eql({ //to.deep.equal
            nome: 'Maria', 
            email: 'maria@email.com'
        });

    });
});

