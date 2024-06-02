import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    constructor(
        private mailerService: MailerService,
        private readonly configService: ConfigService
    ) { }

    async sendConfirmationOfTracking(email: string, product_name: string, product_image: string) {
        const result = await this.mailerService.sendMail({
            to: email,
            subject: 'Welcome to Nepal Red Cross ! Confirm your Email',
            template: './confirmation', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                product_name,
                product_image,
            },
        });

        const previewUrl = nodemailer.getTestMessageUrl(result);
        console.log('Preview URL:', previewUrl);

        return result;
    }
}