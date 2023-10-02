import nodemailer, { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import Email from 'email-templates'
import i18next from 'i18next'

import { joinRelativeToMainPath } from '@/utils/paths'
import { MAIL_TPL_PATH, CLIENT_URL, MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } from '@/config/config'

export abstract class Mailer {
  private transporter: Transporter<SMTPTransport.SentMessageInfo>

  protected mailer: Email

  constructor() {
    this.createTransporter()

    this.initializeMailer()
  }

  private initializeMailer() {
    this.mailer = new Email({
      views: {
        root: joinRelativeToMainPath(MAIL_TPL_PATH),
        locals: {
          clientUrl: CLIENT_URL,
          t: i18next.t
        },
        options: { extension: 'ejs' }
      },
      preview: false,
      send: true,
      transport: this.transporter
    })
  }

  private createTransporter() {
    this.transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD
      }
    })
  }
}
