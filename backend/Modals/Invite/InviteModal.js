const mongoose = require('mongoose');

const InviteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required: true,
    },
    invitedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Declined'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Invite = mongoose.model('Invite', InviteSchema);
module.exports = Invite;
