$(function () {
    var block_salads = document.getElementById('salads');
    var block_asian = document.getElementById('asian');
    var block_yogurt = document.getElementById('yogurt');
    var block_fruits = document.getElementById('fruits');

    window.addEventListener('scroll', () => {
        anim_based_on_scroll(block_salads, '#salads .design-text-right', 'fadeInRight');
        anim_based_on_scroll(block_asian, '#asian .design-text-left', 'fadeInLeft');
        anim_based_on_scroll(block_yogurt, '#yogurt .design-text-left', 'fadeInLeft');
        anim_based_on_scroll(block_fruits, '#fruits .design-text-right', 'fadeInRight');
    });
});

const anim_based_on_scroll = (block, element_query, animation) => {
    if (is_scrolled_under(block)){
        animateCSS_reset(element_query, animation);
    }
    else if (is_scrolled_over(block)){
        animateCSS_reset(element_query, animation);
    }
    else if (is_scrolled_to_bottom(block)){
        animateCSS(element_query, animation);
    }
}

const is_scrolled_under = (element) => {
    return  window.scrollY >=
            element.offsetTop +
            element.offsetHeight;
        }
        
const is_scrolled_over = (element) => {
    return  window.scrollY + window.innerHeight <=
    element.offsetTop;
}

const is_scrolled_to_bottom = (element) => {
    return  window.scrollY >=
            element.offsetTop +
            element.offsetHeight -
            window.innerHeight;
}

const animateCSS = (element_query, animation, prefix='animate__') => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element_query);

    node.classList.add(`${prefix}animated`, animationName);
}

const animateCSS_reset = (element_query, animation, prefix='animate__') => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element_query);

    node.classList.remove(`${prefix}animated`, animationName);
}