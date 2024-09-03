const avnca = document.queryselectorAll('.btn-proximo');
avanca.forEach(button =>{
  button.addEventListener('click', function(){
    const atual=document.querySelector('.ativo');
    const proximopasso='passo-'+this.getAttribute('data-poximo');
    atual.classlist.remove('ativo');
    document.getElementbyid(proximopasso).classlist.add('ativo'); 
  })
})
