export class CommitteeMembers {
    role: string;
    person: string;
    email: string;
}

export class Committee {
    Title: string;
    Email: string;
    Picture: string;
    Members: CommitteeMembers[];
}
