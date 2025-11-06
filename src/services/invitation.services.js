import InvitationRepository from '../repositories/invitation.repository.js';
import { generateToken } from '../utils/token.js';
import { sendInvitationEmail } from '../utils/email.js';

export default class InvitationService {
  static async sendInvitation(email, role) {
    const token = generateToken();
    const expires_at = new Date(Date.now() + 48 * 60 * 60 * 1000); // 48h expiry

    const invitation = await InvitationRepository.createInvitation({
      email, role, token, expires_at
    });

    await sendInvitationEmail(email, token);
    return invitation;
  }
}
