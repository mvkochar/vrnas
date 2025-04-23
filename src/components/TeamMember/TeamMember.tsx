import classes from './TeamMember.module.css'

type TeamMemberProps = {
    id: number
    image: string
    fullName: string
    position: string
}

const TeamMember = ({ image, fullName, position }: TeamMemberProps) => {
    return (
        <div className={classes.team_member}>
            <div className={classes.team_member_content} style={{ background: `url(${image}) no-repeat` }}>
                <div className={classes.team_member_social}>
                    <a href="" className="d-b">
                        <img src="/images/team-social/1.png" alt="team-social1" />
                    </a>
                    <a href="" className="d-b">
                        <img src="/images/team-social/2.png" alt="team-social2" />
                    </a>
                    <a href="" className="d-b">
                        <img src="/images/team-social/3.png" alt="team-social3" />
                    </a>
                </div>
                <h6 className={classes.team_member_name}>{fullName}</h6>
                <p className={classes.team_member_pos}>{position}</p>
            </div>
        </div>
    )
}

export default TeamMember