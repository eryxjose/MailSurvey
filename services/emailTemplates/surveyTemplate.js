const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center">
                    <h3>Diga se você está gostando dos nossos serviços</h3>
                    <p>Favor responder a pergunta abaixo:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Sim</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Não</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}