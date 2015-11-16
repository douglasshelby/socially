Meteor.startup(function () {
    if (Parties.find().count() === 0) {
    var parties = [
        {'name': 'Dubstep-Free Zone',
        'description': 'Fast just got faster with Nexus S.',
        'public': true},
        {'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'public': true},
        {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'public': true}
    ];
    for (var i = 0; i < parties.length; i++)
        Parties.insert(parties[i]);
    };
});