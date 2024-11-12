    const botoes = document.querySelectorAll(".botao");
    const contents = document.querySelectorAll('.content');
    const informacoes = document.querySelectorAll(".informacoes");
    const botaoSom = document.getElementById('botaoSom');
    const iconeSom = document.getElementById('iconeSom');
    var videoPlayer, videoPlayer2, info, info2, backgroundImage1, targetId4="video-sonic";

    document.addEventListener('DOMContentLoaded', () => {

    videoPlayer = document.getElementById("video-sonic");
    info = document.getElementById("info-sonic");
    videoPlayer.classList.add('activeV');
    info.classList.add('active');
    backgroundImage1 = document.getElementById("imagem-sonic");

    contents.forEach(content => {
        content.addEventListener('ended', () => {
            videoPlayer.classList.remove('activeV'); 
            backgroundImage1.classList.add('activeI');
        });
    }); 

    botaoSom.addEventListener('click', () => {
        if (videoPlayer.muted) {
            videoPlayer.muted = false; // Ativa o som
            iconeSom.src = 'src/imagens/Alto-falante.png'; // Altere para a imagem do som ligado
        iconeSom.alt = 'Som Ligado';
        } else {
            videoPlayer.muted = true; // Silencia o vídeo
            iconeSom.src = 'src/imagens/Silencioso.png'; // Altere para a imagem do som silencioso
        iconeSom.alt = 'Som Silencioso';
        }
    });

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            botoes.forEach(b => b.classList.remove('selected'));
            botao.classList.add('selected');
            videoPlayer.classList.remove('activeV'); 
            videoPlayer.pause();
            info.classList.remove('active');
            backgroundImage1.classList.remove('activeI');
            const targetId = botao.getAttribute('data-target');
            videoPlayer = document.getElementById(targetId);
            videoPlayer2 = videoPlayer;
            const targetId2 = videoPlayer.getAttribute('data-target');
            targetId4 = targetId;
            backgroundImage1 = document.getElementById(targetId2);
            const targetId3 = backgroundImage1.getAttribute('data-target');
            info = document.getElementById(targetId3);
            info2 = info;
            if (targetId !== targetId4) {
                videoPlayer2.classList.remove('activeV');
                videoPlayer.classList.add('activeV'); 
                info2.classList.remove('active');
                info.classList.add('active');
            }
            info.classList.remove('active');
            videoPlayer.classList.add('activeV');
            videoPlayer.currentTime = 0;
            videoPlayer.play();
            info.classList.add('active');
        });
    });
});