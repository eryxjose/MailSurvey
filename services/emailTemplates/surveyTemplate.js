module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center">
                    <h3>Diga se você está gostando dos nossos serviços</h3>
                    <p>Favor responder a pergunta abaixo:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3000">Sim</a>
                    </div>
                    <div>
                        <a href="http://localhost:3000">Não</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}