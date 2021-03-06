class WaveGlitch {
    constructor(id, src, posX = 0, posY = 0, opacity = 1) {
        // аттрибуты
        this.id   = id
        this.src  = src
        this.posX = posX
        this.posY = posY

        this.canvas          = document.getElementById(id);
        this.ctx             = this.canvas.getContext('2d')
        this.canvasWidth     = this.canvas.width;
        this.canvasHeight    = this.canvas.height;
        this.ctx.globalAlpha = opacity;

        // настройки
        this.imgSlice      = this.canvasWidth / 2  // кол-во кусочков на которое обрезается img
        this.imgSliceWidth = 2    // обрезаем два кусочка
        this.imgOffsetX    = 2    // двигаем два кусочка
        this.waveAmplitude = 1
        this.waveSpeed     = 0

        this.image      = new Image();
        this.image.src  = this.src
        this.imgHeingt  = this.canvasHeight // можно вынести в атрибуты класса

        // this.image.setAttribute('width:', '325')
        // this.image.setAttribute('height:', '281')
        this.requestAnim = null
    }

    startAnimate = () => {
        this.waveSpeed += 0.10;

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

        for (let i = 0; i <= this.imgSlice; i++) {
            this.ctx.drawImage(
                this.image,

                this.imgOffsetX * i - this.posX,
                (Math.sin(this.waveSpeed - (i / 4) ) * this.waveAmplitude),
                this.imgSliceWidth,
                this.imgHeingt,

                this.imgOffsetX * i,
                this.posY,
                this.imgSliceWidth,
                this.imgHeingt
            )
        }

        this.requestAnim = requestAnimationFrame(this.startAnimate);
    }

    init = () => {
        this.image.addEventListener('load', this.startAnimate)
    }

    destroy = () => {
        cancelAnimationFrame(this.requestAnim)
    }
}

const waveGlitch = new WaveGlitch('canvas', 'img/search.svg', 0, -30, 1)
waveGlitch.init()