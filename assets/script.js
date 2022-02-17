const soh = {
    active: 'active',
    closest: 'a',
    node: 'a[href',
    tgl: (e)=>{
        let pnl = null;
        if(typeof e !== "string"){
            pnl = e.target.closest(soh.closest);
        }else{
            pnl = document.querySelector(soh.node+'="#'+e+'"]');
        }
        let btns = document.querySelectorAll(soh.node+'"]');
        for(let i=0;i<btns.length;i++){
            btns[i].classList.remove(soh.active);
        }
        pnl.classList.add(soh.active);
    },
    init:()=>{
        let btns = document.querySelectorAll(soh.node+'"]');
        for(let i=0;i<btns.length;i++){
            btns[i].addEventListener('click', soh.tgl, false)
        }

    }
}
window.addEventListener('load', soh.init,false);