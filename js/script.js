// Exemplo de script: Carregar IP externo ou outras funcionalidades
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada!');

    // Você pode adicionar funcionalidades aqui
    const externalIPs = document.querySelectorAll('.external-ip');
    externalIPs.forEach((ip) => {
        ip.textContent = '45.170.99.143'; // Exemplo de IP externo dinâmico
    });
});
