export class PMMEventAgenda {
    Time = '';
    Event = '';
}

export class PMMEvent {
    Title = '';
    RSVPLink = '';
    FBLink = '';
    MemberFee = '';
    NonMemberFee = '';
    FeeLink = '';
    Date = '';
    Agenda: PMMEventAgenda[];
}
