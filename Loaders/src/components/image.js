import KiritoAsuna from '../img/314574.png';

class Image {
    
    insetBobImage() {
        const img = document.createElement('img');
        
        img.src = KiritoAsuna;
        img.width = 400;

        document.querySelector('body').appendChild(img)
    }
}

export default Image;