import { MatchEntity } from '../entities/match.entity';
import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined } from 'class-validator';
import { TEAM } from './team.enum';

export class MatchDto {

    public id: string;
    
    @IsNotEmpty()
    @IsEnum(TEAM)
    public homeTeam: TEAM;

    @IsNotEmpty()
    @IsEnum(TEAM)
    public guestTeam: TEAM;

    @IsDefined()
    @Min(0)
    public homeTeamGoals: number;

    @IsDefined()
    @Min(0)
    public guestTeamGoals: number;

    public isMatchFinished: boolean;

    public static createFromEntity(matchEntity: MatchEntity): MatchDto {
        const match = new MatchDto();
        match.id = matchEntity.id;
        match.homeTeam = matchEntity.homeTeam;
        match.guestTeam = matchEntity.guestTeam;
        match.homeTeamGoals = matchEntity.homeTeamGoals;
        match.guestTeamGoals = matchEntity.guestTeamGoals;
        match.isMatchFinished = matchEntity.isMatchFinished;
        return match;
    }
}