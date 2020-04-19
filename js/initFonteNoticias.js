
function initFonteNoticias() {
    const fontesNews = [
        {
            capa: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAB3CAMAAABMiJ5qAAAAZlBMVEWoAAD///+lAACdAADJi4uxTk6qJyfq0tL06+uhAADYrq779/e6YGC2VVW6WFj68fG0QUGpICCrMDCpDg6oFxe3S0vPlZXoy8vfuLjjv7/04eHAYWGxOjqmBwfEcHCuICDJenrMg4Pq0eE9AAABVUlEQVR4nO3Y226CQBCA4WVshRUrUDl51vd/yYJtF4urSS8aOpv/u8LZm/kT1GSNAQAAAAAAAAAAAAAAABAsEVPMx97X/Uk5DNYy9Z6/IFLViyYea4vuaN4Og81ST5WUbRLdy5bd2XpzO9pWWqpk5ymKomQvRg7Nz+GLkig5pt6mXddULiKVUZJnvqas//qU7XisJMrGbuN44bSrbntZtf3zJtUWJZVbuDnZwXV5+XystUVZ94alx0cL20RZlHFvX/rwT2imLEryrS9KnP6Tuqi3xBNVLJ1+FkSUrIZfBmuI+heIImpCRBE1oZuoqLbf04CisvPsS648qtpGT2mMMqf4SZHWKNs8KdIaJecAo4x47120Rx0DjDKH8d1eCFHm7sYyhCgzu/iu0pVHGdnXzYOua9Rwm1nriTIiRf7qdT0dPs6n3hQAAAAAAAAAAAAAAADAH/gA/UITHektB1QAAAAASUVORK5CYII=',
            midiaTitulo: 'G1',
            url: 'https://g1.globo.com/'
        },
        {
            capa: 'data:image/png;base64,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',
            midiaTitulo: 'O GLOBO',
            url: 'https://oglobo.globo.com/'
        },
        {
            capa: 'https://f.i.uol.com.br/hunting/folha/1/common/logo-folha-twitter.jpg',
            midiaTitulo: 'FOLHA DE S.PAULO',
            url: 'https://www.folha.uol.com.br/'
        },
        {
            capa: 'https://cdn-istoe-ssl.akamaized.net/wp-content/themes/tema_istoe/assets/images/share/istoe_facebook.png',
            midiaTitulo: 'ISTOÉ',
            url: 'https://istoe.com.br/'
        }
    ];
    
    const templateCard = document.querySelector('.templates .card-ancor');
    const fontesNewsWrapper = document.querySelector('.fontes-news-wrapper');
    
    fontesNews.forEach((fonte)=>{
        const card = templateCard.cloneNode(true);
        const capa = card.querySelector('.card-capa');
        const titulo = card.querySelector('.card-body .titulo');
    
        card.setAttribute('href', fonte.url);
        capa.style.backgroundImage = `url('${fonte.capa}')`;
        titulo.innerText = fonte.midiaTitulo;
    
        fontesNewsWrapper.appendChild(card);
    });
}

export default initFonteNoticias;