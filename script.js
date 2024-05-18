const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft= e.target.offsetLeft

        //calculate where button clicks
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        //console.log(xInside, yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        //'this' cannot be used for arrow function
        this.appendChild(circle)

        //removes it from the DOM also
        setTimeout(() => circle.remove, 500);
    })
});