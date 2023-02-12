const alunos = ['Joao', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(alunos){
    if(listaDeAlunosEMedias[0].includes(alunos)){
        const [alunos, medias] = listaDeAlunosEMedias
        const indice = alunos.indexOf(alunos);
        const mediaDoAluno = medias[indice];

        console.log(`${alunos} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno nao encontrado")
    }

}

exibeNomeENota("Evaldo")