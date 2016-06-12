var mongoose = require('mongoose'),
    Task = mongoose.model('task', {
        hash: String,
        parentHash: String,
        owner: mongoose.Schema.Types.ObjectId,
        groups: mongoose.Schema.Types.ObjectId,
        title: String,
        created: Date,
        modified: Date,
        deadline: Date,
        priority: {
            type: Number,
            enum: [0,1,2,3,4]
        },
        notes: String
    });
