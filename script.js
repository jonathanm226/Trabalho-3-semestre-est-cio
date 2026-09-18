document.addEventListener('DOMContentLoaded', () => {

    // 1. GERENCIAMENTO DO FORMULÁRIO DE CONTATO (SIMULAÇÃO FRONTEND)
    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Evita o recarregamento da página e impede a busca do backend
            event.preventDefault();

            // Mapeia os inputs do formulário
            const inputs = contactForm.querySelectorAll('input');
            const textarea = contactForm.querySelector('textarea');

            // Captura os dados inseridos
            const dadosContato = {
                nome: inputs[0] ? inputs[0].value.trim() : '',
                email: inputs[1] ? inputs[1].value.trim() : '',
                telefone: inputs[2] ? inputs[2].value.trim() : '',
                mensagem: textarea ? textarea.value.trim() : ''
            };

            // Validação simples dos campos
            if (!dadosContato.nome || !dadosContato.email || !dadosContato.telefone || !dadosContato.mensagem) {
                alert('Por favor, preencha todos os campos antes de enviar.');
                return;
            }

            // Exibe mensagem de sucesso para a simulação
            alert(`Obrigado pelo contato, ${dadosContato.nome}!\nSua mensagem foi enviada com sucesso.`);

            // Limpa os campos do formulário
            contactForm.reset();
        });
    }


    // 2. FILTRO DE PESQUISA EM TEMPO REAL (PÁGINA IMOVEIS.HTML)
    const searchInput = document.getElementById('search-input');

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const termoBusca = event.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const titulo = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
                const localizacao = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

                // Exibe o card se o título ou a localização corresponderem à pesquisa
                if (titulo.includes(termoBusca) || localizacao.includes(termoBusca)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

});