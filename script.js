document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        
        const nomeMecanica = form.querySelector('input[name="nome_mecanica"]').value.trim();
        const seuNome = form.querySelector('input[name="seu_nome"]').value.trim();
        const whatsapp = form.querySelector('input[name="whatsapp"]').value.trim();
        const focoOficina = form.querySelector('select[name="foco_oficina"]').value;

       
        if (nomeMecanica === "" || seuNome === "" || whatsapp === "" || focoOficina === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
        } else {
            alert("Formulário enviado com sucesso!");

           
            const formData = {
                nomeMecanica,
                seuNome,
                whatsapp,
                focoOficina
            };

            
            console.log("Dados enviados:", formData);

            
        }
    });
});
