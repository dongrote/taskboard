var mongoose = require('mongoose'),
    Task = mongoose.model('task', {
        hash: String,
        parent: mongoose.Schema.Types.ObjectId,
        owner: mongoose.Schema.Types.ObjectId,
        groups: mongoose.Schema.Types.ObjectId,
        title: String,
        created: Date,
        modified: Date,
        deadline: Date,
        priority: {
            type: Number,
            enum: [
                0, /* xtrm */
                1, /* high */
                2, /* norm */
                3, /* low  */
                4  /* wishlist */
            ]
        },
        state: {
            type: Number,
            enum: [
                0, /* open */
                1, /* closed */
                2, /* in progress */
                3, /* rejected */
                4, /* blocked (by sub-task) */
            ]
        },
        notes: String
    });
