/**
 * CRIC AFRIkA SARL - High-Precision Email Template
 * Branded with #ff8c42 (Orange) and #a8d05f (Green)
 */
export const getContactEmailTemplate = ({ name, company, email, phone, subject, message }) => {
    const date = new Date().toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })

    return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau Message de Contact - CRIC AFRIkA</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1a1d21;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 0;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">

                    <!-- Branded Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1a1d21 0%, #2d3139 100%); padding: 40px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.02em;">
                                <span style="color: #ff8c42;">CRIC</span> <span style="color: #ffffff;">AFRIkA</span> <span style="color: #a8d05f;">SARL</span>
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Portail de Communication Client</p>
                        </td>
                    </tr>

                    <!-- Notification Banner -->
                    <tr>
                        <td style="padding: 24px 40px; background-color: #fff4ec; border-bottom: 1px solid #ff8c4233;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="4" style="background-color: #ff8c42; border-radius: 2px;"></td>
                                    <td style="padding-left: 16px;">
                                        <p style="margin: 0; font-size: 16px; font-weight: 600; color: #c2410c;">Nouveau Message Reçu</p>
                                        <p style="margin: 2px 0 0 0; font-size: 13px; color: #ea580c;">${subject}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Details Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="margin: 0 0 24px 0; font-size: 18px; font-weight: 700; color: #1a1d21; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">Détails de l'Expéditeur</h2>

                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                                <tr>
                                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Nom Complet</td>
                                    <td style="padding: 8px 0; color: #1e293b; font-size: 15px; font-weight: 600;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Entreprise</td>
                                    <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">${company || '<span style="color: #94a3b8; font-style: italic;">Non spécifiée</span>'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff8c42; text-decoration: none; font-weight: 600;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td>
                                    <td style="padding: 8px 0; color: #1e293b;">${phone}</td>
                                </tr>
                            </table>

                            <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; color: #1a1d21;">Contenu du Message</h2>
                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 32px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
                            <p style="margin: 0; color: #94a3b8; font-size: 13px;">Ce message a été envoyé via le formulaire de contact sur <a href="https://cricafrika.com" style="color: #64748b; text-decoration: underline;">cricafrika.com</a></p>
                            <p style="margin: 8px 0 0 0; color: #cbd5e1; font-size: 12px;">Date de réception : ${date}</p>
                        </td>
                    </tr>

                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                    <tr>
                        <td align="center" style="color: #94a3b8; font-size: 12px;">
                            © ${new Date().getFullYear()} CRIC AFRIkA SARL. Tous droits réservés.
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>
</body>
</html>
    `
}
