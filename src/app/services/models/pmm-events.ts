export class PMMEventAgenda {
    Time = '';
    Event = '';
}

export interface PMMEvent {
    Title: string;
    RSVPLink: string;
    FBLink: string;
    Fee: string;
    FeeDetails: string;
    FeeLink: string;
    Date: Date;
    Agenda: PMMEventAgenda[];
    Venue: string;
    Flyer: string;
    Video: string;
    SurveyLink: string;
    ProgramDescription: string;
    ProgramLink: string;
    EventPhotos: string;
}
