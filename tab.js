const changeTab = async (index) =>{
    document.addEventListener('click', ({ target: { dataset: { id = '' }}}) => {
        if (id.length > 0) {
            //STAR
            let activeTab = `#star${index}`;
            let star = document.querySelector(activeTab);
            document.querySelectorAll('.star').forEach(t => {t.classList.add('inactive')});
            star.classList.remove('inactive');
            //CONTENT    
            document.querySelectorAll('.tab').forEach(t => {t.classList.add('inactive')});
            document.querySelector(`#${id}`).classList.remove('inactive');
      }
    });
}
