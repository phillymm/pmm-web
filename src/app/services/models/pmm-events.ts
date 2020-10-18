export class PMMEventAgenda {
    Time = '';
    Event = '';
}

export class PMMEvent {
    Title = '';
    RSVPLink = '';
    FBLink = '';
    Fee = '';
    FeeDetails = '';
    FeeLink = '';
    Date = '';
    Agenda: PMMEventAgenda[];
    Venue: '';
    Flyer: '';
    Video: '';
    SurveyLink:'';
}
