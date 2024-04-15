document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const contenedorQR = document.getElementById('qrC');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();


        let nombre = formulario.nombre.value;
        let apellido = formulario.apellido.value;
        let telefono = formulario.telefono.value;
        let email = formulario.email.value;
        let notas = formulario.nota.value;


        /* let contacto = {
        "Nombre": nombre,
            "Apellido": apellido,
                "Telefono": telefono,
                    "Email": email,
                        "Notas": notas
        };
        let contactoJSON = JSON.stringify(contacto);*/

        let vCard = `
        BEGIN:VCARD
        VERSION:3.0
        FN:${nombre} ${apellido}
        TEL:${telefono}
        EMAIL:${email}
        NOTE:${notas}
        END:VCARD
                `;


        contenedorQR.innerHTML = ''; // con esto limpio mi contenedor del qr


        const QR = new QRCode(contenedorQR, {
            text: vCard,// aqui va lo que convertiremos en qr
            width: 200,//aqui proporcione el tamaño 
            height: 200
        });

        // Crea un enlace para descargar el archivo vCard
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vCard);
        downloadLink.download = 'contacto.vcf';
        downloadLink.textContent = 'Descargar contacto';
        document.body.appendChild(downloadLink);
    });
});
