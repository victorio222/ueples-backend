import Invitation from '../models/invitation.model.js';

export default class InvitationRepository {
  static async createInvitation(data) {
    return Invitation.create(data);
  }

  static async findByToken(token) {
    return Invitation.findOne({ where: { token, status: 'pending' } });
  }

  static async markAccepted(invitation) {
    invitation.status = 'accepted';
    return invitation.save();
  }
}
